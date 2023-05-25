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
import { editCourses, getCourseid } from "../services/api"
import AdminNav from "../AdminNav";

const initialValue = {
  nom: "",
  description: "",
  type: "",
  date_D: "",
  date_F: "",
};

const Container = styled(FormGroup)`
width: 30%;
margin: 5% 0 0 10%;
& > div {
    margin-top: 15px;
}
`;

const Edit=() => {
  const [courses, setCourse] = useState(initialValue);
  const { nom , description, type, date_D, date_F } =courses;
  const { id } = useParams();

  useEffect(() => {
    loadCoursesDetails();
  }, []);

  const loadCoursesDetails = async () => {
    const response = await getCourseid(id);
    setCourse(response.data);
  };

  let navigate = useNavigate();

  const editCoursesDetails = async () => {
    const response = await editCourses(id, courses);
    navigate("/Courses");
    alert(" updated");
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setCourse({ ...courses, [e.target.name]: e.target.value });
    console.log(courses.value);
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
          <h1>Edit Courses</h1>
        </div>
        <FormControl>
          <InputLabel htmlFor="my-input">Course Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="nom"
            value={nom}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Description</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="description"
            value={description}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Type</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="type"
            value={type}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">Start date</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="date_D"
            value={date_D}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">End date</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="date_F"
            value={date_F}
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
            onClick={() => editCoursesDetails()}
          >
            Edit course
          </Button>
        </FormControl>
      </Container>
    </Card>
    </div>
  );
};

export default Edit;
