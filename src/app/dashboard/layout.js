import React from 'react'

export const metadata = {
  title: "Dashboard | Next App",
  description: "Next App",
};

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div>Dashboard Layout SideBar</div>
      {children}
    </div>
  );
}

export default DashboardLayout