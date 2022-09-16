import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Icon } from 'semantic-ui-react'

const TicketDisplay = () => {
  const [tickets, setTickets] = useState([]);
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/ticket")
      .then(res => {
        setTickets(res.data);
      });
  }, []);

  const finishTicket = (ticketId) => {
    axios.put(`http://localhost:3002/ticket/update-ticket/${ticketId}`);
    setFinished([...finished, ticketId]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Card.Group>
      {tickets.map((ticket, idx) => (
        <Card key={ticket._id} color={ticket.finished ? 'green' : 'red'}>
          <Card.Content>
            <Card.Header>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <React.Fragment>{ticket.name}</React.Fragment>
                <span onClick={() => finishTicket(ticket._id)}>
                  <Icon color={finished.includes(ticket._id) ? 'green' : ''} name={finished.includes(ticket._id) ? 'check square' : 'square outline'} link />
                </span>
              </div>
            </Card.Header>
            <Card.Meta>Colin Eyster</Card.Meta>
            <Card.Description>{ticket.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
      </Card.Group>
    </div>
  );
};



export default memo(TicketDisplay);