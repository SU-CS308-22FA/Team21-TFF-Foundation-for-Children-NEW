import { createContext, useReducer } from 'react'

export const EventContext = createContext()

export const eventReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return { 
        events: [action.payload, ...state.events] 
      }
    default:
      return state
  }
}

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, { 
    events: null
  })
  
  return (
    <EventContext.Provider value={{ ...state, dispatch }}>
      { children }
    </EventContext.Provider>
  )
}

