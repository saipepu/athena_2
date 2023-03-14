import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigation = useNavigate();
  return (
    <div>Dashboard
      <button onClick={() => navigation('/training')}>go to training</button>
    </div>
  )
}

export default Dashboard