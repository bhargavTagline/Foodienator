import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { appImages } from "../../assets/image";
import gStyles from "../../style/styles";
import { RFValue } from "react-native-responsive-fontsize";
import { getDataFromAsyncStorage, newHeight, newWidth } from "../../utils/helper";
import { appConst } from "../../utils/const";




const StartScreen = () => {
    const navigation = useNavigation();



    const checkStorage = async () => {

        const em = getDataFromAsyncStorage(appConst.Email)

        // const em = await AsyncStorage.getItem('Email')
        const uname = getDataFromAsyncStorage(appConst.Password);
        const pass = getDataFromAsyncStorage(appConst.Password);

        console.log(em);
        console.log(uname);
        console.log(pass);

        if ((em != null || uname != null) && pass != null) {
            navigation.navigate('HomeScreen')
        } else {
            console.log('Storage is null');
        }
    }


    useEffect(() => {
        // checkStorage();
    });


    return (
        <SafeAreaView style={{ ...gStyles.safeAreaStyle }}>
            <Image source={appImages.fooddish} style={styles.imagestyle} resizeMode={"contain"} />
            <Text style={styles.headingStyle}>Foodienator</Text>
            <Text style={styles.textStyle}>Order your favorite Meals Here!</Text>

            <View style={styles.view3Style}>
                <TouchableOpacity style={{ ...styles.signInStyle, ...styles.shadow }} onPress={() => navigation.navigate('Login')}><Text style={{ ...styles.fontButtonStyle, color: '#FFFFFF' }}>Sign in</Text></TouchableOpacity>
                <TouchableOpacity style={{ ...styles.registerStyle, ...styles.shadow }} onPress={() => navigation.navigate('SingUp')}><Text style={{ ...styles.fontButtonStyle, color: '#202322' }}>Register</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    imagestyle: {
        height: newHeight(400),
        width: newWidth(450),
        marginLeft: newWidth(20),
    },
    backgroundImg: {
        top: 130,
        width: 400,
        height: 255,
    },
    view3Style: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
        // paddingBottom: 
        bottom: 60,
    },
    textStyle: {
        marginTop: newHeight(10),
        color: 'white',
        fontSize: 15,
        width: 200,
        textAlign: 'center',
        alignSelf: 'center'
    },
    headingStyle: {
        marginTop: newHeight(50),
        fontSize: RFValue(40),
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
        // backgroundColor: 'green'
        // fontFamily: 'Poppins'
        // font-family: 'Poppins',
    },
    signInStyle: {
        backgroundColor: '#2DB6A3',
        height: newHeight(60),
        width: newWidth(150),
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
        justifyContent: 'center',
    },
    registerStyle: {
        backgroundColor: '#DADADA',
        height: newHeight(60),
        width: newWidth(150),
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'center',
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    fontButtonStyle: {
        textAlign: 'center',
        fontSize: RFValue(20),
        fontWeight: 'bold'
    },


});
export default StartScreen;