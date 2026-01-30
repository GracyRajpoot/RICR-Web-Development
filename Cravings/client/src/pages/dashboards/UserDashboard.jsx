import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

import UserSideBar from "../../compontes/userDashboard/UserSideBar";
import UserOverview from "../../compontes/userDashboard/UserOverview";

import UserProfile from "../../compontes/userDashboard/UserProfile";
import UserOrders from "../../compontes/userDashboard/UserOrders";
import UserTransactions from "../../compontes/userDashboard/userTransactions";
import UserHelpDesk from "../../compontes/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div
          className={`bg-(--color-background) duration-300 ${isCollapsed ? "w-2/60" : "w-12/60"}`}
        >
          <UserSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={`${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransactions />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;