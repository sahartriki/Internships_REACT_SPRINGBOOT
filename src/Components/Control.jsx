import React, { useEffect , useState} from "react";
import { controls } from "../Data/dummy";
import {Link } from 'react-router-dom';
import "../Styles/control.scss";
import axios from 'axios' ; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Control = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const [listOfClubs, setListofClubs] = useState([]);
 
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/Admin/Clubs")
      .then((response) => {
        console.log(response.data);
        setListofClubs(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="feature__controls"
    >
      <div className="control__container">
        <div className="control__text">
          <h1>Our school <span style={{color :'#3ab7fd'}}>clubs</span></h1>
          <p>
          Our university offers a wide range of clubs that
           often organize events and activities that contribute to the university's vibrant campus life. These events, such as community service projects, cultural festivals, and academic competitions, not only benefit the students but also enrich the wider university community.
          </p>
          <Link to="/Training">
          <motion.button
    className="btn"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    Click to see latest events
  </motion.button>
          </Link>
        </div>
        <div className="control__content">
          {listOfClubs.map((value) => (
            <div className="control" >
              <div className="control__text__content"> 
              <div className="titreclub">
              <h1  > {value.nomClub}</h1>
              </div>
                <span >
                  {value.description}
                </span>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Control;
