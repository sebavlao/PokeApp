import { View, Text, Image, Pressable } from "react-native"
import { useGetPokeInfo } from "../hooks/useGetPokeInfo";
import { colors, contrastBlack } from "../utils/colors";
import { useTeam } from "../hooks/useTeam";
import { Swipeable } from "react-native-gesture-handler";
import { Delete } from "./svg/Delete";
import { Link } from "expo-router";

export const CardTeam = ({url, position}) => {
    const {pokemon, color, loading} = useGetPokeInfo(url)
    const { removeToTeam } = useTeam()

    const rightSwipe = () => {
        return (
            <Pressable onPress={() => removeToTeam(position)}>
                <View className="bg-red-600 px-4">
                    <Delete/>
                </View>
            </Pressable>
        )
    }

    if (loading) return <Text>A</Text>

    return (
        <View className="my-1">
            <Swipeable renderRightActions={rightSwipe}>
                <Link asChild href={`/pokemon/${pokemon.id}`}>
                    <Pressable className="flex flex-row overflow-hidden rounded-sm" style={{ backgroundColor: colors[color]}}>
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
                </Link>
            </Swipeable>
        </View>
    )
}