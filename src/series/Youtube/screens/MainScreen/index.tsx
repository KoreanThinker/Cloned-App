import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Constants from 'expo-constants'
import Header from './Header'
import BottomTab from './BottomTab'
import { YtmCardData } from '../../component/youtubeDatas'
import YtmCard from '../../component/Card/YtmCard'
import { WIDTH } from '../../../../component/styles'

const MainScreen = () => {

    const [data, setData] = useState(YtmCardData)

    return (
        <View style={styles.container} >
            <FlatList
                style={{ flex: 1, width: WIDTH }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<Header />}
                data={YtmCardData}
                renderItem={({ item }) => <YtmCard {...item} />}
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
