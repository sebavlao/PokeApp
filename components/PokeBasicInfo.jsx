import React from 'react'
import { Text, View } from 'react-native'

export const PokeBasicInfo = ({name, typesPoke}) => {
  return (
    <>
        <View className="flex-row gap-4 self-center">
            {typesPoke.map((type, index) => (
                <Text className="font-normal text-base" key={`${name}-type-${index}`}>{type.type.name}</Text>
            ))}
        </View>
        <View>
            <Text className="self-center font-bold text-xl">{name[0].toUpperCase() + name.slice(1)}</Text>
        </View>
    </>
  )
}
