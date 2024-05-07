import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyColors from '../../consts/mycolors'
import { MaterialIcons } from '@expo/vector-icons';
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={[styles.levText, { color: "white" }]}>ABOUT</Text>
                <Text style={[styles.levText, { color: 'magenta' }]}>THE</Text>
                <Text style={[styles.levText, { color: MyColors.accent }]}>APPLICATION</Text>
            </View>
            <View style={styles.about}>
                <ScrollView>
                    <Text style={{ fontSize: 17, color: 'white', letterSpacing: 2, }}>
                        Welcome to my fraud detection application powered by natural language processing (NLP) techniques!{'\n'}{'\n'}

                        <Text style={{ fontSize: 17, color: MyColors.accent, letterSpacing: 2, }}>Features:</Text>{'\n'}{'\n'}

                        <Text style={{ fontSize: 17, color: MyColors.accent, letterSpacing: 2, }}>Fraud Detection:</Text> Users can input text messages, which are then sent to my backend server for analysis. The text undergoes preprocessing and vectorization before being fed into my machine learning model. The model predicts whether the message is fraudulent or not, providing users with valuable insights.{'\n'}{'\n'}<Text style={{ fontSize: 17, color: MyColors.accent, letterSpacing: 2, }}>Text Preprocessing Showcase:</Text> Explore various text preprocessing techniques used in NLP, including <Text style={{ fontSize: 17, color: MyColors.accent, letterSpacing: 2, }}>word tokenization, stop word removal, lemmatization, stemming, and creating N-grams</Text>. my application offers a dedicated screen to demonstrate each technique, helping users understand the underlying processes involved in preparing text data for analysis.{'\n'}{'\n'}
                        How it Works:{'\n'}{'\n'}

                        1. Input Message: Users input a text message into the application.{'\n'}{'\n'}
                        2. Backend Processing: The message is sent to my backend server, where it undergoes preprocessing and vectorization.{'\n'}{'\n'}
                        3. Machine Learning Prediction: The preprocessed text is passed through my machine learning model, which predicts whether the message is fraudulent.{'\n'}{'\n'}
                        4. Result Display: The prediction result is sent back to the user interface, where users can view the outcome of the fraud detection process.{'\n'}{'\n'}
                        Purpose:{'\n'}{'\n'}

                        My application aims to provide users with a tool to identify potentially fraudulent content in text messages. By leveraging advanced NLP techniques and machine learning algorithms, we empower users to make informed decisions and mitigate risks associated with fraudulent activities.
                    </Text>
                </ScrollView>
            </View>
            <TouchableOpacity
                style={styles.getStartedbtn}
                onPress={() => navigation.navigate('message')}
            >
                <View
                    style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '40%'
                    }}
                >
                    <MaterialIcons name="start" size={26} color="black" />
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    levText: {
        fontSize: 30,
        textShadowColor: 'black',
        textShadowOffset: { height: 10 },
        textShadowRadius: 5,
        paddingVertical: 2
    },
    textBox: {
        width: '90%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: MyColors.secondary,
        borderColor: 'white',
        borderRadius: 24,
        borderWidth: 2,
        paddingLeft: 20
    },
    getStartedbtn: {
        backgroundColor: MyColors.accent,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 20,
    },
    about: {
        width: '95%',
        height: '50%',
        padding: 20,
        marginTop: 20,
    }
});