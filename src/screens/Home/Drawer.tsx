import React from 'react'
import { View, Text, StyleSheet, Linking, ToastAndroid } from 'react-native'
import HomeDrawerCard from '../../component/Card/HomeDrawerCard'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = () => {
    return (
        <View style={styles.container} >
            <HomeDrawerCard
                title='Open source apis'
                icon={<MaterialCommunityIcons name='cloud' size={18} color='#777' />}
                onPress={() => { }}
            />
            <HomeDrawerCard
                title='Github'
                icon={<MaterialCommunityIcons name='github-circle' size={18} color='#777' />}
                onPress={() => Linking.openURL('https://www.github.com/KoreanThinker')}
            />
            <HomeDrawerCard
                title='Email'
                icon={<MaterialCommunityIcons name='gmail' size={18} color='#777' />}
                onPress={() => Linking.openURL('coderhyun476@gmail.com').catch(() => ToastAndroid.show('coderhyun476@gmail.com', ToastAndroid.SHORT))}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
})


export default Drawer
