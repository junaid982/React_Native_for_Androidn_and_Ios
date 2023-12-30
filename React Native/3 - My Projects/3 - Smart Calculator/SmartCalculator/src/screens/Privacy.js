import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'

const Privacy = (props) => {

    const [hasSeenPrivacyScreen, setHasSeenPrivacyScreen] = useState(false);

    // useEffect(() => {
    //     AsyncStorage.getItem('hasSeenPrivacyScreen').then((value) => {
    //         if (value === null) {
    //             setHasSeenPrivacyScreen(true);
    //             AsyncStorage.setItem('hasSeenPrivacyScreen', 'true');
    //         }
    //     });
    // }, []);

    const navigateToHome = () => {
        // AsyncStorage.setItem('privacyScreenShown', 'true') // Set a flag indicating the privacy screen has been shown
        props.navigation.replace('Home')
        // console.log("Navigation ")
    }


    if (!hasSeenPrivacyScreen) {
        return (
            <View style={{
                backgroundColor: "black",
                flex: 1
            }}>

                <View style={{
                    flex: 1,
                    borderColor: "white",
                    borderWidth: 1
                }}>

                </View>
                <View style={{
                    flex: 1,
                    borderColor: "white",
                    borderWidth: 1,
                    paddingHorizontal: 30
                }}>
                    <View>
                        <Text style={styles.boldText}>Your Privacy is our No.1</Text>
                        <Text style={styles.boldText}>Concern</Text>
                    </View>

                    <View >
                        <Text style={styles.privacyText}>
                            We take the privacy and security of your data seriously. This app never collectand uses your any data about you and your device.
                        </Text>

                        <Text style={styles.privacyText}>
                            By tapping "Let's Start", you indicate that you have read and agree to out <Text style={styles.privacyTerm}>Privacy Policy.</Text>
                        </Text>
                    </View>

                    <View style={{
                        flex: 1,

                        justifyContent: "center",
                        alignItems: "center",


                    }}>
                        <TouchableOpacity style={{
                            borderColor: "blue",
                            borderWidth: 1,
                            backgroundColor: "#FF9243",
                            paddingHorizontal: 50,
                            paddingVertical: 15,
                            borderRadius: 10

                        }}
                            onPress={navigateToHome}
                        >
                            <Text style={{
                                color: "white",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>Let's Start</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        );
    } else {
        return null;
    }


}

export default Privacy

const styles = StyleSheet.create({
    boldText: {
        fontSize: 30, fontWeight: "bold"
    },
    privacyText: {
        fontSize: 16,
        marginTop: 30
    },
    privacyTerm: {
        color: "#FF9243",
        fontSize: 18,
        fontWeight: "bold",
        textDecorationLine: "underline",
    }
})