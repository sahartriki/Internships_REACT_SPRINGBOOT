import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Internships.scss';
import Navbar from './Navbar' ;
import Footer from './Footer' ;
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { color } from 'framer-motion';

const VISIBLE_FIELDS = ['id', 'nom_societe', 'specialite', 'lieu', 'mail_societe', 'num_societe', 'capacite', 'description' ];


const columns = [
  {
    field: "id",
    headerName: "",
    width: 20,
    headerClassName: "white-header",
  },
  {
    field: "nom_societe",
    headerName: "Name",
    width: 120,
    headerClassName: "white-header",
  },
  {
    field: "specialite",
    headerName: "Speciality",
    width: 120,
    headerClassName: "white-header",
  },
  {
    field: "lieu",
    headerName: "Place",
    width: 120,
    headerClassName: "white-header",
  },
  { 
    field: "mail_societe", 
    headerName: "Email", 
    width: 190 ,
    headerClassName: "white-header",
  },
  {
    field: "num_societe",
    headerName: "Phone ",
    width: 120,
    headerClassName: "white-header",
  },
  { 
    field: "capacite", 
    headerName: "capacity", 
    width: 120 ,
    headerClassName: "white-header",
  },
  {
    field: "description",
    headerName: "description",
    width: 300,
    headerClassName: "white-header",
  },
  {  
    headerName: "Details",
    width: 150,
    headerClassName: "white-header",
    renderCell: (params) => {
   
      const handleClick = () => {
        
      };
      return (
        
        <button  style={{width:'100%' , borderradius: '20px' ,padding: '9px 8px' }}  className='btn' onClick={handleClick}>
          Details
        </button>
        
      );
    },
  },
];

export default function Internships() {
  const [listOfIntern, setListofintern] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/etudiant/Internships")
      .then((response) => {
        console.log(response.data);
        setListofintern(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const getRowClassName = (params) => {
    return 'white-text';
  };

  return (

    <div className="app__home" id="home">
     <Navbar />
     <div
     className='title_intern animated fadeInDown'  >
   <h1 className='internh1'>Find internships </h1>
     </div>
    
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={listOfIntern}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          filterPanel: {
            disableAddFilterButton: true,
            disableRemoveAllButton: true,
          },
        }}
        getRowClassName={getRowClassName} 
        
      />
    </div>
    
    </div>
   
  );
}
