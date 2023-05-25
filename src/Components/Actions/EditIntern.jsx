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
import { editIntern, getInternid } from "../services/api"
import AdminNav from "../AdminNav";

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

const Container = styled(FormGroup)`
width: 30%;
margin: 5% 0 0 10%;
& > div {
    margin-top: 15px;
}
`;

const EditIntern=() => {
  const [interns, setIntern] = useState(initialValue);
  const { nom_societe,
  titre,
  description,
  specialite,
  mail_societe,
  num_societe,
  lieu,
  capacite, } =interns;
  const { id } = useParams();

  useEffect(() => {
    loadInternsDetails();
  }, []);

  const loadInternsDetails = async () => {
    const response = await getInternid(id);
    setIntern(response.data);
  };

  let navigate = useNavigate();

  const editInternsDetails = async () => {
    const response = await editIntern(id, Interns);
    navigate("/Interns");
    alert(" updated");
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setIntern({ ...interns, [e.target.name]: e.target.value });
    console.log(interns.value);
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
          <h1>Edit Interns</h1>
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
              fontSize: "14px",
            }}
            onClick={() => editInternsDetails()}
          >
            Edit Internships
          </Button>
        </FormControl>
      </Container>
    </Card>
    </div>
  );
};

export default EditIntern;
