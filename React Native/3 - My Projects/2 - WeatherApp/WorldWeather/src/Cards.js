import { View, Text, TouchableOpacity, Image, ImageBackground, Touchable } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

const Cards = ({ name, image, navigation }) => {

    const handleOpressCard = () => {
        navigation.navigate("Details", { name: name })
    }

    return (
        // <TouchableOpacity>
        //     <Image source={image} />
        // </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={handleOpressCard}>
            <ImageBackground source={image}
                style={{
                    height: deviceHeight / 5,
                    // width: deviceWidth / 2 - 50,
                    width: deviceWidth / 2.2 - 50,
                }}
                imageStyle={{ borderRadius: 16 }}
            />
            <View style={{ position: "absolute", height: "100%", width: "100%" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 22, height: "100%", width: "100%", textAlign: "center", textAlignVertical: "center" }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Cards