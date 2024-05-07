import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../consts/mycolors'
import axios from 'axios';
const QNABox = ({ title, textInputText, setTextInput, funcName }) => {
    const [responseToDisplay, setResponse] = useState('');
    const handleSubmit = async () => {
        try {
            const res = await axios({
                method: 'post',
                data: {
                    'sentence': textInputText,
                    'type': funcName
                },
                url: 'http://10.0.2.2:5000/techniques'
            })
            if (res.status===200) {
                setResponse(res.data.sentence.toString())
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <View>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginVertical: 15 }}>{title}</Text>
            </View>
            <View style={styles.outerbox}>
                <View style={styles.qna}>
                    <TextInput
                        style={[styles.tIn, { marginBottom: 5,color : 'white' }]}
                        placeholder='Enter Word/Sentence'
                        placeholderTextColor={'white'}
                        onChangeText={(text) => setTextInput(text)}
                        value={textInputText}
                    />
                    <TextInput
                        style={[styles.tIn,{color : 'white'}]}
                        readOnly
                        value={responseToDisplay}
                    />
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: MyColors.secondary,
                            padding: 10,
                            borderRadius: 10,
                        }}
                        onPress={handleSubmit}
                    >
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default QNABox

const styles = StyleSheet.create({
    outerbox: {
        width: '90%',
        height: 120,
        backgroundColor: 'black',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: MyColors.accent,
        borderWidth: 2,
    },
    qna: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        flex: 3,
        backgroundColor: 'lightgray',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    tIn: {
        width: '100%',
        height: '50%',
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 10,
    }
})