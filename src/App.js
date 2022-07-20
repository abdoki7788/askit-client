// components
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AllUserQuestions from './pages/AllUserQuestions';
import Question from './pages/Question';

// react-redux
import { Provider } from 'react-redux';
import store from './redux/store';

// react-router
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/all-user-questions' element={<AllUserQuestions />} />
          <Route path='/questions' element={<Question />} />
        </Routes>
      </div>
    </Provider>
  );
}