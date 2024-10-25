import { useContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TeamPaginationContext } from "../context/TeamPaginationContext";

export const useTeam = () => {
    const {team, setTeam} = useContext(TeamPaginationContext)

    const addToTeam = async id => {
        if (team.length >= 6) {
            return alert("Tu equipo no puede ser formado por más de 6 pokemones")
        }

        const newTeam = [...team, id]

        setTeam(newTeam)
        await AsyncStorage.setItem("team", JSON.stringify(newTeam))

        return alert("Se ha agregado correctamente al equipo" + (team.length >= 5 ? ". No puedes agregar más pokemones al mismo." : ""));
    }

    const removeToTeam = async position => {
        const newTeam = team.filter((_, index) => index !== position)

        setTeam(newTeam)
        await AsyncStorage.setItem("team", JSON.stringify(newTeam))
    }

    return { team, addToTeam, removeToTeam }
}