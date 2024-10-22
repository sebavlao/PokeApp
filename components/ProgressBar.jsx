import React, { useEffect, useRef } from 'react'
import { Animated, View, Easing, Text } from 'react-native'

export const ProgressBar = ({statName, stat}) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animation, {
            toValue: stat > 100 ? 100 : stat,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start()
    }, [])

    const animatedColor = animation.interpolate({
        inputRange: [0, 50, 100],
        outputRange: ['#ff4d4d', '#ffcc00', '#4caf50']
      });

    const animatedWidth = animation.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", `100%`]
    })
    
    return (
        <View className="px-4 py-1">
            <View className="flex-row justify-between">
                <Text>{statName}</Text>
                <Text>{stat}</Text>
            </View>
            <Animated.View className="h-3 rounded-full" style={{width: animatedWidth, backgroundColor: animatedColor}}></Animated.View>
        </View>
    )
}
