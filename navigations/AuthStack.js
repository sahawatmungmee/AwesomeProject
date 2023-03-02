import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../components/week13/Welcome";
import Login from "../components/week13/Login";
import Register from "../components/week13/Register";



const Stack = createStackNavigator();

export default function AuthStack() {
    const userToken = "";

    if(userToken){
        return (
            <Stack.Navigator>    
                <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />    
            </Stack.Navigator>
        );
    }else{
        return (
            <Stack.Navigator>    
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
                <Stack.Screen name="Register" component={Register} options={{ title: "Register" }} />                
            </Stack.Navigator>
        );
    }   
}
