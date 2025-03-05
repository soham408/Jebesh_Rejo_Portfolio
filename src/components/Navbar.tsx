// 'use client';

// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/utils/cn";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from "./ui/Logo";

// function Navbar({ className }: { className?: string }) {
//     const [active, setActive] = useState<string | null>(null);
//   return (
//     <div  className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}>
// {/* fixed top-5 flex items-center justify-between p-4  z-50 */}
// {/* fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 */}
// {/* text-black dark:text-white */}


// <Logo />

       

//         <Menu setActive={setActive}>

        
        
//                 <Link href={"/"}>
//                     <MenuItem setActive={setActive} active={'#'} item="Home">
//                     </MenuItem>
//                 </Link>

//                 {/* <Link href="/aboutus">
//                     <MenuItem setActive={setActive} active={'#'} item="About Us">
//                     </MenuItem>
//                 </Link> */}

//                 <Link href="/portfolio">
//                     <MenuItem setActive={setActive} active={'#'} item="Portfolio">
//                     </MenuItem>
//                 </Link>

//                 <Link href={"/blogs"}>
//                     <MenuItem setActive={setActive} active={'#'} item="Blogs">
//                     </MenuItem>
//                 </Link>

//                 <Link href={"/contact"}>
//                     <MenuItem setActive={setActive} active={'#'} item="Contact">
//                     </MenuItem>
//                 </Link>
//                 </Menu>
//             </div>
            
        
//   );
// }

// export default Navbar;


'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        return (
            <nav className="bg-yellow-500 w-full  border-gray-200 dark:bg-yellow-700 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/LogoYT1.png" className="h-[70px]" alt="" />
                
                </Link>
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-expanded={isMenuOpen}
                >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-yellow-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-yellow-500 dark:bg-yellow-800 md:dark:bg-yellow-700 dark:border-gray-700">
                    <li>
                    <Link href="/" className="">
                        Home
                    </Link>
                    </li>

                    <li>
                        <Link href="/portfolio" className="">
                        Portfolio
                        </Link>
                    </li>
                    
                    <li>
                    <Link href="/blogs" className="">
                        Blogs
                    </Link>
                    </li>
                    <li>
                    <Link href="/contact" className="">
                        Contact
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
        }
