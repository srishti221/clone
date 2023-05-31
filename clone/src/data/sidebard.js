
import { Link } from "react-router-dom";
import Left from "../components/Left";
import { BrowserRouter } from 'react-router-dom'

export const SidebarData=[
    {
        
       
        id:1,
        name:"Activity",
        button:<><BrowserRouter><Link to="/Left"><button class="fa-solid fa-bell">

        </button></Link></BrowserRouter></>,
       
        
    },

    {
        id:2,
        name:"Chat",
        button:<button class="fa-solid fa-comment"></button>,
    },
    
    {
        id:3,
        name:"Teams",
        button:<button class="fa-solid fa-people-group"></button>,
        
    },
    
    {
        id:4,
        name:"Calls",
        button:<button class="fa-solid fa-phone">
              
        </button> ,
        

    },

    {
        id:5,
        name:"Calender",
        button:<button class="fa-solid fa-calendar-days"></button>,
    },


    {
        id:6,
        name:"Files",
        button:<button class="fa-solid fa-file"></button>,
    },

];

export const SidebarMore={
    id:1,
    button:<button class="fa-solid fa-ellipsis"></button>,
};

export const SidebarBottom=[
    {
        id:1,
        name:"Help",
        button:<button class="fa-solid fa-circle-question"></button>,
    },

    {
        id:2,
        name:"Apps",
        button:<button class="fa-brands fa-app-store-ios"></button>,
    },


];

