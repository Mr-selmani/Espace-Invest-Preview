'use client';
import { useStepNumber } from '@/components/FormSteps';

const FormStep = ({ stepOrder, children }) => {
  const stepNumber = useStepNumber();

  return stepNumber === stepOrder ? children : null;
};

export default FormStep;