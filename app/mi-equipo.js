import { View, Text } from "react-native";
import { POKE_API } from "../api/api";
import { useTeam } from "../hooks/useTeam";
import { CardTeam } from "../components/CardTeam";

export default function MiEquipo() {
    const { team } = useTeam()

    return (
        <View>
            <Text>Tu equipo</Text>
            {team.length > 0 
                ? team.map((memberId, index) => (
                    <CardTeam key={`${memberId}-member-${index}`} url={POKE_API + `pokemon/${memberId}`} position={index}/>
                )) 
                : ""
            }
        </View>
    )
}