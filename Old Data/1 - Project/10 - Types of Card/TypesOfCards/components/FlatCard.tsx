import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
    return (
        <View>
            <Text style={styles.heading}>FlatCard</Text>

            <View style={styles.container}>

                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red Card</Text>
                </View>

                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue Card</Text>
                </View>

                <View style={[styles.card, styles.cardThree]}>
                    <Text>Green Card</Text>
                </View>

                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red Card</Text>
                </View>

            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        margin:8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        // width: 100,
        borderRadius: 5,
        margin: 8
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'blue',
    },
    cardThree: {
        backgroundColor: 'green',
    }
})

export default FlatCard
