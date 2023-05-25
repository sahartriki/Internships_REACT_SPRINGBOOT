import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Card,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { editStudent, getStudentid } from "../services/api"
import AdminNav from "../AdminNav";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "" ,
  tel: "",
  niveau:"", 
  specialite:"" ,

};

const Container = styled(FormGroup)`
width: 30%;
margin: 5% 0 0 10%;
& > div {
    margin-top: 15px;
}
`;

const EditStudent=() => {
  const [students, setStudent] = useState(initialValue);
    const {  firstName,
    lastName,email,
    tel,
    niveau, 
    specialite, } =students;
  const { id } = useParams();

  useEffect(() => {
    loadstudentsDetails();
  }, []);

  const loadstudentsDetails = async () => {
    const response = await getStudentid(id);
    setStudent(response.data);
  };

  let navigate = useNavigate();

  const editstudentsDetails = async () => {
    const response = await editStudent(id, students);
    navigate("/Students");
    alert(" updated");
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setStudent({ ...students, [e.target.name]: e.target.value });
    console.log(students.value);
  };
 
  return (
    <div  className="app__home" id="home">
      <AdminNav/>
    <Card
      sx={{
        backgroundColor: "white",
        width: 500,
        paddingTop: "100px",
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
          marginTop: "10px",
          borderRadius: "20px",
        }}
      >
       
        <div className="pagetitle">
          <h1>Edit students</h1>
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
          <InputLabel htmlFor="my-input">lastname</InputLabel>
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
              fontSize: "14px",
            }}
            onClick={() => editstudentsDetails()}
          >
            Edit course
          </Button>
        </FormControl>
      </Container>
    </Card>
    </div>
  );
};

export default EditStudent;
