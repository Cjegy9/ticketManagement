// src/routes.js
import React, { useState, memo } from 'react';
import {Routes as RRoutes, Route, useNavigate } from 'react-router-dom';
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

import { Input, Menu } from 'semantic-ui-react'

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  const [activeItem, setactiveItem] = useState('home');
  let navigate = useNavigate();

  const handleItemClick = (e, {name}) => {
    setactiveItem(name);
    navigate(`/${name === 'home' ? '' : name}`);
  };

  return (
    <div style={{ width: '100%' }}>
      <Menu color="grey" inverted className="header-menu">
        <Menu.Item>
          <span style={{ width: 178 }}>&nbsp;</span>
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      <div style={{ display: 'flex' }}>
        <Menu color="grey" inverted vertical className="side-nav">
          <Menu.Item
            name="test"
            active={false}
            onClick={() => console.log('test')}
          />
        </Menu>
        <div style={{ padding: 10 }}>
          <RRoutes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="login" element={<Login/>} />
            <Route path="profile" element={<Profile/>} />
          </RRoutes>
        </div>
      </div>
    </div>
  );
}

export default memo(App);