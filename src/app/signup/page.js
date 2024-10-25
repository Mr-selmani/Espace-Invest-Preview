'use client';
import React from 'react';
import { StepsCounterBar, FormStepsContainer, FormStepsWrapper } from '@/components/FormSteps'; 
import FormStep from '@/components/Step'; 
import FormNavigation from '@/components/formNavigation'; 
import DefaultLayout from '@/components/defaultLayout';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            if (response.ok) {
                document.cookie = `user=${data.email}`;
                console.log('Signup successful:', result);
                alert('Signup successful!');
                window.location.href = '/dashboard';
            } else {
                console.error('Signup failed:', result.message);
                alert(`Signup failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <DefaultLayout>
            <div className='min-h-screen mobile:h-fit w-full flex justify-center items-center'> 
                <div className='w-full flex flex-col gap-4 mobile:py-20'> 
                    <div className='max-w-xl mx-auto flex flex-col gap-4'> 
                        <h1 className="text-4xl font-bold text-center">Inscrivez-vous</h1>
                        <p className="text-sm text-center text-[#A8A7BB] w-10/12 mx-auto">
                            Upform is your go to tool to simplify your data collection boosting your productivity and perfecting your client management.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10 w-full'>
                        <FormStepsContainer>  
                            <StepsCounterBar /> 
                            <FormStepsWrapper>
                                {/* Step 1: Account Type */}
                                <FormStep stepOrder={1}>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className="text-lg font-normal text-left">Vous êtes ?</h3>
                                        <p className="text-sm text-left text-[#A8A7BB]">
                                            Lorem ipsum dolor sit amet, consectetur
                                        </p>
                                        <div className='flex gap-5 w-full mobile:flex-col'>
                                            {/* Client Radio Button */}
                                            <div className='w-full'>
                                                <input className='hidden peer' id='acc_type_client' type='radio' {...register("acc_type")} value="client" />
                                                <label className='w-full p-10 flex flex-col items-center justify-center gap-6 border border-[#EFF0F6] rounded-2xl cursor-pointer transition peer-checked:border-[#2597d3]' htmlFor='acc_type_client'>
                                                    <div className='rounded-full h-24 w-24 border border-[#2596d331] bg-[#2596d32a] flex items-center justify-center'>
                                                        <img height={50} width={50} src='/assets/icons/user.svg' />
                                                    </div>
                                                    <h3 className="text-lg font-normal text-left">Client</h3>
                                                </label>
                                            </div>
                                            {/* Partner Radio Button */}
                                            <div className='w-full'> 
                                                <input className='hidden peer' id='acc_type_partenaire' type='radio' {...register("acc_type")} value="partenaire" />
                                                <label className='w-full p-10 flex flex-col items-center justify-center gap-6 border border-[#EFF0F6] rounded-2xl cursor-pointer transition peer-checked:border-[#2597d3]' htmlFor='acc_type_partenaire'>
                                                    <div className='rounded-full h-24 w-24 border border-[#2596d331] bg-[#2596d32a] flex items-center justify-center'>
                                                        <img height={50} width={50} src='/assets/icons/suitcase.svg' />
                                                    </div>
                                                    <h3 className="text-lg font-normal text-left">Partenaire</h3>
                                                </label> 
                                            </div>
                                        </div>
                                    </div>
                                </FormStep>
                                {/* Step 2: Company Information */}
                                <FormStep stepOrder={2}>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className="text-lg font-normal text-left">Information société</h3>
                                        <p className="text-sm text-left text-[#A8A7BB]">
                                            Please fill your information so we can get in touch with you.
                                        </p>
                                        <div className='w-full mt-5 grid grid-cols-2 gap-7 mobile:grid-cols-1'> 
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='societe' className='text-sm text-[#170F49]'>Société</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='societe' type='text' {...register("societe")} placeholder='Company name' />
                                                    <img height={50} width={100} src='/assets/icons/dots.png' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='fonction' className='text-sm text-[#170F49]'>Fonction</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='fonction' type='text' {...register("fonction")} placeholder='Function' />
                                                    <img height={50} width={100} src='/assets/icons/dots.png' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='siren' className='text-sm text-[#170F49]'>Siren</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='siren' type='text' {...register("siren")} placeholder='SIREN number' />
                                                    <img height={50} width={100} src='/assets/icons/dots.png' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='adress_societe' className='text-sm text-[#170F49]'>Adresse société</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='adress_societe' type='text' {...register("adress_societe")} placeholder='Company address' />
                                                    <img height={50} width={100} src='/assets/icons/pin-map.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </FormStep>
                                {/* Step 3: Contact Details */}
                                <FormStep stepOrder={3}>
                                    <div className='flex flex-col gap-4'>
                                        <h3 className="text-lg font-normal text-left">Contact details</h3>
                                        <p className="text-sm text-left text-[#A8A7BB]">
                                            Please fill your information so we can get in touch with you.
                                        </p>
                                        <div className='w-full mt-5 grid grid-cols-3 gap-7 mobile:grid-cols-1'>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='prenom' className='text-sm text-[#170F49]'>Prénom</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='prenom' type='text' placeholder='First Name' {...register("prenom")} />
                                                    <img height={50} width={100} src='/assets/icons/user-blank.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='age' className='text-sm text-[#170F49]'>Age</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='age' type='number' placeholder='Age' {...register("age")} />
                                                    <img height={50} width={100} src='/assets/icons/user-blank.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='ville' className='text-sm text-[#170F49]'>Ville</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='ville' type='text' placeholder='City' {...register("ville")} />
                                                    <img height={50} width={100} src='/assets/icons/pin-map.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='nom' className='text-sm text-[#170F49]'>Nom</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='nom' type='text' placeholder='Last Name' {...register("nom")} />
                                                    <img height={50} width={100} src='/assets/icons/user-blank.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='sexe' className='text-sm text-[#170F49]'>Sexe</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='sexe' type='text' placeholder='Gender' {...register("sexe")} />
                                                    <img height={50} width={100} src='/assets/icons/gender.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='adresse_postale' className='text-sm text-[#170F49]'>Adresse postale</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='adresse_postale' type='text' placeholder='Postal Address' {...register("adresse_postale")} />
                                                    <img height={50} width={100} src='/assets/icons/mobile.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='email' className='text-sm text-[#170F49]'>Email</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='email' type='text' placeholder='Email' {...register("email")} />
                                                    {/* <img height={50} width={100} src='/assets/icons/mobile.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' /> */}
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2 relative'>
                                                <label htmlFor='password' className='text-sm text-[#170F49]'>Password</label>
                                                <div className='relative'>
                                                    <input className='border border-[#EFF0F6] rounded-lg p-4 w-full shadow-input' id='password' type='text' placeholder='password' {...register("password")} />
                                                    {/* <img height={50} width={100} src='/assets/icons/mobile.svg' className='absolute top-1/2 -translate-y-1/2 right-4 w-3 object-contain' /> */}
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </FormStep>
                            </FormStepsWrapper>  
                            {/* Navigation */}
                            <FormNavigation />
                        </FormStepsContainer>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default SignUp;
