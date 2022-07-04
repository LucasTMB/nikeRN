import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer6";

export default function Detail5({navigation}) {

    navigation.setOptions({
        headerTitle: 'Nike Air Force 1 Mid Our Force'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
               source={require('../../assets/detail6.png')}
               style={styles.image}
               resizeMode='cover'
            />

            <View>

                <View>
                    <Text style={[styles.title, {fontSize: 24}]}>
                        R$ 999,99
                    </Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize: 30}]}>
                        Nike Air Force 1 Mid Our Force
                    </Text>
                </View>

                <View style={styles.dotContainer}>
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
                        Nike Air Force 1 Mid Our Force
                    </Text>
                    <Text style={styles.textContent}>
                        Inspirado em espíritos rebeldes que criam novas formas de expressão, o "Our Force 1" AF1 traz tons de streetwear por excelência a um estilo icônico. Celebrando as origens do streetwear com atitudes e grampos punk, o cabedal de couro texturizado preto é resistente e oferece um toque premium aos seus tênis. Comemorando o 40º aniversário do AF1, o bordado oversized "AIR FORCE 1, SINCE 1982" aparece nas tiras do tornozelo deste clássico do basquete que virou streetwear. 
                    </Text>
                    <Text style={styles.textList}>
                        - Entressola de espuma
                    </Text>
                    <Text style={styles.textList}>
                        - Sistema de amarração de largura variável
                    </Text>
                    <Text style={styles.textList}>
                        - O fecho aderente permite personalizar o estilo e caimento
                    </Text>
                    <Text style={styles.textList}>
                        - Perfurações na ponta
                    </Text>
                    <Text style={styles.textList}>
                        - Sola de borracha sem marcação para maior tração e durabilidade
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