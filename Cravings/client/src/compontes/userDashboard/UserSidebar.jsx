import React from 'react'
import { RiBarChartBoxFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

const UserSidebar = ({active, setActive}) => {
  return (
    <div className = 'p-3'>
        <div className='text-xl font bold '>
            User Dashboard
        </div>
        <hr />

        <div className=''>
            <button className="flex- gap-3 item-center p-3 rounded-xl"><RiBarChartBoxFill/>Overview</button>
            <button><ImProfile/>Profile</button>
            <button>Orders</button>
            <button>Transaction</button>
            <button>Help Desk</button>
          
        </div>
    </div>
  )
}

export default Sidebar