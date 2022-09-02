import React from "react";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screen/StartScreen/StartScreen";
import SingUp from "../screen/SignUp/SingUp";
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import WelcomeScreen from "../screen/WelcomeScreen/WelocmeScreen";
import Login from "../screen/Login/Login";




const Stack = createNativeStackNavigator();


const NavigationStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialState={'StartScreen'}>
                <Stack.Screen name='StartScreen' component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SingUp' component={SingUp} options={{ headerShown: false }} />
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default NavigationStack