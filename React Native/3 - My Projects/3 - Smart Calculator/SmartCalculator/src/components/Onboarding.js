import { View, Text, ImageBackground, Image, FlatList } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

const Onboarding = () => {

    const sliders = [
        {
            id: 1,
            image: require('../../assets/images/onboadImg1.png'),
            title: "Currency Calculator",
            subTitle: "Effortlessly convert any currencies and perform calculations with ease! Start now!"
        },
        {
            id: 2,
            image: require('../../assets/images/onboadImg2.png'),
            title: "Scienctific Calculator",
            subTitle: "Effortlessly convert any currencies and perform calculations with ease! Start now!"
        },
        {
            id: 3,
            image: require('../../assets/images/onboadImg3.png'),
            title: "Finance Calculator",
            subTitle: "Effortlessly convert any currencies and perform calculations with ease! Start now!"
        },
    ]


    return (
        <View >
            <ImageBackground
                source={require('../../assets/images/onboadingBg1.png')}
                style={{
                    backgroundColor: "black",
                    height: deviceHeight / 2,
                    width: deviceWidth
                }}
            />
            <ImageBackground
                source={require('../../assets/images/onboadingBg1.png')}
                style={{
                    backgroundColor: "black",
                    height: deviceHeight / 2,
                    width: deviceWidth
                }}
            />


            <View
                style={{
                    // borderColor: "white",
                    // borderWidth: 1,
                    position: "absolute",
                    height: deviceHeight,
                    width: deviceWidth,
                    padding: 5
                }}
            >
                {/* Image View  */}
                <View style={{
                    // borderColor: "white",
                    // borderWidth: 1,
                    height: '85%'
                }}>
                    <FlatList
                        data={sliders}
                        horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                    <Image source={item.image} style={{ backgroundColor: "black" }} />

                                    <View style={{ marginTop: 30 }}>
                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: "bold"
                                        }}>{item.title}</Text>

                                    </View>

                                    <View style={{
                                        // borderColor: "white",
                                        // borderWidth: 1,
                                        width: deviceWidth,
                                        padding: 10,
                                        justifyContent: "center", alignItems: "center"
                                    }}>
                                        <Text>
                                            {item.subTitle}
                                        </Text>
                                    </View>
                                </View>

                            )
                        }}
                    />


                </View>

                {/* Button View */}
                <View style={{
                    // borderColor: "white",
                    // borderWidth: 1,
                    height: '15%'
                }}>


                </View>


            </View>

        </View>
    )
}

export default Onboarding