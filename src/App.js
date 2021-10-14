import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, selectUser } from "./features/counter/userSlice"
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }))
      }
      else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />) : (
        <div className="app_body">
          <Sidebar />
          <Feed />

          {/* widgets */}
        </div>
      )}

    </div>
  );
}

export default App;
