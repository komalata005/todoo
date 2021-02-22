import React from 'react';
import TodoApp from './TodoApp';
import useStyles from '../styles/AppStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>Add task list you want to do Today</h2>
      </header>
      <TodoApp />
      <a
        href=""
        className={classes.link}
      >
        <strong>View source on GitHub &copy;Komal Ata</strong>
      </a>
    </div>
  );
}

export default App;
