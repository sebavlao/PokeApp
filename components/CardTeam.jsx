import { View, Text, Image, Pressable } from "react-native"
import { useGetPokeInfo } from "../hooks/useGetPokeInfo";
import { colorClasses, contrastBlack } from "../utils/colors";
import { useTeam } from "../hooks/useTeam";

export const CardTeam = ({url, id}) => {
    const {pokemon, color, loading} = useGetPokeInfo(url)
    const { removeToTeam } = useTeam()

    if (loading) return <Text>A</Text>

    return (
        <Pressable className={`flex flex-row ${colorClasses[color]} overflow-hidden rounded-sm`} onPress={() => removeToTeam(id)}>
            <View className="w-7/12">
                <Text numberOfLines={1} className={`font-bold truncate p-1 text-sm ${contrastBlack.includes(color) ? "text-black" : "text-white"}`}>
                    {pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1)}
                </Text>
                <View className="gap-1 pl-1">
                {pokemon.types.slice(0, 2).map((type, index) => (
                    <Text key={`${pokemon.name}-type-${index}`} className="bg-slate-300 rounded-full px-2 self-start">{type.type.name}</Text>
                ))}
                </View>
            </View>
            <Image className="shrink" source={{ uri: pokemon?.sprites?.front_default }} style={{ width: 100, height: 100 }}/>
        </Pressable>
    )
}