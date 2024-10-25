import React from 'react';
import SideMenu from '@/components/sideMenu';
import DashboardHeader from '@/components/layout/dashboardHeader';

/**
 * Just to make it easier to change the sidebar size
 */
const side_bar_size = "250px";

const DashboardLayout = ({ children, title='Page Title' }) => {
  return (
    <div className="flex">
        <div className="flex flex-col gap-5 border h-screen mobile:hidden" style={{ width: side_bar_size }}>
            <img 
                src='/assets/images/logo.png' 
                width={80} height={80} 
                className='mobile:h-10 mobile:w-10 object-contain mx-auto my-5' 
            />
            {/* Menu with icons */}
            <SideMenu />
        </div>
        <div style={{ width: `calc(100% - ${side_bar_size})` }} className="h-screen overflow-scroll flex flex-col justify-stretch mobile:min-w-full">
            <DashboardHeader title={title} />
            <div className="p-10 bg-[#f5f7fa] flex-auto flex flex-col gap-10 mobile:p-5">
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout