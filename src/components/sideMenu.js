'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

/**
 * Icons
 */
import { GoHomeFill } from "react-icons/go";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

/**
 * Side Menu
 */
const side_menu_links = [
    { id: 0, name: 'Dashboard', url: '/dashboard', icon: GoHomeFill },
    { id: 1, name: 'Mon agence', url: '/dashboard/mon-agence', icon: FaMoneyBillTransfer },
    { id: 2, name: 'Mes clients', url: '/dashboard/mes-clients', icon: FaUser },
    { id: 3, name: 'Projet ajouté', url: '/dashboard/projet-ajoute', icon: FaHandHoldingDollar },
    { id: 4, name: 'Paramètres', url: '/dashboard/parametres', icon: IoSettings },
]
const SideMenu = ({ children }) => {
    const currentPath = usePathname();
    
    return (
      <div className="flex flex-col gap-4">
          {side_menu_links.map((link) => (
            <Link href={link.url} className={`flex group items-center gap-4 py-2 px-7 hover:text-primary/80 transition-all relative ${currentPath === link.url ? "text-primary" : "text-[#B1B1B1]"}`} key={link.id}>
                <div className={`absolute right-full translate-x-1/2 transition-all w-2 h-full bg-primary group-hover:opacity-25 rounded-full ${currentPath === link.url ? 'opacity-100' : 'opacity-0'}`} />
                <link.icon size={25} className="text-inherit" />
                <span className="text-base font-semibold">{link.name}</span>
            </Link>
          ))}
      </div>
    )
}

export default SideMenu