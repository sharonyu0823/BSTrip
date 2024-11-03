import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            <Route index path="" element={<ItineraryMain />} />
            <Route path="add" element={<ItineraryAdd />} />
            <Route path="edit" element={<ItineraryEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
