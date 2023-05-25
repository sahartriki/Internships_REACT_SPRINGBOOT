import React from 'react' ; 

import AdminHome from './AdminHome' ; 
import AdminNav from './AdminNav';
import Courses from './Courses';
import {Link} from 'react-router-dom' ;
import { useTrail, animated  } from 'react-spring';



export default function Admin() {
  
  
  const cardsData = [
    {
      id: 1,
      title: 'Manage courses',
      path:"/Courses"
      
    },
    {
      id: 2,
      title: 'Manage students',
      path:"/Students"
     
    },
    {
      id: 3,
      title: 'Manage clubs',
      path:"/Clubs"
    
    },

    {
      id: 3,
      title: 'Manage Internships',
      path:"/Interns"
    
    },
   
  ];
  const trail = useTrail(cardsData.length, {
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 35 },
  });



 return (
    <div>
      <AdminNav />
      <AdminHome/>

    
    <hr className="separator" />

      <div className="card-list">
      {trail.map((props, index) => (
        <Link to={cardsData[index].path} key={cardsData[index].id} className="card-link">
          <animated.div className="card" style={props}>  
            <h2>{cardsData[index].title}</h2>
          </animated.div>
        </Link>
      ))}
    </div>

    <footer>
  <p>Copyright &copy; 2023 Project by Sahar triki and Nourhen jbali</p>
</footer>
    </div>
    
  
 ) ; 

}