import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.heading}>Elevated Card</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={false}
                style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Top Card</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Top Card</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Top Card</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Top Card</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Top Card</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Top Card</Text>
                </View>

                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Top Card</Text>
                </View>

            </ScrollView>
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
        padding: 10,
        // flex:1,
        // flexDirection:'row',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 5,
        marginHorizontal: 8
    },
    elevatedCard: {
        backgroundColor: 'gray'
    }

})

export default ElevatedCard
