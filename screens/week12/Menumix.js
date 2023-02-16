import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MyIcon from '../../components/week3/MyIcon';


export default function Card() {
    return (
        <View style={{ padding: 30 }}>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}></View>
                <View>
                    <Text style={{ fontSize: 40 }}>แผนการเรียน</Text>
                    <Text style={{ fontSize: 20 }}>เลือกเทมอสำหรับค้นหา</Text>
                </View>
            </View>


            <View style={{ padding: 30, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 80, width: 400, borderRadius: 100 / 2, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ marginLeft: 10 }}></View>
                        <View>
                            <Text style={{ fontSize: 20 }}>2/2565</Text></View>

                    </View>

                </View>
                <View style={{ padding: 30 }}>
                    <MyIcon title="ค้นหา" name="check" size={30} color="orange" />
                </View>
            </View>







        </View>
    );
}