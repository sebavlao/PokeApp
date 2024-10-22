import { useEffect, useState } from "react"
import axios from "axios"

export const useGetPokeInfo = (url) => {
    const [pokemon, setPokemon] = useState()
    const [color, setColor] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPokemon(res.data)
                return axios.get(res.data?.species.url)
            })
            .then(res => setColor(res.data?.color?.name))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return {pokemon, color, loading}
}