import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  Img,
} from "./SidebarElements";

import image1 from "../../cafe-peter-menu/image-001.png";
import image2 from "../../cafe-peter-menu/image-002.png";
import image3 from "../../cafe-peter-menu/image-003.png";
import image4 from "../../cafe-peter-menu/image-004.png";
import image5 from "../../cafe-peter-menu/image-005.png";
import image6 from "../../cafe-peter-menu/image-006.png";
import image7 from "../../cafe-peter-menu/image-007.png";
import image8 from "../../cafe-peter-menu/image-008.png";
import image9 from "../../cafe-peter-menu/image-009.png";
import image10 from "../../cafe-peter-menu/image-010.png";
import image11 from "../../cafe-peter-menu/image-011.png";
import image12 from "../../cafe-peter-menu/image-012.png";
import image13 from "../../cafe-peter-menu/image-013.png";
import image14 from "../../cafe-peter-menu/image-014.png";
import image15 from "../../cafe-peter-menu/image-015.png";
import image16 from "../../cafe-peter-menu/image-016.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <Icon onClick={toggle}>
        <CloseIcon />
      </Icon> */}
      <SidebarMenu>
        {/* <SidebarLink to="/">Coffee</SidebarLink>
            <SidebarLink to="/">Desserts</SidebarLink>
            <SidebarLink to="/">Full Menu</SidebarLink> */}
        {/* <Img /> */}
        <div>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <img
            src={image1}
            alt=""
            height="200px"
            width="200px"
            style={{ width: "100%", height: "98vh", marginTop: "0px" }}
          />
        </div>
        <img
          src={image2}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image3}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image4}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image5}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image6}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image7}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image8}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image9}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image10}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image11}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image12}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image13}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image14}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image15}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
        <img
          src={image16}
          alt=""
          height="200px"
          width="200px"
          style={{ width: "100%", height: "98vh", marginTop: "0px" }}
        />
      </SidebarMenu>
      {/* <SideBtnWrap>
            <SidebarRoute to='/'> Order Now</SidebarRoute>
        </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
