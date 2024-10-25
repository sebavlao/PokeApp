import { usePathname } from 'expo-router'
import { styled } from 'nativewind'
import React from 'react'
import { Pressable, Text } from 'react-native'

const StyledPressable = styled(Pressable)

export const PressableHandlePage = ({text, url, handle}) => {
 const route = usePathname()

  return (
    <StyledPressable className={`bg-cyan-700 ${url && route === "/" ? "" : "opacity-40"} rounded-full p-1 active:opacity-50 disabled:bg-red-700`} onPress={() => handle(url)} disabled={url && route === "/" ? false : true}>
        <Text className="text-white text-2xl font-semibold px-2">{text}</Text>
    </StyledPressable>
  )
}
