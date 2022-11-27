import { Route, Routes } from 'react-router-dom';
import './App.css';
import PeoplePage from '@pages/PeoplePage';
import HomePage from '@pages/HomePage/HomePage';
import Header from '@components/Header/Header';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage';
import PersonPage from '@pages/PersonPage/PersonPage';
import FavoritesPage from '@pages/FavoritesPage';
import SearchPage from '@pages/SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';



const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='people/' element={<PeoplePage />}/>
        <Route path='people/:id' element={<PersonPage />}/>
        <Route path='search' element={<SearchPage />}/>
        <Route path='not-found' element={<NotFoundPage />}/>
        <Route path='favorites' element={<FavoritesPage />}/>
        <Route path='fail' element={<ErrorMessage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
