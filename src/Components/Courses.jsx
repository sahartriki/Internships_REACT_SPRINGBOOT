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


export default function Courses() {
  const [listOfCourses, setListofCourses] = useState([]);
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
    field: "nom",
    headerName: "Courses",
    width: 200,
    headerClassName: "white-header",
   
  },
  {
    field: "type",
    headerName: "Type",
    width: 200,
    headerClassName: "white-header",
   
  },
  {
    field: "date_D",
    headerName: "Start date",
    width: 200,
    headerClassName: "white-header",
   
  },
  
  {
    field: "date_F",
    headerName: "End date ",
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
          <Link to={"/Edit/" + params.row.id}>
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
      .get("http://localhost:8080/api/Admin/courses")
      .then((response) => {
        console.log(response.data);
        // Add unique ids to each row
        const coursesWithIds = response.data.map((course, index) => ({...course, id: index}));
        setListofCourses(coursesWithIds);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/Admin/delete_course/${id}`)
      .then((res) => {
        setListofCourses(listOfCourses.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(listOfCourses);
  };



  return (

    <div className="app__home" id="home">
      <AdminNav />
     <div className='title_course'>
     <h1 className='course'>  Manage Courses </h1>
     </div>
     
              <Link to="/Add">
                <button className="userAddButtonn">
                   Add
                </button>
              </Link>
            
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={listOfCourses}
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
