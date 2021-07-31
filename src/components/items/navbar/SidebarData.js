import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as GrIcons from "react-icons/gr";
// import * as BiIcons from "react-icons/bi";
// import * as MdIcons from "react-icons/md";


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        clsName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        clsName: 'nav-text'
    },
    {
        title: 'Links',
        clsName: 'nav-text'
    },
    {
        title: 'Daily',
        path: '/daily',
        icon: <FaIcons.FaCalendarDay />,
        clsName: 'nav-text'
    },
    {
        title: 'Monthly',
        path: '/monthly',
        icon: <FaIcons.FaCalendarAlt />,
        clsName: 'nav-text'
    },
    {
        title: 'Yearly',
        path: '/yearly',
        icon: <FaIcons.FaCalendarCheck />,
        clsName: 'nav-text'
    },
    // {
    //     title: 'Managements',
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Finance',
    //     path: '/finance',
    //     icon: <GrIcons.GrMoney />,
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Food & Beverage',
    //     path: '/home',
    //     icon: <BiIcons.BiDish />,
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Employee',
    //     path: '/employee',
    //     icon: <FaIcons.FaPeopleCarry />,
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Sales & Marketing',
    //     path: '/sales',
    //     icon: <FaIcons.FaSalesforce />,
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Rooms',
    //     path: '/room',
    //     icon: <MdIcons.MdHotel />,
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Stock',
    //     path: '/stock',
    //     icon: <AiIcons.AiOutlineStock />,
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Vehicle',
    //     path: '/vehicle',
    //     icon: <AiIcons.AiFillCar />,
    //     clsName: 'nav-text'
    // },
    // {
    //     title: 'Delivery',
    //     path: '/delivery',
    //     icon: <FaIcons.FaMotorcycle />,
    //     clsName: 'nav-text'
    // },
]

