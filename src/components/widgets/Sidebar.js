import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '1%',
            }}
          >
          </div>
        </CDBSidebarFooter>

        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/Home" className="text-decoration-none" style={{ color: 'inherit' }}>
          CIRCUITS <br/>
          AND ELECTRONICS
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Homework" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Homework</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Setting" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="cog">Setting</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;