import React from 'react'
import UserDashboard from "../..compontes/userDashboard/Sidebar";
import { useState } from 'react';

const UserDashboard = () => {
  const [active,setActive] = useState("overview");
  return (
    <>
    <div className="w-full h-[90vh] flex">
      <div className="bg-(--color-background) w-2/10">
      <UserSideBar active = {active} setActive={setActive}/>
    <div className="border border-green-500 w-3/14"><Sidebar/></div>
    <div className="border border-red-500 w-3/14">content</div>
    {active === "overview" && <UserOverview/>}
     {active === "profile" && <UserProfile/>}
     {active === "orders" && <Userorders/>}
     {active ==="transaction" && <UserTransaction/>}
     {active === "helpdesk" && <UserHelpDesk/>}
    
   </div>
   </div>
    </>
  )
}

export default UserDashboard;