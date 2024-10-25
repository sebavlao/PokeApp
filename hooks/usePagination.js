import { useContext } from "react"
import { TeamPaginationContext } from "../context/TeamPaginationContext"

export const usePagination = () => {
    const {
        currentPage, 
        pagination, 
        currentPageNumber, 
        setCurrentPage, 
        setCurrentPageNumber, 
        setPagination
    } = useContext(TeamPaginationContext)

    const handlePagination = (nextPage, previousPage) => {
        setPagination({
            next: nextPage,
            previous: previousPage
        })
    }

    const handleNextPage = url => {
        setCurrentPage(url)
        setCurrentPageNumber(currentPageNumber + 1)
    }

    const handlePreviousPage = url => {
        setCurrentPage(url)
        setCurrentPageNumber(currentPageNumber - 1)
    }

    return {
        currentPage, 
        currentPageNumber, 
        pagination,
        handlePagination, 
        handleNextPage, 
        handlePreviousPage
    }
}