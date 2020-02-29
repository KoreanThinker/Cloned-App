import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import HomeMenu from '../../component/svg/HomeMenu'


interface HeaderProps {
    onMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenu }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >CLONED</Text>
            <BaseButton
                style={styles.menuContainer}
                onPress={onMenu}
            >
                <HomeMenu />
            </BaseButton>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        marginLeft: 16,
        color: '#fff',
        fontSize: 16,
        opacity: 0.8
    },
    menuContainer: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Header
