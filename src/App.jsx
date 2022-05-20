import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
          path="/landingPage"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              {/* <CafePeterLandingPage /> */}
              
                <GlobalStyle />
                <Hero />
                <Products heading="Choose your favorite" data={productsData} />
                <Feature />
                <Products
                  heading="Sweet Treats for You"
                  data={productsDataTwo}
                />
                <Footer />
            </Protected>
          }
        />
        {/* <Route path="/" element={<InfoForm />} /> */}
        <Route path="/" element={<InfoForm />} />
      </Routes>
    </Router>
  );
}
export default App;
