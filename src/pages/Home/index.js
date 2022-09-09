// src/components/App/index.js
import React, { memo } from 'react';
import axios from 'axios';
import { Button, Input, Form, TextArea } from 'semantic-ui-react';
import TicketCreation from '../../containers/TicketCreation';
import TicketsDisplay from '../../containers/TicketsDisplay';

const Home = () => {

  return (
    <div style={{ height: window.innerHeight, display: 'flex', flexDirection: 'column'}}>
      <div style={{ width: 500, marginBottom: 20 }}>
        <TicketCreation />
      </div>
      <TicketsDisplay />
    </div>
  );
}

export default memo(Home);