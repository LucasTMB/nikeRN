import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function SizeButton(props) {

    const [toggle, setToggle] = useState(false);
    const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

    return (
        <TouchableOpacity onPress={handleChangeToggle}>
            <View style={[styles.container, toggle ? {backgroundColor: props.bgColor} : {backgroundColor: '#FFF'}]}>
                <Text style={[styles.text, toggle ? {color: props.color} : {color: '#ddd'}]}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})