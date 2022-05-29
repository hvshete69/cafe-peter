import { HashRouter as Router, Routes, Route } from "react-router-dom";
import InfoForm from "./components/InfoForm";
import { useState } from "react";
import Protected from "./components/Protected";
import CafePeterLandingPage from "./components/CafePeterLandingPage/CafePeterLandingPage";

import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productsData, productsDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";


import { BrowserRouter } from "react-router-dom";
import { Formik } from "formik";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const logIn = () => {
  //   setisLoggedIn(true);
  // };
  // const logOut = () => {
  //   setisLoggedIn(false);
  // };

  
  return (
    <Router>
      <Routes>
        <Route
          path="/cafe-peter/landingPage"
          exact
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <GlobalStyle />
              <Hero  />
              <Products heading="CHOOSE YOUR FAVOURITE" data={productsData} />
              <Feature />
              <Products heading="Sweet Treats for You" data={productsDataTwo} />
              <Footer />
            </Protected>
          }
        />
        {/* <Route path="/" element={<InfoForm />} /> */}
        <Route path="/" exact element={<InfoForm isLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </Router>

  );
}
export default App;
