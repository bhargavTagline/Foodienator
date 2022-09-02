import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { appImages } from "../../assets/image";
import { RFValue } from "react-native-responsive-fontsize";
import { newHeight, newWidth } from "../../utils/helper";



const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <Image source={appImages.register} style={styles.imageStyle} resizeMode={"contain"} />
            <Text style={{ ...styles.textStyle, marginTop: newHeight(30) }}>Registration</Text>
            <Text style={styles.textStyle}>Complete</Text>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity style={{
                    ...styles.shadow, ...styles.button

                }} onPress={() => { navigation.navigate('Login') }}>
                    <View >
                        <Text style={styles.text}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    imageStyle: {
        width: newWidth(450),
        height: newHeight(400),
        alignSelf: 'center',
        marginLeft: newWidth(40)
    },
    backgroundImg: {
        top: 40,
        width: 386,
        height: 255,
    },
    safeAreaStyle: {
        flex: 1,
        backgroundColor: '#22C7A9',
    },
    textStyle: {

        fontSize: RFValue(30),
        textAlign: 'center',
        color: '#464444',
        fontWeight: 'bold'
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 50,
        backgroundColor: '#DFB497',
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 22,
    }
});


export default WelcomeScreen;