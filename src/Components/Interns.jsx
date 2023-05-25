import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import '../Styles/Training.scss';
import '../Styles/course.scss';
import '../Styles/UserList.scss' ; 
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import AdminNav from './AdminNav';


export default function Interns() {
  const [listOfInterns, setListofInterns] = useState([]);
  const getRowClassName = (params) => {
    return 'white-text';
  };
const columns = [
  {
    field: "id",
    headerName: "",
    width: 20,
    headerClassName: "white-header",
   
  },
  {
    field: "nom_societe",
    headerName: "Company name",
    width: 200,
    headerClassName: "white-header",
   
  },
  {
    field: "titre",
    headerName: "Title",
    width: 200,
    headerClassName: "white-header",
   
  },
  {
    field: "specialite",
    headerName: "speciality",
    width: 200,
    headerClassName: "white-header",
   
  },
  
  {
    field: "mail_societe",
    headerName: "Email ",
    width: 200,
    headerClassName: "white-header",

  
  },
  {
    field: "num_societe",
    headerName: "Phone number",
    width: 200,
    headerClassName: "white-header",

  
  },
  {
    field: "lieu",
    headerName: "Location",
    width: 200,
    headerClassName: "white-header",

  
  },
  {
    field: "capacite",
    headerName: "capacity",
    width: 200,
    headerClassName: "white-header",

  
  },
 
  {
    field: "description",
    headerName: "description",
    width: 300,
    headerClassName: "white-header",

  },
  {
    field: "action",
    headerName: "Action",
    headerClassName: "white-header",
    
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/EditIntern/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutlineIcon
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
  
];

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/Admin/Internships")
      .then((response) => {
        console.log(response.data);
        // Add unique ids to each row
        const InternsWithIds = response.data.map((course, index) => ({...course, id: index}));
        setListofInterns(InternsWithIds);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/Admin/delete_internships/${id}`)
      .then((res) => {
        setListofInterns(listOfInterns.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(listOfInterns);
  };



  return (

    <div className="app__home" id="home">
      <AdminNav />
     <div className='title_course'>
     <h1 className='course'>  Manage Internships </h1>
     </div>
     
              <Link to="/Addintern">
                <button className="userAddButtonn">
                   Add
                </button>
              </Link>
            
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={listOfInterns}
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
