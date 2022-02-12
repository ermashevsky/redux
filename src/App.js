import React, { Fragment } from 'react';
import Add from './components/Add/Add';
import List from './components/List/List';
import Filter from './components/Filter/Filter';

const App = () => {
  return (
    <Fragment>
      <Add />
      <Filter />
      <List />
    </Fragment>
  );
}

export default App;
