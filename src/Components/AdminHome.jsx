import React from "react";
import "../Styles/home.scss";
import { TiTick } from "react-icons/ti";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {Link} from "react-router-dom" ;

const Adminhome = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const list = {
    hidden: { opacity: 0 },
    vissible: { opacity: 1 },
  };

  const item = {
    vissible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: "-50%",
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
    <div className="Admin__home"    >
  

      <motion.div
        initial="hidden"
        animate={control}
        variants={list}
        ref={ref}
        className="Admin__text"
      > 
          <img src="./src/Images/Admin.png" alt="" style={{width:'30%' , float:'right'}}  />
        <motion.h1 variants={item}>  Welcome back  Admin </motion.h1>
       
      </motion.div>
      
      
      <button className="btnAd"  >
      Start Manage </button>
     
    </div>
  );
};

export default Adminhome;



