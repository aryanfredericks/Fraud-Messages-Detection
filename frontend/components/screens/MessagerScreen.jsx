import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../../consts/mycolors'
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
const MessagerScreen = ({ navigation }) => {
    const [receivedResponse, setResponse] = useState(false);
    const [sentence, setSentence] = useState('');
    const [pred, setPred] = useState('');
    const handleSearch = async () => {
        if (sentence === '') {
            alert('Please enter a valid message');
            return;
        }
        try {
            const response = await axios({
                url: 'http://10.0.2.2:5000/predict',
                method: 'post',
                data: {
                    "sentence": sentence.toString()
                }
            })
            if (response.status === 200) {
                if (response.data.prediction === 'Spam') {
                    setPred('Spam');
                    setResponse(true);
                }
                else {
                    setPred('Not a Spam');
                    setResponse(true);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{
                color: MyColors.accent,
                fontSize: 23,
                marginBottom: 20,
                fontWeight: 'bold',
            }}>
               Live Spam Message Detection
            </Text>
            <View style={styles.textBox}>
                <TextInput
                    style={{
                        color: 'white',
                        fontSize: 16,
                        flex: 1,
                    }}
                    multiline={true}
                    placeholder='Enter Your Message'
                    placeholderTextColor={'white'}
                    value={sentence}
                    onChangeText={(text) => setSentence(text)}
                />
            </View>
            {
                receivedResponse ?
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        margin: 10,
                    }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Your message was predicted as : <Text style={{ color: MyColors.accent, fontSize: 18 }}>{pred}</Text>
                        </Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',
                                width: 100,
                                height: 35,
                                borderRadius: 15,
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: 'white',
                                borderWidth: 1,
                            }}
                            onPress={() => {
                                setResponse(false);
                                setSentence('');
                            }}
                        >
                            <Text style={{ color: 'white' }}>Clear</Text>
                        </TouchableOpacity>
                    </View> : null
            }
            <TouchableOpacity
                style={styles.btn}
                onPress={handleSearch}
            >
                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <MaterialIcons name="person-search" size={25} color="black" />
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginRight: 10
                    }}>Detect Message</Text>
                </View>
            </TouchableOpacity>

            <View style={{
                position: 'absolute',
                bottom: 0,
                marginBottom: 20,
                alignItems: 'center',
            }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Want to see how it works behind the scenes ?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('chat')}
                >
                    <Text style={{ color: MyColors.accent, fontSize: 18 }}>Click Here</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default MessagerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        width: '90%',
        height: '30%',
        justifyContent: 'center',
        backgroundColor: MyColors.secondary,
        borderColor: 'white',
        borderRadius: 24,
        borderWidth: 1,
        paddingLeft: 20
    },
    btn: {
        backgroundColor: MyColors.accent,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },
});