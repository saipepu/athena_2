import React from 'react'
import { useNavigate } from 'react-router-dom'
import GSheet from '../Gsheet/GSheet'

const Dashboard = () => {
  const navigation = useNavigate();
  const data = GSheet;
  console.log(data);
  return (
    <div>Dashboard
      <button onClick={() => navigation('/training')}>go to training</button>
    </div>
  )
}

export default Dashboard