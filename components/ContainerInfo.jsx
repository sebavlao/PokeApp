import React from 'react'
import { PokeBasicInfo } from './PokeBasicInfo'
import { colors, contrastBlack } from "../utils/colors";
import { Pressable, ScrollView, Text, View } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { useTeam } from "../hooks/useTeam"
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable)

export const ContainerInfo = ({ name, types, stats, color, id }) => {
  const { team, addToTeam } = useTeam()

  return (
    <ScrollView className="bg-white rounded-t-3xl p-2 h-screen">
        <PokeBasicInfo name={name} typesPoke={types}/>
        <View className="">
            {stats.map((stat, index) => (
                <ProgressBar key={`${name}-stat-${index}`} statName={stat.stat.name} stat={stat.base_stat}/>
            ))}
        </View>
        <StyledPressable 
          className={`${team.length >= 6 ? "opacity-40" : ""} rounded-md self-center mt-5 px-2 py-1 active:opacity-50`}
          style={{ backgroundColor: colors[color]}} onPress={() => addToTeam(id)}
          disabled={team.length >= 6 ? true : false}
          >
            <Text className={`${contrastBlack.includes(color) ? "text-black" : "text-white"} font-bold text-lg`}>Agregar al equipo</Text>
        </StyledPressable>
    </ScrollView>
  )
}
