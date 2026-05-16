import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Splash = (props) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.replace('Onboading')
        },3000)

    },[])

    const [timerToggle, setTimerToggle] = useState(true)
    const [dotIndex , setDotIndex] = useState(0)

    useEffect(() => {
        setTimeout(() =>
            {setTimerToggle(!timerToggle)

            setDotIndex(dotIndex+1)
            if (dotIndex == 2){
                setDotIndex(0)
            }

            }
            , 500);
    },[timerToggle])


    const loading = [
        {
            key:0,
            text:"."
        },
        {
            key:1,
            text:"."
        },
        {
            key:2,
            text:"."
        },
    ]


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: "center",
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 40
            }}>Splash</Text>

            <View style={{
                position: 'absolute',
                flex: 1,
                bottom: 30,
            }}>
                <View>
                    <Text style={{ color: 'gray', fontSize: 20 }}>

                        Loading
                        {
                            loading.map((item ,index) =>{
                                return(
                                    <Text key={item.key} style={{color :dotIndex == item.key ? "white" : "gray" }}>{item.text}</Text>
                                )
                            })
                        }


                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Splash