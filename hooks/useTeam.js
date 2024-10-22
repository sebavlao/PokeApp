import { useContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TeamContext } from "../context/TeamContext";

export const useTeam = () => {
    const {team, setTeam} = useContext(TeamContext)

    const addToTeam = async id => {
        if (team.length >= 6) {
            return "none"
        }

        const newTeam = [...team, id]

        setTeam(newTeam)
        await AsyncStorage.setItem("team", JSON.stringify(newTeam))
    }

    const removeToTeam = async id => {
        const newTeam = team.filter(memberId => memberId != id)

        setTeam(newTeam)
        await AsyncStorage.setItem("team", JSON.stringify(newTeam))
    }

    return { team, addToTeam, removeToTeam }
}