import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import React, { useEffect, useState } from 'react'

const Privacy = (props) => {

    const navigateToHome = () => {
        props.navigation.replace('Onboading')
        // console.log("Navigation ")
    }
    return (
        <View style={{
            backgroundColor: "black",
            flex: 1
        }}>

            <View style={{
                flex: 1,
                // borderColor: "white",
                // borderWidth: 1
            }}>

            </View>
            <View style={{
                flex: 1,
                // borderColor: "white",
                // borderWidth: 1,
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
                        By tapping "Let's Start", you indicate that you have read and agree to our <Text style={styles.privacyTerm}>Privacy Policy.</Text>
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



}

export default Privacy

const styles = StyleSheet.create({
    boldText: {
        fontSize: 30, fontWeight: "bold"
    },
    privacyText: {
        fontSize: 16,
        marginTop: 30,
        color: "white"
    },
    privacyTerm: {
        color: "#FF9243",
        fontSize: 18,
        fontWeight: "bold",
        textDecorationLine: "underline",
    }
})