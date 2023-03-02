import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import AuthLaravel from "../../services/AuthLaravel";

export default function Profile(){
    const [ user, setUser ] = useState(null);

    useEffect(async()=>{
        let u = await AuthLaravel.getUser("xxxxxxxxxxxxxxxxxx");
        setUser(u);
    },[]);

    const onLogout = async()=>{ };
    return (
        <View >
            <Text>Profile Page</Text>
            <Text>{ JSON.stringify(user) }</Text>
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
}
