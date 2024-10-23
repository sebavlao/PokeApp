import { Link } from "expo-router";
import { View, Text, Image, Pressable } from "react-native"
import { useGetPokeInfo } from "../hooks/useGetPokeInfo";
import { CardSkeleton } from "./CardSkeleton";
import { colorClasses, contrastBlack } from "../utils/colors";


export const Card = ({url}) => {
    const {pokemon, color, loading} = useGetPokeInfo(url)

    if (loading) return <CardSkeleton/>

    return (
        <Link asChild href={`/pokemon/${pokemon.id}`}>
            <Pressable className={`flex flex-row ${colorClasses[color]} w-1/2 overflow-hidden rounded-sm`}>
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
    )
}