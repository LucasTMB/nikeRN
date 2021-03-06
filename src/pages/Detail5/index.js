import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer5";

export default function Detail5({navigation}) {

    navigation.setOptions({
        headerTitle: 'Jordan Zion 1 Masculino'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
               source={require('../../assets/detail5.png')}
               style={styles.image}
               resizeMode='cover'
            />

            <View>

                <View>
                    <Text style={[styles.title, {fontSize: 24}]}>
                        R$ 799,99
                    </Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize: 30}]}>
                        Jordan Zion 1 Masculino
                    </Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#fb6e53' />
                    <Dot color='#ddd' />
                    <Dot color='#000' />
                    <Dot color='#0DE7BF' />
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
                        Jordan Zion 1 Masculino
                    </Text>
                    <Text style={styles.textContent}>
                        Com uma personalidade p??-no-ch??o e habilidades de outro mundo, Zion ?? diferente de qualquer pessoa. Na quadra, sua aura tranquila e familiar se transforma em uma for??a inigual??vel de n??vel atl??tico e velocidade imbat??veis. O Zion 1 inaugura sua linha de assinatura com um design inspirado na dualidade entre sua personalidade humilde e suas habilidades poderosas. O amortecimento Air Strobel de comprimento total ?? combinado com uma unidade Zoom Air no antep??, criando uma mistura fabulosa de conforto e maciez com agilidade e dinamismo. Ele ?? leve, est??vel e resistente, com a tra????o agressiva que proporciona ader??ncia e controle a Zion na quadra. 
                    </Text>
                    <Text style={styles.textList}>
                        - Assinatura de Zion na l??ngua e na sola
                    </Text>
                    <Text style={styles.textList}>
                        - Al??a sobre os cadar??os para um ajuste seguro
                    </Text>
                    <Text style={styles.textList}>
                        - Logotipo Jumpman no calcanhar
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