import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer3";

export default function Detail3({navigation}) {

    navigation.setOptions({
        headerTitle: 'Nike LeBron Witness 6'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
               source={require('../../assets/detail3.png')}
               style={styles.image}
               resizeMode='cover'
            />

            <View>

                <View>
                    <Text style={[styles.title, {fontSize: 24}]}>
                        R$ 699,99
                    </Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize: 30}]}>
                        Nike LeBron Witness 6
                    </Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#000' />
                    <Dot color='#34E70D' />
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
                        Nike LeBron Witness 6
                    </Text>
                    <Text style={styles.textContent}>
                        Nesta edição do LeBron Witness, trocamos o Zoom Air por um amortecimento Max Air visível – o favorito de LeBron – para ajudar a dissipar as forças de impacto e proporcionar uma sensação mais ágil. A parte de cima em tela leve e reforçada mantém a contenção em todo o pé, dos cadarços que envolvem o antepé às peças externas moldadas que firmam o calcanhar. 
                    </Text>
                    <Text style={styles.textList}>
                        - Parte superior da língua em relevo
                    </Text>
                    <Text style={styles.textList}>
                        - Língua em espuma e tela
                    </Text>
                    <Text style={styles.textList}>
                        - Boca acolchoada
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