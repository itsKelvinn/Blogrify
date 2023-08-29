"use client";
import User from "@/components/User";
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden md:flex h-28 w-full items-center justify-between">
                <div className="flex gap-4 items-center">
                    <p className="font-bold text-2xl text-blue-800">Blogrify</p>
                    <p className="font-normal text-md"> | </p>
                    <Link href={'/#'} className="text-sm">Home</Link>
                    <Link href={'/#'} className="text-sm">Categories</Link>
                    <Link href={'/#'} className="text-sm">Create</Link>
                </div>
                <div>
                    <User />
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden h-24 w-full items-center justify-between">
                <button className="flex flex-col gap-1 border p-2 rounded-lg" onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}>
                    <span className="w-5 h-0.5 bg-black border border-transparent rounded"></span>
                    <span className="w-4 h-0.5 bg-black border border-transparent rounded"></span>
                    <span className="w-5 h-0.5 bg-black border border-transparent rounded"></span>
                </button>

                <div className={`fixed ${mobileMenuOpen ? 'transition-all translate-x-0' : 'transition-all translate-x-[-100%]'} p-10 z-50 flex flex-col gap-4 items-start w-72 h-screen left-0 top-24 border bg-white`}>
                    <Link href={'/#'} className="text-xl">Home</Link>
                    <Link href={'/#'} className="text-xl">Categories</Link>
                    <Link href={'/#'} className="text-xl">Create</Link>
                </div>

                <div onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} className={`fixed transition-opacity ${mobileMenuOpen ? 'opacity-20' : 'opacity-0 transition-transform translate-x-[-100%] delay-150'} w-screen h-screen left-0 top-24 bg-black opacity-20`}></div>


                <p className="font-bold text-2xl text-blue-800">Blogrify</p>
                <div>
                    <User />
                </div>
            </div>
        </>
    );
}

export default Navbar;
