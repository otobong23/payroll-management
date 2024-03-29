"use client";
import React from 'react'
import Image from 'next/image'
import user from '../img/user.jpg';
import Profile from './components/Profile';
import Project from './components/Project';
import Assets from './components/Assets';
import Bank from './components/Bank';
import { useState } from 'react';



function page() {
    const [ActiveTab, setActiveTab] = useState("Profile")

  return (
    <div className='p-4'>
        <header className='pb-7'>
            <p className='text-[1.2rem] text-[#bbc4cc]'>Profile</p>
        </header>

        <div className="profile-card bg-[#16191c] p-4 rounded-lg">
            <div className="profile text-center flex flex-col items-center pb-3 border-b-2 border-dashed">
                <div></div>
                <div>
                    <Image src={user} alt="alt" className='w-[120px] rounded-full'/>
                </div>
                <div>
                    <h1 className='text-[#bbc4cc] text-[1.1rem]'>John Doe</h1>
                    <p className='text-[#8e8c8a] text-[.8rem]'>UI/UX Design Team</p>
                    <p className='text-[#8e8c8a] text-[.8rem] py-3'>Web Designer</p>
                </div>
                <div className='pb-2'>
                    <h1 className='text-[#bbc4cc] text-[1.1rem]'>Employee ID : FT-0001</h1>
                    <p className='text-[#8e8c8a] text-[.8rem]'>Date of John : 1st Jan 2013</p>
                </div>
                
                <div className="button py-3">
                    <button className=' bg-gradient-color text-white p-2 px-4 rounded-md text-[1rem]'>Send Message</button>
                </div>
            </div>
            <div className="details py-4 flex flex-col gap-3">
                <div className="phone flex justify-start gap-8">
                    <h1 className='text-[#bbc4cc] flex-1'>Phone:</h1>
                    <p className='text-[#828c8a] flex-[2] text-[#1628C3]'>9876543210</p>
                </div>
                <div className="email flex justify-start gap-8">
                    <h1 className='text-[#bbc4cc] flex-1'>Email:</h1>
                    <p className='text-[#828c8a] flex-[2] text-[#1628C3]'>johndoe@example.com</p>
                </div>
                <div className="birthday flex justify-start gap-8">
                    <h1 className='text-[#bbc4cc] flex-1'>Birthday:</h1>
                    <p className='text-[#828c8a] flex-[2]'>24th July</p>
                </div>
                <div className="address flex justify-start gap-8">
                    <h1 className='text-[#bbc4cc] flex-1'>Address:</h1>
                    <div className='text-[#828c8a] text-left flex-[2]'>
                        <p>1861 Bayonne Ave,</p>
                        <p>Manchester Township, Nj,</p>
                        <p>08759</p>
                    </div>
                </div>
                <div className="gender flex justify-start gap-8">
                    <h1 className='text-[#bbc4cc] flex-1'>Gender:</h1>
                    <p className='text-[#828c8a] flex-[2]'>Male</p>
                </div>
                <div className="report flex justify-start gap-8">
                    <h1 className='text-[#bbc4cc] flex-1'>Reports to:</h1>
                    <div className='flex gap-2 items-center flex-[2]'>
                        <Image src={user} alt="alt" className='w-6 rounded-full'/>
                        <p className='text-[#828c8a] text-[#1628C3]'>Jeffery Lalor</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="navigation grid grid-cols-2 gap-x-2 bg-white py-2 pe-4 rounded">
            <div className='hover:border-b-2 transition-all border-[#ff9b44]' onClick={() => setActiveTab('Profile')}>
                <h1 className='ps-4'>Profile</h1>
            </div>
            <div className='hover:border-b-2 transition-all border-[#ff9b44]' onClick={() => setActiveTab('Projects')}>
                <h1 className='ps-4'>Projects</h1>
            </div>
            <div className='w-[100%] me-11 hover:border-b-2 transition-all border-[#ff9b44]' onClick={() => setActiveTab('Bank')}>
                <h1 className='ps-4'>Bank & Statutory <span className='text-[#f62d51] font-light'>(Admin Only)</span></h1>
            </div>
            <div className='hover:border-b-2 transition-all border-[#ff9b44]' onClick={() => setActiveTab('Assets')}>
                <h1 className='ps-4'>Assets</h1>
            </div>
        </div>
        {ActiveTab === 'Profile' && <Profile />}
        {ActiveTab === 'Projects' && <Project />}
        {ActiveTab === 'Assets'  && <Assets />}
        {ActiveTab === 'Bank' && <Bank />}
    </div>
  )
}

export default page