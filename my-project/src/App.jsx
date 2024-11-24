import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./store/userSlice"
import NotLogin from './pages/Login/NotLogin'
import Questionnaire from './pages/Questionnaire/Questionnaire'
import ItineraryMain from './pages/Itinerary/ItineraryMain/ItineraryMain'
import ItineraryAdd from './pages/Itinerary/ItineraryAdd/ItineraryAdd'
import ItineraryEdit from './pages/Itinerary/ItineraryEdit/ItineraryEdit'

const store = configureStore({
  reducer: {
    // key: value
    user: userSlice
  }
})

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<NotLogin />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/itinerary/">
              <Route path="day/:id" element={<ItineraryMain />} />
              <Route path="add" element={<ItineraryAdd />} />
              <Route path="edit" element={<ItineraryEdit />} />
              <Route path="" element={<Navigate to="day/01" replace />}/>
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
