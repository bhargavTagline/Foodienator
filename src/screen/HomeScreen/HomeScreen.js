import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { appImages } from "../../assets/image";
import { appIcon } from "../../assets/icons";

import { newHeight } from "../../utils/helper";

const HomeScreen = () => {
    const navigation = useNavigation();
    // const uname = AsyncStorage.getItem('Username');

    // const cleaData = async () => {
    //     em = await AsyncStorage.getItem('Email')
    //     uname = await AsyncStorage.getItem('Username')
    //     pass = await AsyncStorage.getItem('Pass')
    //     try {
    //         AsyncStorage.removeItem('Email')
    //         AsyncStorage.removeItem('Username')
    //         AsyncStorage.removeItem('Pass')
    //         console.log('Data is clear');
    //     } catch (e) {
    //         console.log('Error Found' + e);
    //     }
    // }


    // const getData = async () => {
    //     em = await AsyncStorage.getItem('Email')
    //     uname = await AsyncStorage.getItem('Username')
    //     pass = await AsyncStorage.getItem('Pass')
    //     console.log('This is em = ' + em + 'uname = ' + uname + ' pass ' + pass);
    // }


    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            {/* <View>
                <Text>
                    Hello Home Screen
                </Text>
                <TouchableOpacity onPress={() => cleaData()}>
                    <Text>
                        Clear data
                    </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => getData()} >
                    <Text>
                        get data
                    </Text>
                </TouchableOpacity>
            </View> */}
            <View style={{ paddingHorizontal: 20 }} >
                <View style={styles.view1Style}>
                    <Image source={appIcon.drawarIcon} resizeMode="contain" />
                    <Image source={appIcon.searchIcon} resizeMode="contain" />
                </View>

                <View style={styles.view2Style}>
                    <Image source={appIcon.mapIcon} />
                    <Text style={styles.heading}>
                        Work Place
                    </Text>
                    <Image source={appIcon.downIcon} resizeMode="contain" />
                </View>

                <Text
                    style={styles.subtitleStyle}>
                    Choose your preferred meal
                </Text>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        // padding: 20,
        backgroundColor: 'white',

    },
    view1Style: {
        top: 20,
        flexDirection: 'row',
        // backgroundColor: 'green',
        justifyContent: 'space-between',
    },
    view2Style: {
        marginTop: newHeight(50),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitleStyle: {
        color: '#454745',
    },
    heading: {
        color: '#494949',
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
    }

});
export default HomeScreen;