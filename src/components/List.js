import { useSelector } from 'react-redux';
import { selectUserList } from '../store/slice/userList';
import User from './User';
import './List.css';

const List = () => {
  const { userList = [] } = useSelector(selectUserList);
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
