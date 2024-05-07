import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MyColors from '../../consts/mycolors'
import QNABox from '../QNABox'
const ChatScreen = ({ navigation }) => {
    const [punctuationText, setPunctuationText] = useState('');
    const [tokenized, setTokenized] = useState('');
    const [swRemoval, setSwRemoval] = useState('');
    const [stemming, setStemming] = useState('');
    return (
        <ScrollView style={styles.container}
            contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
            }}
        >
            <View>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23, marginTop: 25 }}>Pre Processing Techniques</Text>
            </View>
            <QNABox
                title={'1. Removing Punctuation (Numbers Included)'}
                textInputText={punctuationText}
                setTextInput={setPunctuationText}
                funcName={'remove punctuation'}
            />
            <QNABox
                title={'2. Word Tokenization'}
                textInputText={tokenized}
                setTextInput={setTokenized}
                funcName={'tokenize words'}
            />
            <QNABox
                title={'3. Stop Word Removal'}
                textInputText={swRemoval}
                setTextInput={setSwRemoval}
                funcName={'remove stopwords'}
            />
            <QNABox
                title={'4. Stemming'}
                textInputText={stemming}
                setTextInput={setStemming}
                funcName={'stemming'}
            />
        </ScrollView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.primary,
    },
    outerbox: {
        width: '80%',
        height: 120,
        backgroundColor: 'white',
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
});