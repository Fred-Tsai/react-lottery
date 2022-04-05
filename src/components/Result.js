import { useSelector } from 'react-redux';
import { selectResult } from '../store/slice/result';
import Image from './Image';
import './Result.css';

const Result = () => {
  const { result = {} } = useSelector(selectResult);
  return (
    <div className="result">
      <h3 className="result__title">抽獎結果</h3>
      <div className="result__user">
        <div className="result__avator bg-warn">
          <Image url={result.picture.large} alt={result.login.username} />
        </div>
        <div className="result__name">{result.login.username}</div>
      </div>
    </div>
  );
};

export default Result;
