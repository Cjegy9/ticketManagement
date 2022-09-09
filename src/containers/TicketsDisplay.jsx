import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react'

const TicketDisplay = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/ticket")
      .then(res => {
        setTickets(res.data);
      })
  }, []);

  return (
    <div>
      {tickets.map((ticket) => (
        <Segment raised>
          {ticket.description}
        </Segment>
      ))}
    </div>
  );
};

export default memo(TicketDisplay);