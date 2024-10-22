import { Pressable, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TeamProvider } from "../context/TeamContext";

export default function Layout() {
    return (
        <TeamProvider>
            <SafeAreaProvider>
                <View className="flex-1">
                    <Stack
                        screenOptions={{
                            headerTitle: "PokeApp"
                        }}
                    />
                </View>
                <View className="p-4">
                    <Link asChild href={"/mi-equipo"}>
                        <Pressable className="bg-indigo-600 self-center rounded-lg px-3 py-1">
                            <Text className="font-bold text-xl text-white">Ver mi equipo</Text>
                        </Pressable>
                    </Link>
                </View>
            </SafeAreaProvider>
        </TeamProvider>
    )
}