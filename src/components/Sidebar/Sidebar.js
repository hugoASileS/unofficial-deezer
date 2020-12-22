import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Browse from './components/Browse';
import Queue from './components/Queue';

const Sidebar = () => {
  const [tabActive, setTabActive] = useState('browse');

  return (
    <aside data-testid="sidebar">
      <Button variant="secondary" onClick={() => setTabActive('browse')}>
        Browse
      </Button>
      <Button variant="secondary" onClick={() => setTabActive('queue')}>
        Queue
      </Button>
      {tabActive === 'browse' && <Browse />}
      {tabActive === 'queue' && <Queue />}
    </aside>
  );
};

export default Sidebar;
