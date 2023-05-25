import { AiOutlineClockCircle, AiFillCloud } from "react-icons/ai";
import { SiGooglepodcasts } from "react-icons/si";

export const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Internships",
    path : "/Internships" ,
  },
  {
    name: "Training ",
    path: "/Training",
  },
  {
    name: "Contact Us",
    path: "/Contact us ",
  },
  
];
export const AdminRoutes = [
  {
    name: "Home",
    path: "/Admin",
  },
  {
    name: " Internships",
    path : "/Interns" ,
  },
  {
    name: "Courses",
    path: "/Courses",
  },
  {
    name: "Students",
    path: "/Students ",
  },
  {
    name: "Clubs",
    path: "/Clubs",
  },
  

];





export const analytics = [
  {
    name: "",
    desc: "IT",
  },
  {
    name: "",
    desc: "Infotronic",
  },
  {
    name: "",
    desc: "Mecatronic",
  },
  {
    name: "",
    desc: "GSIL",
  },
];

export const features = [
  "Choose a view",
  "Meet your new butler",
  "Dive into the details",
  "Power up",
];

export const controls = [
  {
    name: "Structured Reports",
    icon: SiGooglepodcasts,
  },
  {
    name: "Cloud System",
    icon: AiFillCloud,
  },
  {
    name: "24/7 Support",
    icon: AiOutlineClockCircle,
  },
];
