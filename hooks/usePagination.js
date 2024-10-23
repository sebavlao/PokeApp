import { useContext } from "react"
import { TeamPaginationContext } from "../context/TeamPaginationContext"

export const usePagination = () => {
    const {pagination, setPagination} = useContext(TeamPaginationContext)

    const handleSetPages = () => {
        setPagination(prevPagination => prevPagination + 20)
    }

    return {pagination, handleSetPages}
}