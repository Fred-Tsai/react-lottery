// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectResult } from './store/slice/result';
import './App.css';
import Timer from './components/Timer';
import List from './components/List';
import Result from './components/Result';

const App = () => {
  const { result = {} } = useSelector(selectResult);
  return (
    <div className="app">
      {result.login ? (
        <section className="app__section">
          <Result />
        </section>
      ) : (
        <>
          <section className="app__section">
            <Timer />
          </section>
          <section className="app__section">
            <List />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
