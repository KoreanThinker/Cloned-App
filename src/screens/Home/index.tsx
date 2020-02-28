import React, { useRef } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { color2, color1, WIDTH } from '../../component/styles';
import Header from './Header';
import Constants from 'expo-constants';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import Drawer from './Drawer';
import seriesData from '../../component/seriesData';
import HomeScreenCard from '../../component/Card/HomeScreenCard';
import { useNavigation } from '@react-navigation/native';


const Home = () => {

    const { navigate } = useNavigation()

    const drawerRef = useRef<DrawerLayout>(null)


    const onMenu = () => {
        drawerRef.current.openDrawer()
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={[color1, color2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <DrawerLayout
                ref={drawerRef}
                drawerWidth={WIDTH * 0.7}
                drawerPosition={DrawerLayout.positions.Right}
                drawerType='front'
                drawerBackgroundColor="#fff"
                overlayColor='rgba(0, 0, 0, 0.5)'
                renderNavigationView={() => <Drawer />}>
                <Header onMenu={onMenu} />
                <FlatList
                    data={seriesData}
                    renderItem={({ item }) => <HomeScreenCard title={item.title} onPress={() => navigate(item.screenName)} />}
                />
            </DrawerLayout>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})


export default Home
