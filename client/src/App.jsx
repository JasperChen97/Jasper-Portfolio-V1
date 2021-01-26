import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar.jsx';
import { Main } from '../StyledComponents/index.js';

const App = () => {
  return (
    <Main>
      <Sidebar />
    </Main>
  )
};

export default App