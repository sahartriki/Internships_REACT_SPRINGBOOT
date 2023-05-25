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
import { createClub } from "../services/api";
import { useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav";


const Container = styled(FormGroup)`
    width: 30%;
    margin: 5% 0 0 10%;
    & > div {
        margin-top: 15px;
`;

const initialValue = {
    nomClub: "",
    description: "",
    
};

const Addclub= () => {
    const [clubs, setClubs] = useState(initialValue);
    const { nomClub , description } =clubs;
  

  const onValueChange = (e) => {
    console.log(e.target.value);
    setClubs({ ...clubs, [e.target.name]: e.target.value });
    console.log(clubs);
  };
 
  let navigate = useNavigate();

  const addclubsDetails = async () => {
    await createClub(clubs);
    navigate("/Clubs");
    alert("club added ssuccessfully");
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
          <h1>New club</h1>
          
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
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: 30,
              backgroundColor: "rgb(48 111 223);",

              fontSize: "13px",
            }}
            onClick={() => addclubsDetails()}
          >
            Create
          </Button>
        </FormControl>
      </Container>
    </Card>
    </div>
  );
};

export default Addclub;
