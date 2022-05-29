import Axios from "axios";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //   const [userData, setUserData] = React.useState([]);

  // TO GET USER DATA
  //   React.useEffect(() => {
  //     Axios.get("http://localhost:3001/read").then((response) => {
  //       console.log("RESP", response?.data);
  //       setUserData(response?.data);
  //     });
  //   }, []);
  //   console.log(userData);

  // UPDATE USER DATA
  //   const updateUser = (id) => {
  //     Axios.put("http://localhost:3001/update", {
  //       id: id,
  //       userName: newUserName,
  //     });
  //     window.location.reload();
  //   };

  //DELETE USER DATA
  //   const deleteUser = (id) => {
  //     Axios.delete(`http://localhost:3001/delete/${id}`);
  //     window.location.reload();
  //   };
  //   const [newUserName, setNewUserName] = React.useState("");

 

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Marquee
        style={{ background: "#B4161B", height: "50px" , }}
        gradient={false}
        speed={40}
      >
        <h1 style={{color:'#fff'}}> &nbsp; 30% Off on Regular Size Pizzas!! &nbsp; |</h1>
        <h1>&nbsp;10% Off on orders above $500!! &nbsp; | </h1>
        <h1 style={{color:'#fff'}}> &nbsp; 20% Off on code TRYNEW!! &nbsp; |</h1>
        <h1 > &nbsp; 20% Off on code TRYNEW!! &nbsp; |</h1>
      </Marquee>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Coffee Ever </HeroH1>
          <HeroP>Ready in 60 Seconds </HeroP>
          <HeroBtn href="tel:8830848420">Place Order </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
