import { Pressable, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TeamPaginationProvider } from "../context/TeamPaginationContext";
import { NavBar } from "../components/NavBar";

export default function Layout() {
    return (
        <TeamPaginationProvider>
            <SafeAreaProvider>
                <View className="flex-1">
                    <Stack
                        screenOptions={{
                            headerTitle: "PokeApp"
                        }}
                    />
                </View>
                <NavBar/>
            </SafeAreaProvider>
        </TeamPaginationProvider>
    )
}