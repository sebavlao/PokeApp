import React, { createContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TeamContext = createContext()

export const TeamProvider = ({children}) => {
  const [team, setTeam] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTeam = async () => {
      const teamStorage = await AsyncStorage.getItem("team")

      if (teamStorage) {
        setTeam(JSON.parse(teamStorage))
      } else {
        await AsyncStorage.setItem("team", JSON.stringify([]))
        setTeam([])
      }

      setLoading(false)
    }

    loadTeam()
  }, [])

  if (loading) return <Text>Cargando...</Text>

  return (
    <TeamContext.Provider value={{team, setTeam}}>
      {children}
    </TeamContext.Provider>
  )
}
