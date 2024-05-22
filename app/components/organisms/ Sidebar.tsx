
import React from 'react';
import Link from 'next/link';
import { MdDashboard } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";


const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-screen bg-gradient-to-t from-[#F49E00] to-[#F7CE42] font-bold p-4  rounded-r-3xl">
            <h1 className='m-4 font-extrabold text-xl'>IMPÉRIO FITNESS</h1>
            <ul className='text-center'>
                <li className="m-4 items-center flex gap-2 ">
                    <MdDashboard />
                    <Link href="/">
                        <h2 className="hover:underline">Dashboard</h2>
                    </Link>
                </li>
                <li className="m-4 items-center flex gap-2 ">
                <IoStatsChart className='text-xl' />
                    <Link href="/about">
                        <h2 className="hover:underline">Clientes</h2>
                    </Link>
                </li>
                <li className="m-4 items-center flex gap-2 ">
                <TbReportSearch className='text-xl'/>
                    <Link href="/contact">
                        <h2 className="hover:underline">Relatorio</h2>
                    </Link>
                </li>
                <li className="m-4 items-center flex gap-2 ">
                <BsCoin className='text-xl' />
                    <Link href="/contact">
                        <h2 className="hover:underline">Financeiro</h2>
                    </Link>
                </li>

            </ul>
            <br />
            <ul>
            <li className="m-4 items-center flex gap-2 ">
                <IoMdHelpCircleOutline className='text-xl' />
                    <Link href="/contact">
                        <h2 className="hover:underline">Ajuda</h2>
                    </Link>
                </li>
                <li className="m-4 items-center flex gap-2 ">
                <GrConfigure  className='text-xl'/>
                    <Link href="/contact">
                        <h2 className="hover:underline">Configurações</h2>
                    </Link>
                </li>

            </ul>
        </div>

    );
};

export default Sidebar;
