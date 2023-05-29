'use client';
import { useState } from 'react';

import logo from '@public/icons/logo.svg';
import close from '@public/icons/close.svg';
import menu from '@public/icons/menu.svg';
import { navLinks } from '@constants/index';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchNavbar from './SearchNavbar';
const Navbar = () => {
  const pathName = usePathname();

  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={'w-full flex p-6 justify-between items-center '}>
      <Link href='/'>
        <Image
          src={logo}
          alt='SoloCountries'
          className={`${
            toggle ? 'hidden' : 'logoCase shrinkerLogo shrinkerSmall'
          }`}
        />
      </Link>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {pathName !== '/' && <SearchNavbar />}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-poppins font-normal cursor-pointer text-[16px] shrinker ${
              index === navLinks.length - 3
                ? 'font-poppins font-normal cursor-pointer py-[20px] text-[16px] pr-[30px] border-r-2 border-grey shrinkerFix'
                : 'font-poppins font-normal cursor-pointer text-[16px]'
            } ${
              index === navLinks.length - 1
                ? 'text-white px-10 mr-0 border-8 border-[#2B9355] bg-[#2B9355] rounded-[20px] padding'
                : 'mr-10'
            }`}
            onClick={() => setActive(nav.title)}
          >
            <Link href={`${nav.link}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-white absolute top-10 right-0 mx-0 my-2 min-w-[100%] sidebar`}
        >
          <ul className='list-none flex justify-center items-center flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[19px] ${
                  index === navLinks.length - 1
                    ? 'text-white px-[30%] mr-0 border-8 border-[#2B9355] bg-[#2B9355] rounded-[20px] padding'
                    : 'mb-10'
                }`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`${nav.link}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
