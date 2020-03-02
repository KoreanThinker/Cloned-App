import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { WIDTH } from '../../../../component/styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import YoutubeMenuIcon from '../SVG/YoutubeMenuIcon'

export interface YtmCardProps {
    thumNail: string;
    videoLength: number;
    title: string;
    profileImage: string;
    subTitle: string;
    id: string;
}

const YtmCard: React.FC<YtmCardProps> = (props) => {
    return (
        <View style={styles.container} >
            <Image
                style={styles.thumNailContainer}
                source={{ uri: props.thumNail }}
            />
            <View style={styles.subOptionContainer} >
                <Image
                    style={styles.profileImage}
                    source={{ uri: props.profileImage }}
                />
                <View style={styles.subOptionRightContainer} >
                    <View style={{ flex: 1 }} >
                        <Text style={{ marginBottom: 3 }} >{props.title}</Text>
                        <Text style={styles.smallText} >{props.subTitle}</Text>
                    </View>
                </View>
                <BorderlessButton style={{ height: 40 }} >
                    {/* <YoutubeMenuIcon /> */}
                </BorderlessButton>
            </View>
        </View>
    )
}

export default YtmCard

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        backgroundColor: '#fff',
        marginBottom: 24
    },
    subOptionContainer: {
        width: '100%',
        paddingHorizontal: 12,
        flexDirection: 'row',
        marginTop: 12
    },
    thumNailContainer: {
        width: WIDTH,
        height: WIDTH * 9 / 16,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden'
    },
    subOptionRightContainer: {
        marginLeft: 12,
        flex: 1
    },
    smallText: {
        fontSize: 12,
        color: '#111'
    }
})

