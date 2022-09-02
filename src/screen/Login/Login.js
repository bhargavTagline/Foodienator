import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { appImages } from "../../assets/image";
import { appIcon } from "../../assets/icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextInputField from "../../components/TextInputFeild/TextInputField";
import { RFValue } from "react-native-responsive-fontsize";
import { getDataFromAsyncStorage, newHeight, newWidth } from "../../utils/helper";
import { appConst } from "../../utils/const";


const Login = () => {
    const navigation = useNavigation();
    const [passSecure, setPassSecure] = useState(true);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const checkUser = async () => {

        console.log('CheckUser called');

        em = await getDataFromAsyncStorage(appConst.Email)
        uname = await getDataFromAsyncStorage(appConst.UserName)
        PassWord = await getDataFromAsyncStorage(appConst.Password)

        console.log('Uname = ' + uname)
        console.log('pass = ' + PassWord);
        console.log(' Email =' + em);


        if (email == "" && pass == "") {
            Alert.alert('Alert', 'Please Enter Email and password')
        } else if (email == "") {
            Alert.alert('Alert', 'Please Enter Email')
        } else if (pass == "") {
            Alert.alert('Alert', 'Please Enter Password')
        } else if (email != "" && pass != "" && em != null && pass != null && uname != null) {
            if ((email == em || email == uname) && PassWord == pass) {
                Alert.alert('Alert', 'Welcome ' + email)
                navigation.navigate('HomeScreen');
            } else if (email != em || email != uname && pass != PassWord) {
                Alert.alert('Alert', 'Email/username and Password user not found  ')
            } else if (email != em && pass != PassWord) {
                Alert.alert('Alert', 'Email Is not valied ')
            } else if (email != em || email != em) {
                Alert.alert('Alert', 'Email Is not valied ')
            } else if (pass != PassWord) {
                Alert.alert('Alert', 'Password Is not valied ')
            } else {
                Alert.alert('Alert', 'Please Register Then login  ')
            }
        } else {
            Alert.alert('Alert', 'Please Register then login')
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <Image source={appImages.manImg} style={styles.imageStyle} resizeMode={"contain"} />
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textStyle}>Welome Back</Text>
                <Text style={{ width: wp(80), textAlign: 'center', color: '#000000', fontSize: RFValue(13) }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Diam maecenas mi non sed ut odio.Non, justo, sed facilisi et.
                </Text>
            </View>
            <View>
                <TextInputField LeftIcon={appIcon.userIcon} placeholder={'Username,Email'} setValue={setEmail} />
                <TextInputField LeftIcon={appIcon.passIcon} placeholder={'Password'} setPassSecure={setPassSecure} passSecure={passSecure} setValue={setPass} RightIcon={appIcon.eye} type={'password'} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
                    <Text style={{ marginLeft: newWidth(30), color: 'white', fontSize: RFValue(16), marginTop: newHeight(20) }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ marginRight: newWidth(30), color: 'black', fontSize: RFValue(16), marginTop: 20 }}>Forget Password ?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => checkUser()} style={{ ...styles.shadow, ...styles.registerButton }}>
                <Text style={{ fontSize: RFValue(25), color: 'white' }}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    imageStyle: {
        marginTop: newHeight(30),
        width: newWidth(490),
        height: newHeight(350),
    },

    safeAreaStyle: {
        flex: 1,
        backgroundColor: '#2DB6A3',
    },
    textStyle: {
        fontSize: RFValue(33),
        textAlign: 'center',
        color: '#464444',
        fontWeight: 'bold',
        paddingTop: wp(5)
    },
    textBoxStyle: {
        paddingLeft: 20,
        width: wp('85%'),
        height: 60,
        top: 20,
        borderRadius: 18,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,

    },
    registerButton: {
        backgroundColor: '#DFB497',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: newHeight(20),
        width: wp(70),
        height: hp(6),
        justifyContent: 'center',
        borderRadius: 25,
    }

});


export default Login;