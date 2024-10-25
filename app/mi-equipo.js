import { Text, ScrollView } from "react-native";
import { POKE_API } from "../api/api";
import { useTeam } from "../hooks/useTeam";
import { CardTeam } from "../components/CardTeam";

export default function MiEquipo() {
    const { team } = useTeam()

    return (
        <ScrollView>
            <Text className="font-bold text-xl text-center py-2">Mi equipo</Text>
            {team.length > 0 
                ? team.map((memberId, index) => (
                    <CardTeam key={`${memberId}-member-${index}`} url={POKE_API + `pokemon/${memberId}`} position={index}/>
                )) 
                : ""
            }
        </ScrollView>
    )
}