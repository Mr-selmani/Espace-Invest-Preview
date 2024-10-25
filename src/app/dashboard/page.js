import React from 'react';
import DashboardLayout from '@/components/layout/dashboardPage';
import Link from 'next/link';

/**
 * Icons
 */
import { FaFile } from "react-icons/fa";
import { PiBuildingsBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { PiPaypalLogo } from "react-icons/pi";
import ChronoContainer from '@/components/chronoContainer';
import ChronoContainer2 from '@/components/chronoContainer2';

/**
 * Dashboard Card
 */
const DashboardCard = ({ title, icon, className, link }) => {
  return (
    <Link className={"bg-white rounded-2xl p-5 w-full flex flex-col items-center gap-3 shadow-lg shadow-muted cursor-pointer border border-transparent transition-all hover:border-primary/50 " + className} href={link ? link : '#'}>
      <div className="w-1/2 rounded-full aspect-square flex items-center justify-center bg-[#2597D35C]/10 border border-primary/20">
        {icon}
      </div>
      <span className="text-[#170F49] font-semibold text-center w-full">{title}</span>
    </Link>
  )
}
/**
 * Transaction Card
 */
const TransactionCard = (props) => {
  return (
    <div className={"flex justify-between w-full items-center gap-5 flex-auto " + props.className}>
      {/* { name, date, className, iconColor },  */}
      <div className={`aspect-square w-16 rounded-full flex items-center justify-center relative`}>
        <div className={`absolute left-0 top-0 h-full w-full opacity-20 rounded-full`} style={{ background: props.iconColor }} />
        <props.icon size={30} color={props.iconColor} />
      </div>
      <div className="flex flex-col gap-1 mr-auto">
        <h3 className="text-[#232323] font-semibold">{props.name}</h3>
        <p className="text-sm text-[#718EBF]">{props.date}</p>
      </div>
      <span className="text-[#41D4A8] font-bold text-base">{props.price}</span>
    </div>
  )
}

const Dashboard = () => {
  return (
    <DashboardLayout title="Résumé du mois">
      <div className="flex space-x-10">
        <div className="w-2/3 flex flex-col gap-5">
          <div className="flex justify-between">
            <h2 className="text-[#343C6A] text-xl font-semibold">Mes fonctionnalités phares</h2>
            <span className="font-semibold">Voir plus</span>
          </div>
          <div className="flex gap-5">
            <DashboardCard
              title="Ajouter un projet immobilier"
              icon={<FaFile size={30} className="text-primary" />}
              className="!border-primary"
              link="/dashboard/add-project"
            />
            <DashboardCard
              title="Ajouter une agence immobillière Partenaire"
              icon={<PiBuildingsBold size={30} className="text-primary" />} 
            />
            <DashboardCard
              title="Rajouter votre raccourci"
              icon={<FaPlus size={30} className="text-primary" />}
            />
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-5">
          <h2 className="text-[#343C6A] text-xl font-semibold">Vos dernières transactions</h2>
          <div className="bg-white rounded-2xl p-5 w-full flex flex-col h-full items-center gap-3 shadow-lg shadow-muted">
            <TransactionCard
              name="John paul"
              date="25 aout 2024"
              icon={PiPaypalLogo}
              price="+€2,500"
              iconColor="#396AFF"
            /> 
            <TransactionCard
              name="Jemi Wilson"
              date="21 aout 2024"
              icon={PiPaypalLogo}
              price="+€5,400"
              iconColor="#16DBCC"
            /> 
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-[#343C6A] text-xl font-semibold">Votre projet actuelle</h2>
        <div className="bg-white rounded-2xl p-5 w-full flex flex-col h-full items-center gap-3 shadow-lg shadow-muted">
          <ChronoContainer className="w-full" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-[#343C6A] text-xl font-semibold">Votre projet actuelle</h2>
        <div className="bg-white rounded-2xl p-5 w-full flex flex-col h-full items-center gap-3 shadow-lg shadow-muted">
          <ChronoContainer2 className="w-full" />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard