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
import { editClubs, getClubid } from "../services/api"
import AdminNav from "../AdminNav";

const initialValue = {
  nomClub: "",
  description: "",
  respClub:" " , 
};

const Container = styled(FormGroup)`
width: 30%;
margin: 5% 0 0 10%;
& > div {
    margin-top: 15px;
}
`;

const Editclub=() => {
  const [clubs, setClubs] = useState(initialValue);
  const { nomClub , description, respClub } =clubs;

  const { id } = useParams();

  useEffect(() => {
    loadclubsDetails();
  }, []);

  const loadclubsDetails = async () => {
    const response = await getClubid(id);
    setClubs(response.data);
  };

  let navigate = useNavigate();

  const editclubsDetails = async () => {
    const response= await editClubs(id, clubs);
    navigate("/Clubs");
    alert(" updated");
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setCourse({ ...clubs, [e.target.name]: e.target.value });
    console.log(clubs.value);
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
          <h1>Edit clubs</h1>
        </div>
        <FormControl>
          <InputLabel htmlFor="my-input">Club Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="nomClub"
            value={nomClub}
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
          <InputLabel htmlFor="my-input">club  president</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name=" respClub"
            value={respClub}
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
            onClick={() => editclubsDetails()}
          >
            Edit course
          </Button>
        </FormControl>
      </Container>
    </Card>
    </div>
  );
};

export default Editclub;
