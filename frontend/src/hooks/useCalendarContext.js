import { CalendarContext } from "../context/CalendarContext"
import { useContext } from "react"

export const useCalendarContext = () => {
  const context = useContext(CalendarContext)

  if(!context) {
    throw Error('useCalendarContext must be used inside a CalendarContextProvider')
  }

  return context
}