import React, { useState } from 'react'
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimensions'

import Icon from 'react-native-vector-icons/Ionicons'
import Cards from './Cards'


const Home = (props) => {

    const [cityValue, setCityValue] = useState('')

    const cities = [
        {
            name: "AGRA",
            image: require('../assets/cities/agra.webp')

        },
        {
            name: "AHMEDABAD",
            image: require('../assets/cities/AHMEDABAD.webp')

        },
        {
            name: "AJMER",
            image: require('../assets/cities/ajmer.jpg')

        },
        {
            name: "ALIBAUG",
            image: require('../assets/cities/ALIBAUG.webp')

        },
        {
            name: "BHOPAL",
            image: require('../assets/cities/BHOPAL.jpg')

        },
        {
            name: "BIKANER",
            image: require('../assets/cities/BIKANER.jpg')

        },
        {
            name: "CHANDIGARH",
            image: require('../assets/cities/CHANDIGARH.jpg')

        },
        {
            name: "FARIDABAD",
            image: require('../assets/cities/FARIDABAD.jpg')

        },
        {
            name: "FIROZABAD",
            image: require('../assets/cities/FIROZABAD.jpg')

        },
        {
            name: "MUMBAI",
            image: require('../assets/cities/MUMBAI.webp')
        },
        {
            name: "HYDERABAD",
            image: require('../assets/cities/HYDERABAD.jpg')

        },
    ]

    const handleSearchBtn = () => {
        console.log("city :", cityValue)

        props.navigation.navigate("Details", { name: cityValue })

        setCityValue("")
    }

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
                        World Weather
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
                            value={cityValue}
                            onChangeText={(val) => setCityValue(val)}

                        />
                        <TouchableOpacity onPress={handleSearchBtn}>
                            <Icon name='search' size={22} color="white" />
                        </TouchableOpacity>
                    </View>


                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            paddingHorizontal: 10,
                            marginTop: 250
                        }}
                    >
                        My Locations
                    </Text>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={cities}
                        renderItem={({ item }) => {
                            return (

                                <Cards name={item.name} image={item.image} navigation={props.navigation} />
                            )
                        }}
                    />

                </View>

            </View>

        </View>

    )
}

export default Home