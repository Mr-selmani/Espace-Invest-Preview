import React from 'react';

const ProgressLine = ({ status }) => {
  const getWidth = () => {
    switch (status) {
      case 'completed':
        return 'w-full';
      case 'active':
        return 'w-1/2';
      default:
        return 'w-0';
    }
  };

  return (
    <div className='w-20 h-2 bg-[#EFF0F6] rounded-full overflow-hidden'>
      <div className={`h-full bg-[#2597d3] transition-all ${getWidth()}`}></div>
    </div>
  );
};

export default ProgressLine;
