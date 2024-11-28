// "use client"
// import { BiSolidBox } from 'react-icons/bi'
// import { PiHamburgerLight } from 'react-icons/pi'
// import { AiOutlineArrowDown } from 'react-icons/ai'
// import Link from 'next/link'
// import { useState } from 'react'
// import Drawer from './Drawer'

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false)
//     function toggle() {
//         setIsOpen((isOpen) => !isOpen)
//     }
//     return <nav className='flex justify-between md:justify-around p-5'>
//         <div>
//             <BiSolidBox size={25} href={"/"} className="cursor-pointer" />
//         </div>
//         <PiHamburgerLight size={25} onClick={toggle} className='cursor-pointer md:hidden flex' />
//         {
//             isOpen && (<Drawer isOpen={isOpen} onClose={toggle}>
//                 <div className='flex flex-col gap-4 p-2'>
//                     <Link href="/sign-in" className='cursor-pointer'>Sign In</Link>
//                     <Link href="/sign-up" className='flex gap-x-1 outline outline-offset-2 outline-1 cursor-pointer'><div>Sign Up</div><span className='animate-bounce'><AiOutlineArrowDown size={25} /></span></Link>
//                     <Link href={'/'}>Home</Link>
//                     <Link href={'/game'}>Game</Link>
//                     <Link href={'/rules'}>How to play</Link>
//                     <Link href={'/highest-score'}>Top Scorer</Link>
//                 </div>
//             </Drawer>
//             )
//         }
//         <div className='gap-x-8 hidden md:flex'>
//             <Link href={'/'}>Home</Link>
//             <Link href={'/game'}>Game</Link>
//             <Link href={'/rules'}>How to play</Link>
//             <Link href={'/highest-score'}>Top Scorer</Link>
//         </div>
//         <div className='gap-x-4 hidden md:flex'>
//             <Link href="/sign-in" className='cursor-pointer'>Sign In</Link>
//             <Link href="/sign-up" className='flex items-center px-1 py-0 rounded gap-x-1 outline outline-offset-2 outline-1 cursor-pointer'><div>Sign Up</div><span className='animate-bounce'><AiOutlineArrowDown size={16} /></span></Link>
//         </div>
//     </nav>
// }

// export default NavBar

// "use client";
// import { BiSolidBox } from 'react-icons/bi';
// import { PiHamburgerLight } from 'react-icons/pi';
// import { AiOutlineArrowDown } from 'react-icons/ai';
// import Link from 'next/link';
// import { useState } from 'react';
// import Drawer from './Drawer';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     function toggle() {
//         setIsOpen((isOpen) => !isOpen);
//     }

//     return (
//         <nav className="flex justify-between md:justify-around p-5 bg-gray-100">
//             <div>
//                 <BiSolidBox
//                     size={25}
//                     className="cursor-pointer text-orange-500"
//                     href={"/"}
//                 />
//             </div>
//             <PiHamburgerLight
//                 size={25}
//                 onClick={toggle}
//                 className="cursor-pointer text-orange-500 md:hidden flex"
//             />
//             {isOpen && (
//                 <Drawer isOpen={isOpen} onClose={toggle}>
//                     <div className="flex flex-col gap-4 p-2">
//                         <Link href="/sign-in" className="cursor-pointer text-orange-500 hover:text-orange-700">
//                             Sign In
//                         </Link>
//                         <Link
//                             href="/sign-up"
//                             className="flex gap-x-1 outline-orange-500 outline outline-offset-2 outline-1 cursor-pointer text-orange-500 hover:text-orange-700"
//                         >
//                             <div>Sign Up</div>
//                             <span className="animate-bounce text-orange-500">
//                                 <AiOutlineArrowDown size={25} />
//                             </span>
//                         </Link>
//                         <Link href={'/'} className="text-orange-500 hover:text-orange-700 font-bold">
//                             Home
//                         </Link>
//                         <Link href={'/game'} className="text-orange-500 hover:text-orange-700 font-bold">
//                             Game
//                         </Link>
//                         <Link href={'/rules'} className="text-orange-500 hover:text-orange-700 font-bold">
//                             How to play
//                         </Link>
//                         <Link href={'/highest-score'} className="text-orange-500 hover:text-orange-700 font-bold">
//                             Top Scorer
//                         </Link>
//                     </div>
//                 </Drawer>
//             )}
//             <div className="gap-x-8 hidden md:flex">
//                 <Link href={'/'} className="text-orange-500 hover:text-orange-700 font-bold">
//                     Home
//                 </Link>
//                 <Link href={'/game'} className="text-orange-500 hover:text-orange-700 font-bold">
//                     Game
//                 </Link>
//                 <Link href={'/rules'} className="text-orange-500 hover:text-orange-700 font-bold">
//                     How to play
//                 </Link>
//                 <Link href={'/highest-score'} className="text-orange-500 hover:text-orange-700 font-bold">
//                     Top Scorer
//                 </Link>
//             </div>
//             <div className="gap-x-4 hidden md:flex">
//                 <Link href="/sign-in" className="cursor-pointer text-orange-500 hover:text-orange-700 font-bold">
//                     Sign In
//                 </Link>
//                 <Link
//                     href="/sign-up"
//                     className="flex items-center px-1 py-0 rounded gap-x-1 outline-orange-500 outline outline-offset-2 outline-1 cursor-pointer text-orange-500 hover:text-orange-700 font-bold"
//                 >
//                     <div>Sign Up</div>
//                     <span className="animate-bounce text-orange-500">
//                         <AiOutlineArrowDown size={16} />
//                     </span>
//                 </Link>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;

