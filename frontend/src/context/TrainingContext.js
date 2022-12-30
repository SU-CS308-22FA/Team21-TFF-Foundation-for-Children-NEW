import { createContext, useReducer } from 'react'

export const TrainingContext = createContext()

export const trainingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return { 
        trainings: [action.payload, ...state.trainings] // the event just added: action.payload 
        // the already existing events: ...state.events
        // now, events become up-to-date
      }
    case 'UPDATE_TRAINING': 
      return {
        trainings: [action.payload, ...state.trainings]
      }
    case 'DELETE_TRAINING': 
      return {
        trainings: state.trainings.filter((e) => e._id !== action.payload._id) // filter the events: check all the events if they are the event that is going to be deleted.
        // if an event is not the event that is going to be delete, add this event to the "events" array.
      }
    case 'VIEW_TRAINING':  // in this case, the dispatch function has the name "VIEW EVENT"
      return {
        trainings: action.payload // payload will be an array of events
      }

    default:
      return state
  }
}

export const TrainingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trainingReducer, { 
    training: null
  })
  
  return ( 
    <TrainingContext.Provider value={{ ...state, dispatch }}>
      { children }
    </TrainingContext.Provider>
  )
}

