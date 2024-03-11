import React from "react";
import BiddingPage from "./BiddingPage";
import Header from "./Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from "./Sign-in";
import Signup from "./Sign-up";
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
      <Header/>
      <BiddingPage/>
      </BrowserRouter>
     
  );
};

export default App;
