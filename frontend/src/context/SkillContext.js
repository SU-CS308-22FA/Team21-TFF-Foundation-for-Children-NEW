import { createContext, useReducer } from 'react'

export const SkillContext = createContext()

export const skillReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return { 
        skills: [action.payload, ...state.skills] // the event just added: action.payload 
        // the already existing events: ...state.events
        // now, events become up-to-date
      }
    case 'UPDATE_SKILL': 
      return {
        skills: [action.payload, ...state.skills]
      }
    case 'DELETE_SKILL': 
      return {
        skills: state.skills.filter((e) => e._id !== action.payload._id) // filter the events: check all the events if they are the event that is going to be deleted.
        // if an event is not the event that is going to be delete, add this event to the "events" array.
      }
    case 'VIEW_SKILL':  // in this case, the dispatch function has the name "VIEW EVENT"
      return {
        skills: action.payload // payload will be an array of events
      }

    default:
      return state
  }
}

export const SkillContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(skillReducer, { 
    skill: null
  })
  
  return ( 
    <SkillContext.Provider value={{ ...state, dispatch }}>
      { children }
    </SkillContext.Provider>
  )
}
