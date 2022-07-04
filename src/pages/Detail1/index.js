import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer1";

export default function Detail1({navigation}) {

    navigation.setOptions({
        headerTitle: 'Nike Joyride Run Flyknit'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
               source={require('../../assets/detail1.png')}
               style={styles.image}
               resizeMode='cover'
            />

            <View>

                <View>
                    <Text style={[styles.title, {fontSize: 24}]}>
                        R$ 549,90
                    </Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize: 30}]}>
                        Nike Joyride Run Flyknit
                    </Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#2379f4' />
                    <Dot color='#ddd' />
                    <Dot color='#000' />
                </View>

                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor='#17181a' color='#FFF'>
                            40
                        </SizeButton>
                        <SizeButton bgColor='#17181a' color='#FFF'>
                            41
                        </SizeButton>
                        <SizeButton bgColor='#17181a' color='#FFF'>
                            42
                        </SizeButton>
                        <SizeButton bgColor='#17181a' color='#FFF'>
                            43
                        </SizeButton>
                        <SizeButton bgColor='#17181a' color='#FFF'>
                            44
                        </SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike Joyride Run Flyknit
                    </Text>
                    <Text style={styles.textContent}>
                        O Nike Joyride Run Flyknit foi projetado para facilitar a corrida e dar um dia de descanso às suas pernas. Pequenas esferas de espuma debaixo dos pés se adaptam ao seu pé para um amortecimento exclusivo a cada quilômetro.
                    </Text>
                    <Text style={styles.textList}>
                        - Peso: 323 g (tamanho 42 masculino) 
                    </Text>
                    <Text style={styles.textList}>
                        - Desvio: 8 mm
                    </Text>
                    <Text style={styles.textList}>
                        - Puxador no calcanhar
                    </Text>
                    <Text style={styles.textList}>
                        - Não se destina ao uso como EPI
                    </Text>
                </View>

                <Button/>

                <View style={styles.line}/>

                <Footer/>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%',
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
       borderWidth: 1,
       borderBottomColor: '#DDD',
       marginVertical: '2%' 
    }
});