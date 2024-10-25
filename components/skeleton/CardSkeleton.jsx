import React, { useEffect, useRef } from 'react'
import { Animated, Text, View } from 'react-native'
import { ImageSkeleton } from '../svg/ImageSkeleton'

export const CardSkeleton = () => {
  const opacity = useRef(new Animated.Value(0.5)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000 ,
          useNativeDriver: true
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true
        })
      ])
    ).start()
  }, [])

  return (
    <View className="w-1/2 overflow-hidden rounded-sm bg-gray-300 flex flex-row">
      <View className="w-7/12 justify-center gap-2">
        <Animated.Text className="w-full bg-gray-400 rounded-r" style={{ opacity }}></Animated.Text>
        <Animated.Text className="w-full bg-gray-400 rounded-r" style={{ opacity }}></Animated.Text>
      </View>
      <View className="w-full">
        <ImageSkeleton/>
      </View>
    </View>
  )
}
