import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserList } from '../store/slice/userList';
import { setResult } from '../store/slice/result';
import './Timer.css';

const Timer = () => {
  const { userList = [] } = useSelector(selectUserList);
  const dispatch = useDispatch();
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const isCountdown = useRef(false);
  const checkTime = (value) => {
    const maxTime = 59;
    const minTime = 0;
    if (value > minTime && value < maxTime) {
      return value;
    }
    if (value > maxTime) {
      return maxTime;
    }
    return minTime;
  };
  const minChange = (e) => {
    let value = checkTime(e.target.value);
    setMin(value);
  };
  const secChange = (e) => {
    let value = checkTime(e.target.value);
    setSec(value);
  };
  const countdown = () => {
    const nowSec = min * 60 + sec;
    if (nowSec <= 0) {
      return;
    }
    if (isCountdown.current) {
      return;
    }
    isCountdown.current = true;
    const id = setInterval(() => {
      const secValue = min * 60 + sec - 1;
      setMin(Math.floor(secValue / 60));
      setSec(secValue % 60);
      clearInterval(id);
    }, 1000);
  };
  const stopCountdown = () => {
    isCountdown.current = false;
  };
  useEffect(() => {
    const nowSec = min * 60 + sec;
    if (nowSec <= 0) {
      return;
    }
    if (!isCountdown.current) {
      return;
    }
    const id = setInterval(() => {
      const secValue = min * 60 + sec - 1;
      setMin(Math.floor(secValue / 60));
      setSec(secValue % 60);
      if (secValue <= 0) {
        isCountdown.current = false;
        const indexOrder = Math.floor(Math.random() * userList.length) + 1;
        dispatch(setResult(userList.slice(indexOrder, indexOrder + 1).pop()));
      }
    }, 1000);
    return () => clearInterval(id);
  }, [min, sec]);
  return (
    <div className="timer">
      <h3 className="timer__title">抽獎時間</h3>
      <div className="timer__set">
        <div className="timer__info">
          <input
            id="timer-min"
            type="number"
            min="0"
            max="59"
            value={min}
            onChange={minChange}
          />
          <label htmlFor="timer-min">分鐘</label>
        </div>
        <div className="timer__info">
          <input
            id="timer-min"
            type="number"
            min="0"
            max="59"
            value={sec}
            onChange={secChange}
          />
          <label htmlFor="timer-min">秒鐘</label>
        </div>
        <div className="timer__info">
          <button
            className="btn btn-black timer__btn text-white"
            onClick={countdown}
          >
            開始
          </button>
        </div>
        <div className="timer__info">
          <button
            className="btn btn-black timer__btn text-white"
            onClick={stopCountdown}
          >
            暫停
          </button>
        </div>
      </div>
      <div className="timer__view">
        <div className="timer__calc text-clam">
          {min}:{sec}
        </div>
      </div>
      <div
        className={`timer__load ${
          isCountdown.current ? 'timer__load-active' : ''
        }`}
      >
        倒數中，請稍後...
      </div>
    </div>
  );
};

export default Timer;
