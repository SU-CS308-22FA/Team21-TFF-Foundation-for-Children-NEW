import { createContext, useReducer } from 'react'

export const CalendarContext = createContext()

export const calendarReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CALENDAR':
      return { 
        calendars: [action.payload, ...state.calendars] // the event just added: action.payload 
        // the already existing events: ...state.events
        // now, events become up-to-date
      }
    case 'UPDATE_CALENDAR': 
      return {
        calendar: [action.payload, ...state.calendars]
      }
    case 'DELETE_CALENDAR': 
      return {
        calendars: state.calendars.filter((e) => e._id !== action.payload._id) // filter the events: check all the events if they are the event that is going to be deleted.
        // if an event is not the event that is going to be delete, add this event to the "events" array.
      }
    case 'VIEW_CALENDAR': // in this case, the dispatch function has the name "VIEW EVENT"
      return {
        calendars: action.payload // payload will be an array of events
      }

    default:
      return state
  }
}

export const CalendarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calendarReducer, { 
    calendars: null  // the original state of "events" will be empty. once we fetch the data, we update it by using "dispatch" function 
  })
  
  return ( 
    // state will be returned as a value when,
    // for example, const{events,dispatch}=useEventContext()
    // the data is fetched and response is OK,
    // to "events" in this case.
    <CalendarContext.Provider value={{ ...state, dispatch }}>
      { children }
    </CalendarContext.Provider>
  )
}

