import { useEffect, useRef } from "react"
import { Animated, View, Text } from "react-native"
import { ImageSkeleton } from "../svg/ImageSkeleton"

export const ContainerInfoSkeleton = () => {
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
    <View className="bg-gray-100">
        <View className="justify-center gap-2 items-center h-[200px] pt-10">
            <ImageSkeleton/>
        </View>
        <View className="bg-white rounded-t-3xl h-screen p-2">
            <View className="rounded-md mt-5 px-2 py-1 active:opacity-50">
                <Animated.Text className="w-full bg-gray-400 rounded-full my-2" style={{ opacity }}></Animated.Text>
                <Animated.Text className="w-full bg-gray-400 rounded-full my-2" style={{ opacity }}></Animated.Text>
            </View>
            <View className="rounded-md mt-5 px-2 py-1 active:opacity-50">
                <Animated.Text className="w-full bg-gray-400 rounded-full my-2" style={{ opacity }}></Animated.Text>
                <Animated.Text className="w-full bg-gray-400 rounded-full my-2" style={{ opacity }}></Animated.Text>
            </View>
            <View className="rounded-md mt-5 px-2 py-1 active:opacity-50">
                <Animated.Text className="w-full bg-gray-400 rounded-full my-2" style={{ opacity }}></Animated.Text>
                <Animated.Text className="w-full bg-gray-400 rounded-full my-2" style={{ opacity }}></Animated.Text>
            </View>
            <View>
            <Animated.View className="bg-gray-400 rounded-md self-center mt-5 px-2 py-1" style={{ opacity }}>
                <Text className="font-bold text-lg text-white">Agregar al equipo</Text>
            </Animated.View>
            </View>
        </View>
        </View>
    )
  }