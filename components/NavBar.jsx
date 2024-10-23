import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { POKE_API } from "../api/api"
import { usePagination } from "../hooks/usePagination"

export const NavBar = () => {
    const { handleSetPages } = usePagination()

    const handlePage = () => {
        handleSetPages()
    }

    return (
        <View className="p-4">
            <View>
                <Link asChild href={"/mi-equipo"}>
                    <Pressable className="bg-indigo-600 self-center rounded-lg px-3 py-1">
                        <Text className="font-bold text-xl text-white">Ver mi equipo</Text>
                    </Pressable>
                </Link>
            </View>
            <View>
                <Pressable>
                    <Text>&#60;</Text>
                </Pressable>
                <Text>a</Text>
                <Pressable className="bg-black" onPress={handlePage}>
                    <Text>&#62;</Text>
                </Pressable>
            </View>
        </View>
    )
}