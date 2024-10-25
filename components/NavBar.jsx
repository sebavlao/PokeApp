import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { usePagination } from "../hooks/usePagination"
import { styled } from "nativewind"
import { PressableHandlePage } from "./Pressable/PressableHandlePage"

const StyledPressable = styled(Pressable)

export const NavBar = () => {
    const { pagination, currentPageNumber, handleNextPage, handlePreviousPage } = usePagination()

    return (
        <View className="p-4 flex-row">
            <View className="w-1/2 self-center">
                <Link asChild href={"/mi-equipo"}>
                    <StyledPressable className="bg-indigo-600 self-center rounded-lg px-3 py-1 active:opacity-50">
                        <Text className="font-bold text-xl text-white">Ver mi equipo</Text>
                    </StyledPressable>
                </Link>
            </View>
            <View className="w-1/2 self-center flex-row justify-center">
                <PressableHandlePage text="&#60;" handle={handlePreviousPage} url={pagination?.previous}/>
                <View className="p-2">
                    <Text className="font-bold text-lg">{currentPageNumber}</Text>
                </View>
                <PressableHandlePage text="&#62;" handle={handleNextPage} url={pagination?.next}/>
            </View>
        </View>
    )
}