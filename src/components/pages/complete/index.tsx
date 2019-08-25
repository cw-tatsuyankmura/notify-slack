import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Typography from '@material-ui/core/Typography';

export const Complete: FC = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timerId = setTimeout(() => dispatch(push('/')), 6000);
    return () => clearTimeout(timerId);
  }, [dispatch]);

  useEffect(() => {
    const timerId = setTimeout(() => count > 0 && setCount(count - 1), 1000);
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <>
      <Typography variant="h6" gutterBottom align="center">
        担当者を呼び出しました。その場で少々お待ちください。
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        {`${count}秒後にトップに戻ります。`}
      </Typography>
    </>
  );
};
