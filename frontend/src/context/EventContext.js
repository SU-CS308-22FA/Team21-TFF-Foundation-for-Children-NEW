import { createContext, useReducer } from 'react'

export const EventContext = createContext()

export const eventReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return { 
        events: [action.payload, ...state.events] // the event just added: action.payload 
        // the already existing events: ...state.events
        // now, events become up-to-date
      }
    case 'UPDATE_EVENT': 
      return {
        events: [action.payload, ...state.events]
      }
    case 'DELETE_EVENT': 
      return {
        events: state.events.filter((e) => e._id !== action.payload._id)
      }
    case 'VIEW_EVENT': // in this case, the dispatch function has the name "VIEW EVENT"
      return {
        events: action.payload // payload will be an array of events
      }
    default:
      return state
  }
}

export const EventContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, { 
    events: null  // the original state of "events" will be empty. once we fetch the data, we update it by using "dispatch" function 
  })
  
  return ( 
    // state will be returned as a value when,
    // for example, const{events,dispatch}=useEventContext()
    // the data is fetched and response is OK,
    // to "events" in this case.
    <EventContext.Provider value={{ ...state, dispatch }}>
      { children }
    </EventContext.Provider>
  )
}

