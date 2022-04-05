import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserList, setUserList } from '../store/slice/userList';
import User from './User';
import api from '../plugins/api';
import './List.css';
import defaultData from '../assets/scripts/defaultUser';

const List = () => {
  const { userList = [] } = useSelector(selectUserList);
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
  return (
    <div className="list">
      <h3 className="list__title">參與抽獎名單</h3>
      <ul className="list__menu">
        {userList.map((user) => {
          return (
            <li
              key={user.login.uuid}
              className={`list__item ${
                user.gender === 'female' ? 'bg-danger' : 'bg-clam'
              }`}
            >
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
