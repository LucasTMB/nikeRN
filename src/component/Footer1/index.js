import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Shoes from '../Shoes'

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/2.png')} cost="R$ 639,99">
                            Nike Kyrie 6 Unissex
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/3.png')} cost="R$ 699,99">
                            Nike LeBron Witness 6 Masculino
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/4.png')} cost="R$ 639,99">
                            Air Jordan 1 Mid SE Masculino
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/5.png')} cost="R$ 799,99">
                            Jordan Zion 1 Masculino
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/6.png')} cost="R$ 999,99">
                            Nike Air Force 1 Mid - Our Force
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})