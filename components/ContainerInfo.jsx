import React from 'react'
import { PokeBasicInfo } from './PokeBasicInfo'
import { colorClasses, contrastBlack } from "../utils/colors";
import { Pressable, Text, View } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { useTeam } from "../hooks/useTeam"

export const ContainerInfo = ({ name, types, stats, color, id }) => {
  const { addToTeam } = useTeam()

  return (
    <View className="bg-white rounded-t-3xl p-2 -z-10 h-screen">
        <PokeBasicInfo name={name} typesPoke={types}/>
        <View className="">
            {stats.map((stat, index) => (
                <ProgressBar key={`${name}-stat-${index}`} statName={stat.stat.name} stat={stat.base_stat}/>
            ))}
        </View>
        <Pressable className={`${colorClasses[color]} rounded-md self-center mt-8 px-2 py-1`} onPress={() => addToTeam(id)}>
            <Text className={`${contrastBlack.includes(color) ? "text-black" : "text-white"} font-bold text-lg`}>Agregar al equipo</Text>
        </Pressable>
    </View>
  )
}
