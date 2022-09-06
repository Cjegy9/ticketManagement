// src/components/App/index.js
import React, { memo } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const Home = () => {

  const fetchHello = () => {
    axios.get("http://localhost:3002/")
      .then(res => {
        const data = res.data.foo;
        console.log(data);
      });
  };

    return (
      <div style={{ height: 900}}>
        home Page
        <Button onClick={fetchHello}>Hello World</Button>
      </div>
    );
}

export default memo(Home);