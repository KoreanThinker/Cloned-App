import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler';

interface HomeDrawerCardProps {
    title: string;
    icon: React.ReactNode;
    onPress: () => void;
}

const HomeDrawerCard: React.FC<HomeDrawerCardProps> = ({ title, icon, onPress }) => {
    return (
        <BaseButton
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.iconContainer} >
                {icon}
            </View>
            <Text>{title}</Text>
        </BaseButton>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    }
})


export default HomeDrawerCard
