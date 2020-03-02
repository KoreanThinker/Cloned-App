import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TabHomeIcon from '../../component/SVG/TabHomeIcon'



const BottomTab = () => {

    const data = [
        {
            title: '홈',
            Icon: (props) => <TabHomeIcon {...props} />
        }
    ]

    const Tab = ({ title, Icon }) =>
        <View style={styles.TabContainer} >
            <Icon color='#cc0000' />
            <Text style={{ ...styles.TabText }} >{title}</Text>
        </View>

    return (
        <View style={styles.container} >
            {data.map((props) => <Tab {...props} />)}
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        borderTopColor: '#cfcfcf',
        borderTopWidth: 1,
        flexDirection: 'row'
    },
    TabContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TabText: {
        fontSize: 11
    }
})
