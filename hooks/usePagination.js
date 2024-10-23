import { useContext } from "react"
import { TeamPaginationContext } from "../context/TeamPaginationContext"

export const usePagination = () => {
    const {pagination, setPagination} = useContext(TeamPaginationContext)

    const handleNextPage = () => {
        setPagination(prevPagination => prevPagination + 20)
    }

    const handlePreviousPage = () => {
        setPagination(prevPagination => prevPagination - 20)
    }

    return {pagination, handleNextPage, handlePreviousPage}
}