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


export default function Students() {
  const [listOfstudents, setListofstudents] = useState([]);
  const getRowClassName = (params) => {
    return 'white-text';
  };



  useEffect(() => {
    axios
      .get("http://localhost:8080/api/Admin/Etudiants")
      .then((response) => {
        console.log(response.data);
        // Add unique ids to each row
        const studentsWithIds = response.data.map((student, index) => ({...student, id: index}));
        setListofstudents(studentsWithIds);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/Admin/deleteStudent/${id}`)
      .then((res) => {
        setListofstudents(listOfstudents.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(listOfstudents);
  };
const columns = [
  {
    field: "id",
    headerName: "",
    width: 20,
    headerClassName: "white-header",
   
  },
  {
    field: "firstName",
    headerName: "firstname",
    width: 200,
    headerClassName: "white-header",
   
  },
  {
    field: "lastName",
    headerName: "lastname",
    width: 200,
    headerClassName: "white-header",
   
  },
  {
    field: "email",
    headerName: "email",
    width: 200,
    headerClassName: "white-header",
   
  },
  
  {
    field: "tel",
    headerName: "phonr",
    width: 200,
    headerClassName: "white-header",

  
  },
 
  {
    field: "niveau",
    headerName: "Grade",
    width: 300,
    headerClassName: "white-header",

  },
  {
    field: "specialite",
    headerName: "specialite",
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
          <Link to={"/EditStudent/" + params.row.id}>
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

 



  return (

    <div className="app__home" id="home">
      <AdminNav />
     <div className='title_course'>
     <h1 className='course'>  Manage students </h1>
     </div>
     
              <Link to="/Addstudent">
                <button className="userAddButtonn">
                   Add
                </button>
              </Link>
            
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={listOfstudents}
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
