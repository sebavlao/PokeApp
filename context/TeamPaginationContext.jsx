import React, { createContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { POKE_API } from '../api/api';

export const TeamPaginationContext = createContext()

export const TeamPaginationProvider = ({children}) => {
  const [team, setTeam] = useState()
  const [pagination, setPagination] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPagination(0)

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
    <TeamPaginationContext.Provider value={{team, pagination, setPagination, setTeam}}>
      {children}
    </TeamPaginationContext.Provider>
  )
}
