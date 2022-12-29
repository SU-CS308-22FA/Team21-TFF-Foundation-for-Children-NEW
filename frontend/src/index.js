
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { EventContextProvider } from './context/EventContext'
import { AuthContextProvider } from './context/AuthContext'
import { TrainingContextProvider } from './context/TrainingContext'
import { SkillContextProvider } from './context/SkillContext'
import { CalendarContextProvider } from './context/CalendarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <EventContextProvider>
        <TrainingContextProvider>
          <SkillContextProvider>
            <CalendarContextProvider>
            <App />
            </CalendarContextProvider>
            </SkillContextProvider>
          </TrainingContextProvider>
      </EventContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);