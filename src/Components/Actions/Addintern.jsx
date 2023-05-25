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
import { createInterns } from "../services/api";
import { useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav";


const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% 0 0 10%;
    & > div {
        margin-top: 15px;
`;

const initialValue = {
    nom_societe: "",
    titre: "",
    description: "",
    specialite: "",
    mail_societe: "",
    num_societe:"",
    lieu:"" ,
    capacite:"" ,
};

const Addintern = () => {
    const [interns, setIntern] = useState(initialValue);
    const { nom_societe,
    titre,
    description,
    specialite,
    mail_societe,
    num_societe,
    lieu,
    capacite, } =interns;
  

  const onValueChange = (e) => {
    console.log(e.target.value);
    setIntern({ ...interns, [e.target.name]: e.target.value });
    console.log(interns);
  };
 
  let navigate = useNavigate();

  const addinternsDetails = async () => {
    await createInterns(interns);
    navigate("/interns");
    alert("course added ssuccessfully");
  };

  return (
    <div  className="Admin__home" >
    <AdminNav/>
    <Card
    style={{
          backgroundColor: "#0c1727",

          margin: "0px",
        
          borderRadius: "20px",
        }} >
      <Container
        style={{
          backgroundColor: "white",
        
          paddingLeft: "40px",
          margin: "50px",
          marginTop:"5px" ,
          borderRadius: "20px",
        }}
      >
        <div className="pagetitle">
          <h1>New Internships</h1>
          
        </div>
        <FormControl>
          <InputLabel htmlFor="my-input">Company name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="nom_societe"
            value={nom_societe}
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
          <InputLabel htmlFor="my-input">Title</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="titre"
            value={titre}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">speciality</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="specialite"
            value={specialite}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="mail_societe"
            value={mail_societe}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <InputLabel htmlFor="my-input">phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="num_societe"
            value={num_societe}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        <FormControl>
          <InputLabel htmlFor="my-input">lieu</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="lieu"
            value={lieu}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">capacity</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="capacite"
            value={capacite}
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
            onClick={() => addinternsDetails()}
          >
            Create
          </Button>
        </FormControl>
      </Container>
      </Card>
    </div>
  );
};

export default Addintern;
