import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { usePagination } from "../hooks/usePagination"
import { styled } from "nativewind"

const StyledPressable = styled(Pressable)

export const NavBar = () => {
    const { pagination, handleNextPage, handlePreviousPage } = usePagination()

    return (
        <View className="p-4 flex-row">
            <View className="w-1/2 self-center">
                <Link asChild href={"/mi-equipo"}>
                    <StyledPressable className="bg-indigo-600 self-center rounded-lg px-3 py-1 active:opacity-50">
                        <Text className="font-bold text-xl text-white">Ver mi equipo</Text>
                    </StyledPressable>
                </Link>
            </View>
            <View className="w-1/2 self-center flex-row justify-center gap-2">
                <StyledPressable className="bg-zinc-600 rounded-full p-2 active:opacity-50 disabled:bg-red-700" onPress={handlePreviousPage} disabled={pagination === 0 ? true : false}>
                    <Text className="text-white text-2xl font-semibold px-2">&#60;</Text>
                </StyledPressable>
                <Text>Page</Text>
                <StyledPressable className="bg-zinc-600 rounded-full p-2 active:opacity-50" onPress={handleNextPage}>
                    <Text className="text-white text-2xl font-semibold px-2">&#62;</Text>
                </StyledPressable>
            </View>
        </View>
    )
}