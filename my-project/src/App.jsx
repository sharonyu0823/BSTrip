import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Questionnaire from './pages/Questionnaire/Questionnaire'
import ItineraryMain from './pages/Itinerary/ItineraryMain/ItineraryMain'
import ItineraryAdd from './pages/Itinerary/ItineraryAdd/ItineraryAdd'
import ItineraryEdit from './pages/Itinerary/ItineraryEdit/ItineraryEdit'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/itinerary/">
            <Route path="day/:id" element={<ItineraryMain />} />
            <Route path="add" element={<ItineraryAdd />} />
            <Route path="edit" element={<ItineraryEdit />} />
            <Route path="" element={<Navigate to="day/01" replace />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
