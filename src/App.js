// components
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AllUserQuestions from './pages/AllUserQuestions';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ON_START } from './redux/types';
import { useEffect } from 'react';

// react-router
import { Route, Routes, Navigate } from 'react-router-dom';

export default function App() {

  let isAuthenticated = useSelector(initialState => initialState.isAuthenticated)

  const dispatch = useDispatch()

  const location = useLocation();
  
  const onStart = () => {return {type: ON_START}}

  useEffect(() => {
    dispatch(onStart())
    console.log('location:',location.pathname);
  },[location])

  console.log('isAuthenticated',isAuthenticated);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={isAuthenticated ? <Navigate to='/profile' /> : <SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/all-user-questions' element={<AllUserQuestions />} />
      </Routes>
    </div>
  );
}