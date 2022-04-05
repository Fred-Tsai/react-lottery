import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserList } from './store/slice/userList';
import { selectResult } from './store/slice/result';
import './App.css';
import Timer from './components/Timer';
import List from './components/List';
import Result from './components/Result';
import api from './plugins/api';
import defaultData from './assets/scripts/defaultUser';

const App = () => {
  const dispatch = useDispatch();
  const getUserList = async () => {
    const res = await api.user.getUser({
      results: Math.floor(Math.random() * 20) + 11,
      inc: 'gender,login,email,picture',
    });
    if (res.errorStatus) {
      dispatch(setUserList(defaultData.results));
      return;
    }
    dispatch(setUserList(res.results));
  };
  useEffect(() => {
    getUserList();
  }, []);
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
