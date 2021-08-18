import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home(props) {
  const history = useHistory();
  const historyPush = () => {
    history.push('/about');
  }
  return (
    <div>
      home
      <button onClick={historyPush}>跳转</button>
    </div>
  )
}
