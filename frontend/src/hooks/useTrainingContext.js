import { TrainingContext } from "../context/TrainingContext"
import { useContext } from "react"

export const useTrainingContext = () => {
  const context = useContext(TrainingContext)

  if(!context) {
    console.log("CONTEXT :::.:", context)
    throw Error('useTrainingContext must be used inside a TrainingContextProvider')
  }

  return context
}