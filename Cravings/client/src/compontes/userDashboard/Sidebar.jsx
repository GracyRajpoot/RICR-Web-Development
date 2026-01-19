import React from 'react'
import { RiBarChartBoxFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className = 'p-3'>
        <div className='text-xl font bold '>
            User Dashboard
        </div>
        <hr />

        <div className=''>
            <span><RiBarChartBoxFill/>Overview</span>
            <span><ImProfile/>Profile</span>
            <span>Orders</span>
            <span>Transaction</span>
            <span>Help Desk</span>
          
        </div>
    </div>
  )
}

export default Sidebar