"use client";
import { BiSolidBox } from 'react-icons/bi';
import { PiHamburgerLight } from 'react-icons/pi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import Drawer from './Drawer';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <nav className="flex justify-between md:justify-around p-5 bg-orange-500">
            <div>
                <BiSolidBox
                    size={25}
                    className="cursor-pointer text-white"
                    href={"/"}
                />
            </div>
            <PiHamburgerLight
                size={25}
                onClick={toggle}
                className="cursor-pointer text-white md:hidden flex"
            />
            {isOpen && (
                <Drawer isOpen={isOpen} onClose={toggle}>
                    <div className="flex flex-col gap-4 p-2">
                        <Link href="/sign-in" className="cursor-pointer text-white font-bold hover:text-gray-200">
                            Sign In
                        </Link>
                        <Link
                            href="/sign-up"
                            className="flex gap-x-1 outline-white outline outline-offset-2 outline-1 cursor-pointer text-white font-bold hover:text-gray-200"
                        >
                            <div>Sign Up</div>
                            <span className="animate-bounce text-white">
                                <AiOutlineArrowDown size={25} />
                            </span>
                        </Link>
                        <Link href={'/'} className="text-white font-bold hover:text-gray-200">
                            Home
                        </Link>
                        <Link href={'/game'} className="text-white font-bold hover:text-gray-200">
                            Game
                        </Link>
                        <Link href={'/rules'} className="text-white font-bold hover:text-gray-200">
                            How to play
                        </Link>
                        <Link href={'/highest-score'} className="text-white font-bold hover:text-gray-200">
                            Top Scorer
                        </Link>
                    </div>
                </Drawer>
            )}
            <div className="gap-x-8 hidden md:flex">
                <Link href={'/'} className="text-black font-bold hover:text-gray-200">
                    Home
                </Link>
                <Link href={'/game'} className="text-black font-bold hover:text-gray-200">
                    Game
                </Link>
                <Link href={'/rules'} className="text-black font-bold hover:text-gray-200">
                    How to play
                </Link>
                <Link href={'/highest-score'} className="text-black font-bold hover:text-gray-200">
                    Top Scorer
                </Link>
            </div>
            <div className="gap-x-4 hidden md:flex">
                <Link href="/sign-in" className="cursor-pointer text-black font-bold hover:text-gray-200">
                    Sign In
                </Link>
                <Link
                    href="/sign-up"
                    className="flex items-center px-1 py-0 rounded gap-x-1 outline-white outline outline-offset-2 outline-1 cursor-pointer text-black font-bold hover:text-gray-200"
                >
                    <div>Sign Up</div>
                    <span className="animate-bounce text-black">
                        <AiOutlineArrowDown size={16} />
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

