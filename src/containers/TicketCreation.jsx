import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, Form, TextArea } from 'semantic-ui-react';

const TicketCreation = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const createTicket = () => {
    // TODO: Add name and description validation before submit
    axios
      .post("http://localhost:3002/ticket/create-ticket", 
        { 
          name,
          description,
          startDate: Date(),
          endDate: Date(),
          finished: false,
        }
      )
      .then(() => {
        setName('');
        setDescription('');
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Input
        placeholder="Name"
        onChange={(e, d) => setName(d.value)}
        value={name}
      />
      <Form>
        <TextArea
          placeholder='Description'
          onChange={(e,d) => setDescription(d.value)}
          value={description}
        />
      </Form>
      <Button
        onClick={createTicket}
        color="blue"
      >
        Create Ticket
      </Button>
    </div>
  );
};

export default memo(TicketCreation);