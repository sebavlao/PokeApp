import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { POKE_API } from "../api/api";
import { Card } from "../components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index () {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const insets =  useSafeAreaInsets()

    useEffect(() => {
        POKE_API.get("/pokemon?limit=20")
            .then(res => {
                setPokemons(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

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