import React from "react";
import {useState} from "react";
import axios from 'axios' ;
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../Styles/register.scss";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [niveau, setNiveau] = useState("");
  const [specialite, setSpecialite] = useState("");
  const navigate =useNavigate() ; 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/Admin/Add_Student", {
        firstName,
        lastName,
        email,
        password,
        tel,
        niveau,
        specialite,
      });
      console.log(response.data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setTel("");
      setNiveau("");
      setSpecialite("");
      alert("sign up success ") ; 
      navigate('/login') ; 

    } catch (error) {
      console.error(error);
    }
  };


    
  return (
    <MDBContainer fluid={true} maxWidth="md">
      <MDBCard
        className="mx-auto my-5 p-5 shadow-5"
        style={{
          width: "35%",
          height: "8%",
          marginTop: "-60px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5" style={{ color: "#333" }}>
            Register now
          </h2>
          <form onSubmit={handleSubmit}   style={{
          width: "100%",
          
        
        }} >
          <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text" >
                  <MDBInput
                  style={{
                    marginbottom: '20px',
                    padding: '10px'
                   
          
                  }}
                    label="First Name"
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  <MDBInput
                
                    label="Last Name"
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                  <MDBInput
                    label="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <MDBInput
                    label="Password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <MDBInput
                    label="Tel"
                    id="tel"
                    type="text"
                    value={tel}
                    onChange={(event) => setTel(event.target.value)}
                  />
                  <MDBInput
                    label="Niveau"
                    id="niveau"
                    type="text"
                    value={niveau}
                    onChange={(event) => setNiveau(event.target.value)}
                  />
                  <MDBInput
                    label="Specialite"
                    id="specialite"
                    type="text"
                    value={specialite}
                    onChange={(event) => setSpecialite(event.target.value)}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Subscribe to our newsletter"
            />
          </div>

          <MDBBtn className="w-100 mb-4" size="md">
            sign up
          </MDBBtn>

          <div className="text-center">
            <p>or sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;