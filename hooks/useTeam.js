import { useContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TeamPaginationContext } from "../context/TeamPaginationContext";

export const useTeam = () => {
    const {team, setTeam} = useContext(TeamPaginationContext)

    const addToTeam = async id => {
        if (team.length >= 6) {
            return "none"
        }


        const newTeam = [...team, id]

        console.log(newTeam)

        setTeam(newTeam)
        await AsyncStorage.setItem("team", JSON.stringify(newTeam))
    }

    const removeToTeam = async position => {
        const newTeam = team.filter((_, index) => index !== position)

        console.log(newTeam)

        setTeam(newTeam)
        await AsyncStorage.setItem("team", JSON.stringify(newTeam))
    }

    return { team, addToTeam, removeToTeam }
}