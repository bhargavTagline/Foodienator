import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { appImages } from "../../assets/image";
import { appIcon } from "../../assets/icons";
import gStyles from "../../style/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TextInputField from "../../components/TextInputFeild/TextInputField";
import { RFValue } from "react-native-responsive-fontsize";
import { useEffect } from "react/cjs/react.production.min";
import { newHeight, newWidth, setDataInAsyncStorage } from "../../utils/helper";
import { appConst } from "../../utils/const";

// let UserData = []

export const userInfo = {
    email: String,
    userName: String,
    password: String,
}

const SingUp = () => {
    const navigation = useNavigation();
    const [passSecure, setPassSecure] = useState(true);
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [UserData, setUserData] = useState([userInfo]);

    const [userDetail, setUserDetail] = useState([]);


    const validation = () => {
        // console.log(email);
        // console.log(userName);
        // // console.log(pass);
        // length = UserData.length;

        let data = userInfo
        data.email = email
        data.password = pass
        data.userName = userName




        const userInfo1 = {
            email: email,
            userName: userName,
            password: pass,
        }

        console.log({ data });
        console.log(UserData);

        console.log('-----------------------------');

        console.log({ userInfo1 });
        console.log(userDetail);

        if (email == "" && userName == "" && pass == "") {
            Alert.alert('Alert', 'Please Enter Email,Username and password');
        } else if (email == "") {
            Alert.alert('Alert', 'Please Enter Email')
        } else if (userName == "") {
            Alert.alert('Alert', 'Please Enter Username')
        } else if (pass == "") {
            Alert.alert('Alert', 'Please Enter Password')
        } else if (pass.length < 8) {
            Alert.alert('Alert', 'Password Minimum 8 Character')
        } else if (email != "" && userName != "" && pass != "") {
            // UserData[0].
            // data.push(userInfo)
            setUserData([...UserData, userInfo1])
            setUserDetail([...userDetail, userInfo1])
            _storeData(email, userName, pass)

        }
    }

    // useEffect(() => {
    //     console.log({ UserData });
    // }, [UserData])

    const getData = () => {
        // let em = AsyncStorage.getItem('Email');
        // let pssss = AsyncStorage.getItem('Pass')
        // let uname = AsyncStorage.getItem('Username')


        console.log(em);
        console.log(pssss);
        console.log(uname);
    }
    const _storeData = async (email, userName, pass) => {
        console.log('In the _storedata');
        setDataInAsyncStorage(appConst.Email, email);
        setDataInAsyncStorage(appConst.UserName, userName);
        setDataInAsyncStorage(appConst.Password, pass).then(
            navigation.navigate('WelcomeScreen')
        )

        // try {
        //     await AsyncStorage.setItem('Email', email);
        //     await AsyncStorage.setItem('Username', userName);
        //     await AsyncStorage.setItem('Pass', pass).then(
        //         // Alert.alert('Welcome', 'Welcome ' + userName),

        //     )
        // } catch (error) {
        //     console.log(error);
        // }

    }


    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <Image source={appImages.registerimg} style={styles.imageStyle} resizeMode={"contain"} />

            <TextInputField LeftIcon={appIcon.EmailIcon} placeholder={'Email'} setValue={setEmail} />
            <TextInputField LeftIcon={appIcon.userIcon} placeholder={"Username"} setValue={setUserName} />
            <TextInputField LeftIcon={appIcon.passIcon} placeholder={"Password"} setValue={setPass} RightIcon={appIcon.eye} setPassSecure={setPassSecure} passSecure={passSecure} type={'password'} />
            <TouchableOpacity onPress={() => {
                validation()
            }} style={{ ...styles.shadow, ...styles.button }}>
                <Text style={{ fontSize: RFValue(25), color: 'white', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>Register</Text>
            </TouchableOpacity>
            <Text onPress={() => { navigation.navigate('Login') }} style={{ color: 'white', fontSize: RFValue(15), marginTop: newHeight(40) }}>Already have a account ? Login</Text>
        </SafeAreaView >
    );
};



const styles = StyleSheet.create({
    imageStyle: {
        width: newWidth(400),
        height: newHeight(400),
    },
    backgroundImg: {
        top: newHeight(20),
        width: newWidth(350),
        height: newHeight(255),
        // height: 255,
    },
    safeAreaStyle: {

        flex: 1,
        backgroundColor: '#2DB6A3',
        alignItems: 'center',
    },

    textBoxStyle: {
        paddingLeft: newWidth(10),
        width: wp('85%'),
        height: newHeight(65),
        top: newHeight(20),
        borderRadius: 18,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',

    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    button: {
        height: newHeight(60),
        backgroundColor: '#DFB497',
        width: newWidth(350),
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        marginTop: newHeight(20)
    },
});



export default SingUp;

