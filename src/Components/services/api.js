import axios from "axios";

const URL = "http://localhost:8080";

/************courses*****************/
export const editCourses = async (id, courses) => {
    return await axios.put(`${URL}/api/Admin/Edit_course/${id}`, courses);
  };
  
  export const getCourseid = async (id) => {
    return await axios.get(`${URL}/api/Admin/Courses/${id}`);
  };
  
  export const deleteCourses = async (id) => {
    return await axios.delete(`${URL}/api/Admin/delete_course/${id}`);
  };

  export const createCourses = async (data) => {
    try {
      return await axios.post(`${URL}/api/Admin/add_courses`, data);
    } catch (error) {
      console.log("error while calling add doctor Api", error);
    }
  };

  /***************students*****************/
  export const editStudent = async (id, students) => {
    return await axios.put(`${URL}/api/Admin/edit_Student/${id}`, students);
  };
  
  export const getStudentid = async (id) => {
    return await axios.get(`${URL}/api/Admin/Etudiant/${id}`);
  };
  
  export const deleteStudent = async (id) => {
    return await axios.delete(`${URL}/api/Admin/deleteStudent/${id}`);
  };

  export const createStudents= async (data) => {
    try {
      return await axios.post(`${URL}/api/Admin/Add_Student`, data);
    } catch (error) {
      console.log("error while calling add doctor Api", error);
    }
  };


  /**************internships****************/
  export const editIntern = async (id, interns) => {
    return await axios.put(`${URL}/api/Admin/edit_internships/${id}`, interns);
  };
  
  export const getInternid = async (id) => {
    return await axios.get(`${URL}/api/Admin/Internships/${id}`);
  };
  
  export const deleteIntern = async (id) => {
    return await axios.delete(`${URL}/api/Admin/delete_internships/${id}`);
  };

  export const createInterns= async (data) => {
    try {
      return await axios.post(`${URL}/api/Admin/Add_internships`, data);
    } catch (error) {
      console.log("error while calling add doctor Api", error);
    }
  };





  /*******************clubs*******************/
  export const editClubs= async (id, clubs) => {
    return await axios.put(`${URL}/api/Admin/edit_Club/${id}`, clubs);
  };
  
  export const getClubid = async (id) => {
    return await axios.get(`${URL}/api/Admin/Club/${id}`);
  };
  
  export const deleteClub = async (id) => {
    return await axios.delete(`${URL}/api/Admin/deleteClub/${id}`);
  };

  export const createClub= async (data) => {
    try {
      return await axios.post(`${URL}/api/Admin/Add_Club`, data);
    } catch (error) {
      console.log("error while calling add doctor Api", error);
    }
  };
