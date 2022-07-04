import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";
import Button from "../../component/Button";
import Footer from "../../component/Footer4";

export default function Detail4({navigation}) {

    navigation.setOptions({
        headerTitle: 'Air Jordan 1 Mid SE Masculino'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
               source={require('../../assets/detail4.png')}
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
                        Air Jordan 1 Mid SE Masculino
                    </Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#ddd' />
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
                        Air Jordan 1 Mid SE Masculino
                    </Text>
                    <Text style={styles.textContent}>
                        Faça seu estilo decolar com o Air Jordan 1 Mid, o sneaker das infinitas possibilidades. Essa nova edição especial do famoso tênis de cano médio oferece conforto ininterrupto para quem não se cansa do clássico de herança. 
                    </Text>
                    <Text style={styles.textList}>
                        - Amortecimento Air encapsulado
                    </Text>
                    <Text style={styles.textList}>
                        - Couro legítimo e materiais têxteis
                    </Text>
                    <Text style={styles.textList}>
                        - Logotipo Swoosh costurado
                    </Text>
                    <Text style={styles.textList}>
                        - Logotipo Wings na boca
                    </Text>
                    <Text style={styles.textList}>
                        - Tração de borracha
                    </Text>
                    <Text style={styles.textList}>
                        - Entressola de espuma
                    </Text>
                    <Text style={styles.textList}>
                        - Lingua de tecido woven
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