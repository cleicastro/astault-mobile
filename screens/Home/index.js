import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    SafeAreaView,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';

import logo from '../../assets/images/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView style={styles.container}>
                <TouchableWithoutFeedback
                    style={styles.container}
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.title}> Login </Text>
                        <View style={styles.infoContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Usuário"
                                placeholderTextColor="rgba(255,255,255,0.8)"
                                autoCorrect={false}
                                returnKeyType="next"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                placeholderTextColor="rgba(255,255,255,0.8)"
                                autoCorrect={false}
                                returnKeyType="go"
                                secureTextEntry
                            />
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('Apontamentos')}
                            >
                                <Text style={styles.buttonText}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BB6BD9",
        flexDirection: "column"
    },
    logoContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 128,
        height: 56
    },
    title: {
        color: "#f7c744",
        fontSize: 22,
        textAlign: "center",
        marginTop: 5,
        opacity: 0.7
    },
    infoContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 16,
        height: 200,
        padding: 20,
    },
    input: {
        height: 48,
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "#FFF",
        paddingHorizontal: 16,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: "rgb(253, 149, 31)",
        paddingVertical: 15
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "rgb(32, 53, 70)"
    }
});

export default Home;