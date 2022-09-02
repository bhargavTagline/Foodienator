import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { newHeight, newWidth } from "../../utils/helper";

const TextInputField = ({ LeftIcon, placeholder, setValue, RightIcon, setPassSecure, passSecure, type }) => {
    // console.log(LeftIcon, placeholder)
    return (
        // <View style={{ alignContent: 'center', alignItems: 'center', }}>
        <View style={styles.textBoxStyle} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={LeftIcon} style={{ alignSelf: 'center', height: wp(6), width: wp(6), resizeMode: 'contain' }} />
                <TextInput
                    style={{ fontSize: 20, width: wp(70), paddingLeft: 10, height: newHeight(70) }}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    onChangeText={(value) => { setValue(value) }}
                    secureTextEntry={passSecure} />
            </View>
            {type && type == "password" ?
                <TouchableOpacity onPress={() => { setPassSecure(!passSecure) }} >
                    <Image source={RightIcon} style={{ alignSelf: 'center', height: wp(8), width: wp(8), resizeMode: 'contain' }} />
                </TouchableOpacity> :
                <View style={{ alignSelf: 'center', height: wp(8), width: wp(8) }} />
            }
        </View>
        // </View >
    );
}


const styles = StyleSheet.create({
    textBoxStyle: {
        width: '90%',
        // paddingLeft: newWidth(10),
        borderRadius: 18,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(4),
        marginTop: wp(4)
    },
})

export default TextInputField;