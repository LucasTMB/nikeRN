import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer";

import KyrieBlack from '../../assets/detail.png';

export default function Detail({navigation}) {

    navigation.setOptions({
        headerTitle: 'Nike Kyrie 6 Unissex'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
               source={KyrieBlack}
               style={styles.image}
               resizeMode='cover'
            />

            <View>

                <View>
                    <Text style={[styles.title, {fontSize: 24}]}>
                        R$ 639,99
                    </Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize: 30}]}>
                        Nike Kyrie 6 Unissex
                    </Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#000' />
                    <Dot color='#fb6e53' />
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
                        Nike Kyrie 6 Unissex
                    </Text>
                    <Text style={styles.textContent}>
                        Criado para o jogo criativo e imprevisível de Kyrie Irving, o Kyrie 6 se concentra no conforto, no controle e no retorno de energia para proporcionar mais velocidade e frescor. O amortecimento resiliente possui espuma macia que oferece suporte, responsividade e transições suaves do calcanhar ao dedo. A faixa no mediopé e o colarinho acolchoado oferecem fixação e permitem vantagem em relação aos adversários. 
                    </Text>
                    <Text style={styles.textList}>
                        - O antepé em mesh é leve e respirável.
                    </Text>
                    <Text style={styles.textList}>
                        - Região reforçada nos dedos é resistente à abrasão.
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