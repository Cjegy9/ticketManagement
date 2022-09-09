// src/components/App/index.js
import React, { memo } from 'react';
import { Button, Input, Form, TextArea } from 'semantic-ui-react';
import axios from 'axios';

const Home = () => {

  const fetchHello = () => {
    axios.get("http://localhost:3002/user")
      .then(res => {
        const data = res.data.foo;
        console.log(data);
      });
  };

  const fetchTicket = () => {
    axios.get("http://localhost:3002/ticket")
      .then(res => {
        console.log(res.data)
      })
  }

  const createTicket = () => {
    axios.post("http://localhost:3002/ticket/create-ticket", { name: "First ticket", description: "First ticket descirption", startDate: Date(), endDate: Date(), finished: false});
  }

  return (
    <div style={{ height: window.innerHeight, display: 'flex', flexDirection: 'column'}}>
      <div>
        <Button onClick={fetchHello}>Hello World</Button>
        <Button onClick={fetchTicket}>Fetch Ticket</Button>
        <Button onClick={createTicket}>Create Ticket</Button>
      </div>
      <Input placeholder="Name" />
      <Form>
        <TextArea placeholder='Description' />
      </Form>

    </div>
  );
}

export default memo(Home);