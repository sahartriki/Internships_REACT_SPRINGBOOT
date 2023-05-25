import React from "react";
import "./app.scss";
import { Route , Routes } from 'react-router-dom';
import Login from './Components/login' ;
import Alogin from './Components/Alogin' ;
import Register from "./Components/register";
import {
  Analytics,
  DashboardPreview,
  Distribution,
  Feature,
  Footer,
  Home,
  Navbar,
  Internships,
  Training,
  STTop,
  Admin,
  Edit,
  Editclub ,
  EditIntern,
  EditStudent,
  AddStudent,
  Addclub,
  Addintern ,
  Add,
  Courses,
  Interns,
  Clubs,
  Students,
  

  
} from "./Components";




const App = () => {
  return (
    <Routes>
      <Route path="/Alogin" element={<Alogin/>} />
     <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Add" element={<Add />} />
      <Route path="/Addclub" element={<Addclub />} />
      <Route path="/Addintern" element={<Addintern />} />
      <Route path="/Addstudent" element={<AddStudent />} />
      <Route path="/Edit/:id" element={<Edit />} />
      <Route path="/Editclub/:id" element={<Editclub />} />
      <Route path="/EditStudent/:id" element={<EditStudent />} />
      <Route path="/EditIntern/:id" element={<EditIntern />} />
      <Route path="/Admin" element={<Admin/>}></Route>
      <Route path="/Courses" element={<Courses/>}></Route>
      <Route path="/Students" element={<Students/>}></Route>
      <Route path="/Interns" element={<Interns/>}></Route>
      <Route path="/Clubs" element={<Clubs/>}></Route>
      <Route path="/Training" element={<Training/>}></Route>
    <Route path="/Internships" element={<Internships/>}></Route> 
    <Route path="/"
     element={
      <div className="app">
      <Navbar />
      <Home/>
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Footer />
      <STTop />
      </div>
     } />
    </Routes>
  );
};

export default App;
