import { useState, useEffect } from 'react';
import useInterval from '../../hooks/useSetIntervel';

function Home() {
  const [count, setCount] = useState(0);
  // useInterval(() => {
  //   if (count < 10) {
  //     setCount(count+1)
  //   }
  // }, 1000)

  return <div>首页{count}</div>;
}

export default Home;
