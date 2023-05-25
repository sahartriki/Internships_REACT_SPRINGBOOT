import React, { useEffect } from "react";
import "../Styles/distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { twophones } from "../Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Distribution = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="app__distribution">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="distribution__container"
      >
        <motion.div variants={item1} className="left__distribution">
          <div className="distribution__text">
            <h1>Our Partnerships </h1>
          </div>
          <div className="listpartenrship">
          <div className="col-xs-6 col-sm-3 colsblobPartenaire">
          <div>
    <a href="http://www.uvt.rnu.tn" target="_blank">
      <img className="lazy" src="..\src\Images\uvt.jpg" alt="UVT" title="UVT" />
    </a>
  </div>    
          </div>

          <div className="col-xs-6 col-sm-3 colsblobPartenaire">
          <div>
    <a href="http://www.ibm.com/tn-fr" target="_blank">
      <img className="lazy" src="..\src\Images\ibm.jpg" alt="UVT" title="UVT" />
    </a>
  </div>    
          </div>


          <div className="col-xs-6 col-sm-3 colsblobPartenaire">
          <div>
    <a href="http://www.orange.tn" target="_blank">
      <img className="lazy" src="..\src\Images\orange.jpg" alt="UVT" title="UVT" />
    </a>
  </div>    
          </div>

          <div className="col-xs-6 col-sm-3 colsblobPartenaire">
          <div>
    <a href="http://www.sofrecom.com/fr" target="_blank">
      <img className="lazy" src="..\src\Images\sofrecom.jpg" alt="UVT" title="UVT" />
    </a>
  </div>    
          </div>



          <div className="col-xs-6 col-sm-3 colsblobPartenaire">
          <div>
    <a href="https://www.linedata.com/" target="_blank">
      <img className="lazy" src="..\src\Images\linedata.jpg" alt="UVT" title="UVT" />
    </a>
  </div>    
          </div>


   
          <div className="col-xs-6 col-sm-3 colsblobPartenaire">
          <div>
    <a href="https://www.steg.com.tn/fr/index.html" target="_blank">
      <img className="lazy" src="..\src\Images\dhaw.jpg" alt="UVT" title="UVT" />
    </a>
  </div>    
          </div>


          
   
          <div className="col-xs-6 col-sm-3 colsblobPartenaire">
          <div>
    <a href="http://www.institutfrancais-tunisie.com/" target="_blank">
      <img className="lazy" src="..\src\Images\ift.jpg" alt="UVT" title="UVT" />
    </a>
  </div>    
          </div>
          



          </div>
        </motion.div>
       
      </motion.div>
    </div>
  );
};

export default Distribution;
