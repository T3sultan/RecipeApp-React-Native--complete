import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card({children,customStyle}) {
    return (
        <View style={[styles.wapper,customStyle]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    wapper:{
        borderRadius:12,
        
        backgroundColor:'white',
        //android
        elevation:2,
        //IOS
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.8,
        shadowRadius:4
    }
})
