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


export default function Clubs() {
  const [listOfclubs, setListofclubs] = useState([]);
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
    field: "nomClub",
    headerName: "clubs",
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
          <Link to={"/Editclub/" + params.row.id}>
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
      .get("http://localhost:8080/api/Admin/Clubs")
      .then((response) => {
        console.log(response.data);
        // Add unique ids to each row
        const clubsWithIds = response.data.map((club, index) => ({...club, id: index}));
        setListofclubs(clubsWithIds);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/Admin/deleteClub/${id}`)
      .then((res) => {
        setListofclubs(listOfclubs.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(listOfclubs);
  };



  return (

    <div className="app__home" id="home">
      <AdminNav />
     <div className='title_course'>
     <h1 className='course'>  Manage clubs </h1>
     </div>
     
              <Link to="/Addclub">
                <button className="userAddButtonn">
                   Add
                </button>
              </Link>
            
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        rows={listOfclubs}
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
