import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { POKE_API } from "../../api/api";
import { ContainerInfo } from "../../components/ContainerInfo";
import { ContainerInfoSkeleton } from "../../components/skeleton/ContainerInfoSkeleton";
import { useGetPokeInfo } from "../../hooks/useGetPokeInfo";
import { colors } from "../../utils/colors";

export default function PokeInfo() {
    const { id } = useLocalSearchParams()
    const {pokemon, color, loading} = useGetPokeInfo(POKE_API + `pokemon/${id}`)

    if (loading) return <ContainerInfoSkeleton/>

    return (
        <View style={{ backgroundColor: colors[color]}}>
            <View className="items-center justify-end pt-10">
                <Image className="" source={{uri: pokemon?.sprites?.front_default}} style={{width: 200, height: 200}}></Image>
            </View>
            <ContainerInfo name={pokemon?.name} types={pokemon?.types} stats={pokemon.stats} color={color} id={id}/>
        </View>
    )
}