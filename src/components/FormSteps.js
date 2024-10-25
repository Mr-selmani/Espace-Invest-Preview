'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import ProgressLine from '@/components/progress';
import { Children } from 'react';
const FormStepsContext = createContext();
export const useFormStepsContext = () => useContext(FormStepsContext);


export const FormStepsContainer = ({ children, collapseFirst=true, title, description }) => {
    const [stepNumber, setStepNumber] = useState(1);
    const [totalSteps, setTotalSteps] = useState(0);

    return (
        <FormStepsContext.Provider value={{ stepNumber, setStepNumber, setTotalSteps, totalSteps }}> 
            <div 
                className={`
                    flex flex-col gap-10 border mt-5 border-[#EFF0F6] bg-white shadow-panel p-10 rounded-2xl w-full transition-all mobile:py-10 mobile:w-11/12 mobile:p-5
                    ${stepNumber == 1 && collapseFirst ? 'max-w-xl' : 'max-w-4xl px-20'} mx-auto
                `}
            > 
                {title && description && (
                    <div className="flex flex-col gap-5 pb-5 border-b">
                        <h2 className="font-bold text-center text-3xl">{title}</h2>
                        <p className="text-base text-[#6F6C90] text-center">{description}</p>
                    </div>
                )}
                {children}
            </div>
        </FormStepsContext.Provider>
    );
};
export const FormStepsWrapper = ({ children }) => {
    const { setTotalSteps } = useFormStepsContext();
    const stepsCount = Children.count(children);

    useEffect(() => {
        setTotalSteps(stepsCount);
    }, [stepsCount]);
    return children;
}

export const StepsCounterBar = () => {
    const { stepNumber, totalSteps } = useFormStepsContext();

    return (
        <div className='flex items-center gap-3 pb-8 border-b max-w-xl mx-auto border-[#D9DBE9]'>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`aspect-square w-7 h-7 text-sm flex items-center justify-center rounded-full font-normal ${stepNumber > index ? 'bg-[#2597d3] transition text-white' : 'bg-[#EFF0F6] text-[#6F6C90]'}`}
                    >
                        {index + 1}
                    </div>
                    {index < totalSteps - 1 && (
                        <ProgressLine status={stepNumber > index + 1 ? 'completed' : stepNumber === index + 1 ? 'active' : 'inactive'} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export const useStepNumber = () => {
    const { stepNumber } = useFormStepsContext();
    return stepNumber;
};
export const NextStep = ({ className, submitText, nextText }) => {
    const { stepNumber, setStepNumber, totalSteps } = useFormStepsContext();
    const nextStepText = nextText ? nextText : 'Étape suivante';

    if (stepNumber === totalSteps) {
        return (
            <button className={className} type='submit'>
                {submitText ? submitText : 'Inscrivez'}
            </button>
        );
    }

    return (
        <div
            className={className}
            onClick={()=> { setStepNumber((prev) => prev + 1) }}
        >
            {stepNumber === 1 ? 'Valider' : nextStepText}
        </div>
    );
};
export const PrevStep = ({ className, prevText }) => {
    const { stepNumber, setStepNumber } = useFormStepsContext();

    if (stepNumber === 1) {
        return null;
    }
    return (
        <div
            className={className}
            onClick={() => {
                if (stepNumber > 1) {
                    setStepNumber((prev) => prev - 1);
                }
            }}
        >
            {prevText ? prevText : 'Étape précédente'}
        </div>
    );
};