import React, { useState } from "react";
import "./Dashboard.css";
import logo from "../assets/react-logo.png";
import profile from "../assets/profile_pic.avif";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import TableDisplay from "./TableDisplay";
// import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { IconButton, Tabs as MuiTabs, Tabs } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { styled } from "@mui/material";
import { Circle } from "@mui/icons-material";
import Modal from '../Modal'

const Dashboard = () => {
  const [valueTab, setValueTab] = React.useState("");
  const [valueSubTab, setValueSubTab] = React.useState("");
  const[open,setOpen]=useState(false)

  const handleChangeMainTabs = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleChangeSubTabs = (event, newValue) => {
    setValueSubTab(newValue);
  };

  console.log("value", valueTab);
  
  const Tabs = styled(MuiTabs)(({ theme }) => ({
    "& .MuiTab-root.Mui-selected": {
      backgroundColor: "#f5f5f5",
      color: "grey",
      border: "1px solid #dddd",
      borderRadius:"5px",
      minHeight:"0px"
    },
  }));
 function alertfun(){
  setOpen(!false)
 }
  return (
    <>
      <section>
        <header class="header">
          <nav class="header__nav">
            <div class="header__nav-left">
              <div className="header__nav-left-menu">
                <div className="header__nav-logo">
                  <img src={logo} />
                </div>
                <div class="header__nav-text">
                  <a href="#">DeployIT</a>
                </div>
              </div>
                <Tabs
                style={{color:"#dddd"}}
                  TabIndicatorProps={{
                    style: { display: "none" },
                  }}
                  value={valueTab}
                  onChange={handleChangeMainTabs}
                  aria-label="wrapped label tabs example"
                >
                  <Tab value="dashboard" label="Dashboard" />
                  <Tab value="projects" label="Projects" />
                  <Tab value="stores" label="Stores" />
                  <Tab value="admin" label="Admin" />
                  <Tab value="reporting" label="Reporting" />
                </Tabs>
            </div>
            <ul class="header__nav-right-menu">
              <li class="header__nav-search">
                <SearchIcon />
              </li>
              <li onClick={alertfun}>
                <SettingsIcon  />
              </li>
              <li>
                <NotificationsIcon />
              </li>
              <li>
                <Avatar alt="Supriya" src={profile} />
              </li>
            </ul>
          </nav>
        </header>
      </section>
      <section>
        <div className="subMenus">
          {valueTab === "stores" ? (
            <Tabs
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              value={valueSubTab}
              onChange={handleChangeSubTabs}
              aria-label="wrapped label tabs example"
            >
              <Tab value="storeDetails" label="Store Details"/>
              <Tab value="projects" label="Projects" iconPosition="start" icon={valueSubTab==="projects"?<Circle sx={[{color:"#0E9384", fontSize:"10px"}]}/>:''} />
              <Tab value="storeTechnologies" label="Store Technologies" />
            </Tabs>
          ) : (
            ""
          )}
        </div>
      </section>
     {valueSubTab==='projects'&& valueTab==="stores"?<> <section className="store__Details">
        <div className="store__Details-left">
          <div>
            <h1>Arby's Store 3456</h1>
          </div>
          <ul className="store__Details-sublist">
            <li>
              <span className="sublist-text">Raleigh, NC </span>
              <span className="pipe">&#124;</span>
            </li>
            <li>
              <span className="sublist-text">5 stalls </span>
              <span className="pipe">&#124;</span>
            </li>
            <li>
              <span className="sublist-text">3 lane Drive-Thru </span>
              <span className="pipe">&#124;</span>
            </li>
            <li>
              <span className="sublist-text">Serving Breakfast </span>
              <span className="pipe">&#124;</span>
            </li>
            <li>
              <span className="sublist-text">Inside Dining</span>
            </li>
          </ul>
        </div>

        <div className="store__Details-buttons">
          <button className="import">
            <span>
              <ElectricBoltIcon />
            </span>
            <span>Import Stores</span>
          </button>
          <button className="project">
            <span>Create New Project</span>
            <span>
              <BookmarkAddIcon />
            </span>
          </button>
        </div>
      </section>
      <ul className="store__status">
        <li className="prep">Prepration</li>
        <li className="active"> <IconButton aria-label="expand row" size="small">
          <CircleIcon sx={{color:"#0E9384", fontSize:"12px"}}/>
                      </IconButton>Active Projects</li>
        <li className="comp">Complete</li>
      </ul>
      <section className="data__table">
      <TableDisplay />
      </section></>:""}
      {/* {open&& <Modal name={'Supriya patel'}/>} */}
    </>
  );
};

export default Dashboard;
