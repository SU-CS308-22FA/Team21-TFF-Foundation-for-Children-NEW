import { SkillContext } from "../context/SkillContext"
import { useContext } from "react"

export const useSkillContext = () => {
  const context = useContext(SkillContext)

  if(!context) {
    console.log("CONTEXT :::.:", context)
    throw Error('useSkillContext must be used inside a SkillContextProvider')
  }

  return context
}