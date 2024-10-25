import { View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TeamPaginationProvider } from "../context/TeamPaginationContext";
import { NavBar } from "../components/NavBar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return (
        <GestureHandlerRootView>
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
        </GestureHandlerRootView>
    )
}