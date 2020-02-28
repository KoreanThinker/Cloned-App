import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'

interface HomeScreenCardProps {
    title: string;
    onPress: () => void;
}

const HomeScreenCard: React.FC<HomeScreenCardProps> = ({ title, onPress }) => {
    return (
        <BaseButton
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text} >{title}</Text>
        </BaseButton>
    )
}

export default HomeScreenCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        marginBottom: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16
    },
    text: {
        color: '#fff'
    }
})
