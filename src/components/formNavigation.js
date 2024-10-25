import React from 'react';
import { NextStep, PrevStep } from '@/components/FormSteps'; 

const FormNavigation = ({nextText, prevText, submitText}) => {
  return (
    <div className='flex items-center justify-center w-full gap-6 mobile:flex-col'>
        <PrevStep 
          className='bg-[#fff] transition text-[#2597D3] border border-[#2597D3] hover:bg-[#eff0f6] hover:text-[#2c2a26] py-4 px-10 rounded-lg text-center cursor-pointer hover:border-[#eff0f6] mobile:w-full' 
          prevText={prevText}
        />
        <NextStep 
          className='bg-[#2597D3] text-white py-4 px-10 rounded-lg text-center cursor-pointer transition-all hover:pl-12 mobile:w-full' 
          nextText={nextText} 
          submitText={submitText}
        />
    </div>
  )
}

export default FormNavigation;