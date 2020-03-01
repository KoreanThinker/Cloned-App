import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Constants from 'expo-constants'
import Header from './Header'
import BottomTab from './BottomTab'

const MainScreen = () => {
    return (
        <View style={styles.container} >
            <FlatList
                style={{ backgroundColor: 'red' }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header />}
                data={['1']}
                renderItem={() => <View style={{ height: 2000 }} />}
            />
            <BottomTab />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight
    }
})


export default MainScreen
