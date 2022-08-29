// src/routes.js
import React, { useState, memo } from 'react';
import {Routes as RRoutes, Route, useNavigate } from 'react-router-dom';
/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

import { Input, Menu } from 'semantic-ui-react'

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

const App = () => {
  const [activeItem, setactiveItem] = useState('home');
  let navigate = useNavigate();

  const handleItemClick = (e, {name}) => {
    setactiveItem(name);
    navigate(`/${name}`);
  };

  return (
    <div style={{ width: '100%' }}>
      <Menu>
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
        </Menu.Menu>
      </Menu>
      <RRoutes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="login" element={<Login/>} />
      </RRoutes>
    </div>
  );
}

export default memo(App);