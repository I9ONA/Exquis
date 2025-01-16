import React from 'react';
import * as CiIcons from "react-icons/ci";
import * as TbIcons from 'react-icons/tb';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as GrIcons from 'react-icons/gr';  
export const SidebarData = [
  {
    title: 'Brands',
    path: 'brands',
    icon: <TbIcons.TbBrandSketch/>,
    cName: 'nav-text'
  },
  {
    title: 'seasons',
    path: 'season',
    icon: <CiIcons.CiShop />,
    cName: 'nav-text'
  },
  {
    title: 'Men\'s Perfumes',
    path: 'Menparfum',
    icon: <IoIcons.IoMdMan />,
    cName: 'nav-text'
  },
  {
    title: 'Women\'s Perfumes',
    path: 'womenparfum',
    icon: <IoIcons.IoMdWoman />,
    cName: 'nav-text'
  },
  {
    title: 'Unisex Perfumes',
    path: 'unisex',
    icon: <GiIcons.GiPerfumeBottle />,
    cName: 'nav-text'
  },
  {
    title: 'Bestsellers',
    path: 'bestsellers',
    icon: <FaIcons.FaStar />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: 'about',
    icon: <FcIcons.FcAbout />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: 'contact',
    icon: <GrIcons.GrContact />,
    cName: 'nav-text'
  },
];
export default SidebarData;