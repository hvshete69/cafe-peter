import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import img from "../background.jpg";
import { Formik } from "formik";

function InfoForm() {
  let history = useNavigate();

  const redirect = path => {
    history(path);
  };

  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <div
      style={{
        backgroundImage: `url("https://torange.biz/photofxnew/184/HD/dollars-desktop-wallpaper-184117.jpg")`,
        backgroundSize: "cover",
        position: "fixed",
        padding: "0",
        margin: 0,

        top: 0,
        left: 0,

        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{ email: "", fullname: "", phoneNumber: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          redirect('/landingPage');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          console.log("Values", values),
          (
            <form onSubmit={handleSubmit}>
              <MainContainer>
                <WelcomeText>Welcome</WelcomeText>
                <InputContainer>
                  <Input
                    type="email"
                    name={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                  />
                  {errors.email && touched.email && errors.email}
                  <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullname}
                    name={"fullname"}
                    placeholder="Full Name"
                  />
                  {errors.fullname && touched.fullname && errors.fullname}
                  <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    name={"phoneNumber"}
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber}
                </InputContainer>
                  <button
                    style={{
                      background:
                        "linear-gradient(to right, #14163c 0%, #03217b 79%)",
                      textTransform: "uppercase",
                      letterSpacing: "0.2rem",
                      width: "200px",
                      height: "3rem",
                      border: "none",
                      color: "white",
                      borderRadius: "2rem",
                      cursor: "pointer",
                      marginTop: "35px",
                      marginBottom: "100px",
                    }}
                    type="submit"
                    disabled={isSubmitting}
                    
                  >
                    Submit
                  </button>
                <ForgotPassword>Follow Us On</ForgotPassword>
                <IconsContainer>
                  <Icon color={FacebookBackground}>
                    <FaFacebookF />
                  </Icon>
                  <Icon color={InstagramBackground}>
                    <FaInstagram />
                  </Icon>
                  <Icon color={TwitterBackground}>
                    <FaTwitter />
                  </Icon>
                </IconsContainer>
              </MainContainer>
            </form>
          )
        )}
      </Formik>
    </div>
  );
}

{
  /* <MainContainer>
<WelcomeText>Welcome</WelcomeText>
<InputContainer>
  <Input type="text" placeholder="Full Name" />
  <Input type="text" placeholder="Phone Number" />
  <Input type="password" placeholder="Email Address" />
</InputContainer>
<ButtonContainer>
  <Link to="/landingPage">
    {" "}
    <Button content="Submit" />{" "}
  </Link>
</ButtonContainer>
<LoginWith>OR LOGIN WITH</LoginWith>
<HorizontalRule /> 
}
{
  /* <ForgotPassword>Follow Us On</ForgotPassword>
<IconsContainer>
  <Icon color={FacebookBackground}>
    <FaFacebookF />
  </Icon>
  <Icon color={InstagramBackground}>
    <FaInstagram />
  </Icon>
  <Icon color={TwitterBackground}>
    <FaTwitter />
  </Icon>
</IconsContainer>
</MainContainer> */
}

const MainContainer = styled.div`
  background-image: url(${img});
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default InfoForm;
