import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
// icon
import ContactSupport from '@material-ui/icons/ContactSupport';
import Home from '@material-ui/icons/Home';
// import PermPhoneMsg from '@material-ui/icons/PermPhoneMsg';

import '../css/Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
      <a href='https://clashroyale.com/ja/'><img src='./images/クラロワ.jpg' alt='クラロワ'className='clash-banner'/></a>
        <h1>React ClashRoyale</h1>
        <List>
          <Link to="/">
            <ListItem button key={'Home'}>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary={'Home'} className="list-items" />
            </ListItem>
          </Link>
          <Link to="/how_to_use">
            <ListItem button key={'HowToUse'}>
              <ListItemIcon><ContactSupport /></ListItemIcon>
              <ListItemText primary={'How To Use'} className="list-items" />
            </ListItem>
          </Link>
          {/*
            <Link to="/contact">
            <ListItem button key={'Contact'}>
            <ListItemIcon><PermPhoneMsg /></ListItemIcon>
            <ListItemText primary={'Contact'} className="list-items" />
            </ListItem>
            </Link>
          */}
        </List>
      </div>
    )
  }
}
export default Sidebar;
