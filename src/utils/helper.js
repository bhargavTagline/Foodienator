import AsyncStorage from "@react-native-async-storage/async-storage";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const newHeight = (objHeight) => {
    const deviceHeight = hp('100%')
    const designHeight = 885;
    let finalHeight;
    finalHeight = (deviceHeight * objHeight) / designHeight;
    return finalHeight;
}


const newWidth = (objWidth) => {
    const deviceWidth = wp('100%')
    const designWidth = 439;
    let finalWidth;
    finalWidth = (deviceWidth * objWidth) / designWidth;
    return finalWidth;
}

const setDataInAsyncStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.log(error);
    }
}

const getDataFromAsyncStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value;
    } catch (error) {
        console.log(error);
    }
}


export { newHeight, newWidth, setDataInAsyncStorage, getDataFromAsyncStorage } 