import React from 'react'
import { Text, View, ImageBackground, Image, TextInput } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimensions'

import Icon from 'react-native-vector-icons/Ionicons'


const Home = () => {
    return (

        <View>
            <ImageBackground
                source={require('../assets/images/bg.jpg')}
                style={{
                    height: deviceHeight,
                    width: deviceWidth,
                }}
                imageStyle={{
                    opacity: 0.6,
                    backgroundColor: 'black'
                }}
            />

            <View
                style={{
                    position: "absolute",
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                }}
            >
                <View
                    style={{

                        flexDirection: "row",
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: deviceWidth - 20
                    }}
                >

                    <Icon name='menu' size={46} color='white' />
                    <Image source={require('../assets/images/user.png')}
                        style={{
                            height: 46,
                            width: 46,
                            borderRadius: 50,
                        }}
                    />

                </View>

                <View
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 100
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            color: 'white'
                        }}
                    >
                        World Weather App
                    </Text>

                    <Text
                        style={{
                            fontSize: 22,
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    >
                        Search the city by the name
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: 'white',
                        paddingHorizontal: 10,
                        marginTop: 20
                    }}>
                        <TextInput
                            placeholder='Search by city'
                            placeholderTextColor='white'
                            style={{
                                paddingHorizontal: 10,
                                color: 'white',
                                fontSize: 16
                            }}
                        />

                        <Icon name='search' size={22} color="white" />
                    </View>
                </View>

            </View>

        </View>

    )
}

export default Home