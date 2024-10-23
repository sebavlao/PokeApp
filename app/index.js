import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Card } from "../components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios"
import { POKE_API } from "../api/api";
import { usePagination } from "../hooks/usePagination";

export default function Index () {
    const [pokemons, setPokemons] = useState([])
    const { pagination } = usePagination()
    const [loading, setLoading] = useState(true)
    const insets =  useSafeAreaInsets()

    useEffect(() => {
        setLoading(true)
        axios.get(POKE_API + `pokemon?offset=${pagination}`)
            .then(res => {
                setPokemons(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [pagination])

    if (loading) return <Text></Text>

    return (
        <View className="" style={{ paddingBottom: insets.bottom }}>
            <FlatList
                data={pokemons}
                renderItem={({ item }) => <Card url={item.url} />}
                contentContainerStyle={{gap: 3}}
                columnWrapperStyle={{gap: 3}}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </View>
    )
}