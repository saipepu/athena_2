import React from 'react'
import { useNavigate } from 'react-router-dom'

const Training = () => {
  const navigation = useNavigate();

  return (
    <div>Training
      <button onClick={() => navigation('/')}>Go To Dashboard</button>
    </div>
  )
}

export default Training