import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Onboarding = (props) => {

    const navigateToHome = () => {
        props.navigation.navigate("Home")
    }
    return (
        <View style={{ backgroundColor: "gray", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ position: 'absolute', top: 30, }}>
                <Text style={{ color: "white", fontSize: 30 }}>Onboading</Text>

                <View >
                    <TouchableOpacity style={{backgroundColor:"white"}} onPress={navigateToHome}>
                        <Text style={{ color: "red", fontSize: 25, fontWeight: 'bold' }}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Onboarding