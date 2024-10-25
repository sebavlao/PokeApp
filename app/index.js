import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Card } from "../components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios"
import { usePagination } from "../hooks/usePagination";

export default function Index () {
    const [pokemons, setPokemons] = useState([])
    const { currentPage, handlePagination } = usePagination()
    const [loading, setLoading] = useState(true)
    const insets =  useSafeAreaInsets()

    useEffect(() => {
        setLoading(true)
        axios.get(currentPage)
            .then(res => {
                setPokemons(res.data.results)
                handlePagination(res.data.next, res.data.previous)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [currentPage])

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