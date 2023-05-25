import { useState } from "react";
import {
  FormControl,
  FormGroup,
  styled,
  InputLabel,
  Input,
  Card,
  Button,
} from "@mui/material";
import { createStudents } from "../services/api";
import { useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav";


const Container = styled(FormGroup)`
    width: 30%;
    margin: 5% 0 0 10%;
    & > div {
        margin-top: 15px;
`;

const initialValue = {
    firstName:"",
    lastName:"",
    email: "" ,
    tel: "",
    niveau:"", 
    specialite:"" ,
  
};

const AddStudent= () => {
    const [students, setCourse] = useState(initialValue);
    const {  firstName,
    lastName,email,
    tel,
    niveau, 
    specialite, } =students;
  

  const onValueChange = (e) => {
    console.log(e.target.value);
    setCourse({ ...students, [e.target.name]: e.target.value });
    console.log(students);
  };
 
  let navigate = useNavigate();

  const addstudentsDetails = async () => {
    await createStudents(students);
    navigate("/Students");
    alert("student added ssuccessfully");
  };

  return (
    <div  className="app__home" id="home">
    <AdminNav/>
    <Card
      sx={{
        backgroundColor: "white",
        width: 500,
        paddingTop: "10%",
        mx: "auto",
        borderRadius: "20px",
      }}
    >
      <Container
        style={{
          backgroundColor: "white",
          width: "80%",
          paddingLeft: "40px",
          paddingBottom: "20px",
          margin: "8px",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <div className="pagetitle">
          <h1>New Student</h1>
          
        </div>
        <FormControl>
          <InputLabel htmlFor="my-input">First name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="firstName"
            value={firstName}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">last name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="lastName"
            value={lastName}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="tel"
            value={tel}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Grade</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="niveau"
            value={niveau}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input"> Speciality</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="specialite"
            value={specialite}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: 30,
              backgroundColor: "rgb(48 111 223);",

              fontSize: "13px",
            }}
            onClick={() => addstudentsDetails()}
          >
            Create
          </Button>
        </FormControl>
      </Container>
    </Card>
    </div>
  );
};

export default AddStudent;
