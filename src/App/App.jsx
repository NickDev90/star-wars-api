import { NavLink, Route, Routes } from 'react-router-dom';

import PeoplePage from '@pages/PeoplePage';

import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import Header from '../components/Header/Header';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import PersonPage from '../pages/PersonPage/PersonPage';



const App = () => {

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='people' element={<PeoplePage />}/>
        <Route path='people/:id' element={<PersonPage />}/>
        <Route path='not-found' element={<NotFoundPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
