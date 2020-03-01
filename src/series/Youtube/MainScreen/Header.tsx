import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import YoutubePremiumIcon from '../SVG/YoutubePremiumIcon'
import { TouchableWithoutFeedback, RectButton, BorderlessButton, TouchableNativeFeedback, } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import HeaderSearchIcon from '../SVG/HeaderSearchIcon'

const Header = () => {

    const { navigate } = useNavigation()

    return (
        <View style={styles.container} >
            <TouchableWithoutFeedback
                style={styles.titleContainer}
                onPress={() => navigate('Home')} >
                <YoutubePremiumIcon />
            </TouchableWithoutFeedback>
            <View style={styles.rightContainer} >
                <BorderlessButton style={styles.searchContainer} >
                    <HeaderSearchIcon />
                </BorderlessButton>
                <BorderlessButton style={styles.profileContainer} >
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://yt3.ggpht.com/a-/AOh14GgEvww-4VTfw8HeH5lQtap9HjQPQuJ_YzTwjTlVuw=s88-c-k-c0xffffffff-no-rj-mo' }}
                    />
                </BorderlessButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: '100%',
        flexDirection: 'row',
        elevation: 1,
        overflow: 'hidden'
    },
    titleContainer: {
        paddingHorizontal: 12,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    searchContainer: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -99999
    },
    profileImage: {
        width: 24,
        height: 24,
        borderRadius: 24,
        overflow: 'hidden',
    }
})


export default Header
