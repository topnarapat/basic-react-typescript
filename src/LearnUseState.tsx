import { useState } from 'react'

interface User {
  username?: string;
  password?: string;
}

const countInitial = () => {
  console.log('Count Initial');
  return 0;
}

type Props = {}

export default function LearnUseState({}: Props) {
  const [count, setCount] = useState<number>(countInitial);
  const [user, setUser] = useState<User | null>(null);

  const decrementCount = () => {
    setCount(prev => prev - 1);
    setUser(prev => {
      return { ...prev, password: 'tangfa'}
    });
  }

  const incrementCount = () => {
    setCount(prev => prev + 1);
    setUser(prev => {
      return { ...prev, username: 'top'}
    });
  }

  return (
    <>
      <h1>UseState</h1>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>
      <p>username: {user?.username}</p>
      <p>password: {user?.password}</p>
    </>
  )
}