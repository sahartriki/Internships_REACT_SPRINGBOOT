import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Training.scss';
import Navbar from './Navbar' ;
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';


const VISIBLE_FIELDS = ['id', 'nom','date_d' , 'date_f' ,'description' ];
const columns = [
  {
    field: "id",
    headerName: "",
    width: 20,
    headerClassName: "white-header",
  },
  {
    field: "nom",
    headerName: "Workshop",
    width: 300,
    headerClassName: "white-header",
  },
 
  {
    field: "date_D",
    headerName: "Start date",
    width: 300,
    headerClassName: "white-header",
  },
  
  {
    field: "date_F",
    headerName: "End date ",
    width: 300,
    headerClassName: "white-header",
  },
 
  {
    field: "description",
    headerName: "description",
    width: 250,
    headerClassName: "white-header",
  },
  {  
    headerName: "Details",
    width: 120,
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

export default function Training() {
  const [listOfCourses, setListofCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/etudiant/Courses")
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

  const getRowClassName = (params) => {
    return 'white-text';
  };

  return (

    <div className="app__home" id="home">
     <Navbar />
     <div className='title_intern'>
     <h1 className='internh1'>  Find trainings / workshops </h1>
     <h2 className='internh2'>Apply for better skills :</h2>
     </div>
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
