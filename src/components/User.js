import Image from './Image';
import './User.css';

const User = ({ user }) => {
  return (
    <div className="user bg-secondary">
      <div className="user__avator img-cover">
        <Image url={user.picture.thumbnail} alt={user.login.username}></Image>
      </div>
      <div className="user__name">{user.login.username}</div>
    </div>
  );
};

export default User;
