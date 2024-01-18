import { styles } from '../styles';
import React, { useState } from 'react';
//import './tabs.css';

import video from '../assets/video.mp4';


const Hero = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);

  
  return (
    <>
    <section className='w-full h-[680px]  relative  justify-center items-center mx-auto'>
      
       <video className=" w-full h-[680px]  object-cover" src={video} autoPlay loop muted />
       <div className='absolute w-full h-[680px]  top-0 left-0 bg-gray-900/40'></div>
      <div className={`${styles.paddingX} absolute inset-0 justify-center items-center  text-center flex flex-col  text-white`}>
       
       
       
       
       
       
       
       
       
       <div className="flex flex-col  hidden md:block max-w-screen-xl container rounded block items-stretch md:flex-row  bg-[#f3f3f3] mt-[150px] mx-auto">
        <div className="w-full">
          <ul
            className="flex mb-0 ml-2 mr-2 list-none flex-wrap pt-1 pb-2 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-ubuntu uppercase px-5 py-3  shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-[#006642] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#006642] ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                FIND DOCTORS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-ubuntu uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-[#006642] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#006642]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 APPOINTMENT
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-ubuntu uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-[#006642] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#006642]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 TEST PRICES
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0   w-full mb-1 shadow-lg rounded">
            <div className="px-2 py-2 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <form className="max-w-screen-xl p-[25px] mx-auto">
  <div className="grid md:grid-cols-5  md:gap-1">
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block pl-2 py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent pl-2 border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option  selected>Choose a Branch</option>
  <option  value="US">Dhanmondi</option>
  <option value="CA">Shymoli</option>
  <option value="FR">Shantinagar</option>
  <option value="DE">Uttara</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent pl-2 border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option selected>Choose a Specilization</option>
  <option value="US">Chest Medicine</option>
  <option value="CA">Neuro Medicine</option>
  <option value="FR">Sonologist</option>
  <option value="DE">Cardiology</option>
</select></div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#00a884]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a Day</option>
  <option value="US">Sunday</option>
  <option value="CA">Monday</option>
  <option value="FR">Tuesday</option>
  <option value="DE">Wednesday</option>
</select></div>
    
<button type="button" className="text-[#ffffff] rounded block h-[43px] hover:text-white border bg-[#006642] border-[#125133] hover:bg-[#125133] focus:ring-4 focus:outline-none focus:ring-[#00a884] font-ubuntu  text-sm px-5 py-2.5 text-center  mb-0 dark:border-[#00a884] dark:text-[#00a884] dark:hover:text-white dark:hover:bg-[#00a884] dark:focus:ring-[#00a884]">DOCTORS</button>
    
    </div>
 
  
</form>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <form className="max-w-screen-xl  mx-auto">
  <div className="grid md:grid-cols-5  md:gap-1">
    
  <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Patient Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Phone Number" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctor Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctor's Specilitiy" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Branch Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="date" name="floating_first_name" placeholder="Date" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Age" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose your Gender</option>
  <option value="US">Male</option>
  <option value="CA">Female</option>
  <option value="FR">Other</option>
  
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose your Status</option>
  <option value="US">Registered</option>
  <option value="CA">Unregistered</option>
  
  
</select></div>
    <button type="button" className="text-[#ffffff] rounded block h-[43px] bg-[#006642] hover:text-white border border-[#125133] hover:bg-[#125133] focus:ring-4 focus:outline-none focus:ring-[#125133] font-ubuntu  text-sm px-5 py-2.5 text-center  dark:border-[#125133] dark:text-[#125133] dark:hover:text-white dark:hover:bg-[#125133] dark:focus:ring-[#125133]">APPOINTMENT</button>
    
    </div>
 
  
</form>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <form className="max-w-screen-xl p-[25px] mx-auto">
  <div className="grid md:grid-cols-4  md:gap-12">
  <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent pl-2 border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option selected>Choose a Branch</option>
  <option value="US">Dhanmondi</option>
  <option value="CA">Shymoli</option>
  <option value="FR">Shantinagar</option>
  <option value="DE">Uttara</option>
</select></div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Test Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Service Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    {/* <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a branch</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
     */}
<button type="button" className="text-[#ffffff] rounded block bg-[#006642] hover:text-white border h-[43px] border-[#125133] hover:bg-[#125133] focus:ring-4 focus:outline-none focus:ring-[#125133] font-ubuntu  text-sm px-5 py-2.5 text-center  dark:border-[#125133] dark:text-[#125133] dark:hover:text-white dark:hover:bg-[#125133] dark:focus:ring-[#125133]">CHARGES</button>
    
    </div>
 
  
</form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="flex flex-col mb-2  sm:hidden flex flex-1  justify-top items-center    mt-[120px] mx-auto">
        <div className="w-full bg-[#f3f3f3] rounded block">
          <ul
            className="flex mb-0 ml-2 mr-2 list-none flex-wrap pt-1 pb-2 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-ubuntu uppercase px-5 py-3  shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-[#006642] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#006642] ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                FIND DOCTORS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-ubuntu uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-[#006642] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#006642]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 APPOINTMENT
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-ubuntu uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-[#006642] bg-" + color + "-600"
                    : "text-" + color + "-600 bg-[#006642]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 TEST PRICES
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0   w-full mb-1 shadow-lg rounded">
            <div className="px-2 py-2 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <form className="max-w-screen-xl  mx-auto">
  <div className="grid md:grid-cols-5  md:gap-1">
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block pl-2 py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent pl-2 border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option  selected>Choose a Branch</option>
  <option  value="US">Dhanmondi</option>
  <option value="CA">Shymoli</option>
  <option value="FR">Shantinagar</option>
  <option value="DE">Uttara</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent pl-2 border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option selected>Choose a Specilization</option>
  <option value="US">Chest Medicine</option>
  <option value="CA">Neuro Medicine</option>
  <option value="FR">Sonologist</option>
  <option value="DE">Cardiology</option>
</select></div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#00a884]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a Day</option>
  <option value="US">Sunday</option>
  <option value="CA">Monday</option>
  <option value="FR">Tuesday</option>
  <option value="DE">Wednesday</option>
</select></div>
    
<button type="button" className="text-[#ffffff] rounded block h-[43px] hover:text-white border bg-[#006642] border-[#125133] hover:bg-[#125133] focus:ring-4 focus:outline-none focus:ring-[#00a884] font-ubuntu  text-sm px-5 py-2.5 text-center  mb-0 dark:border-[#00a884] dark:text-[#00a884] dark:hover:text-white dark:hover:bg-[#00a884] dark:focus:ring-[#00a884]">DOCTORS</button>
    
    </div>
 
  
</form>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <form className="max-w-screen-xl  mx-auto">
  <div className="grid md:grid-cols-5  md:gap-1">
    
  <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Patient Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Phone Number" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctor Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctor's Specilitiy" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Branch Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="date" name="floating_first_name" placeholder="Date" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Age" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose your Gender</option>
  <option value="US">Male</option>
  <option value="CA">Female</option>
  <option value="FR">Other</option>
  
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose your Status</option>
  <option value="US">Registered</option>
  <option value="CA">Unregistered</option>
  
  
</select></div>
    <button type="button" className="text-[#ffffff] rounded block h-[43px] bg-[#006642] hover:text-white border border-[#125133] hover:bg-[#125133] focus:ring-4 focus:outline-none focus:ring-[#125133] font-ubuntu  text-sm px-5 py-2.5 text-center  dark:border-[#125133] dark:text-[#125133] dark:hover:text-white dark:hover:bg-[#125133] dark:focus:ring-[#125133]">APPOINTMENT</button>
    
    </div>
 
  
</form>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <form className="max-w-screen-xl  mx-auto">
  <div className="grid md:grid-cols-4  md:gap-12">
  <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent pl-2 border border-[#125133]  border-1 border-[#125133]  dark:text-[#006642] dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
  <option selected>Choose a Branch</option>
  <option value="US">Dhanmondi</option>
  <option value="CA">Shymoli</option>
  <option value="FR">Shantinagar</option>
  <option value="DE">Uttara</option>
</select></div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Test Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Service Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent border border-[#125133]  border-1 border-[#125133]  dark:text-white dark:border-[#125133] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2"  required />
        
    </div>
    {/* <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-white-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-white dark:border-[#00a884] dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-2">
  <option selected>Choose a branch</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
     */}
<button type="button" className="text-[#ffffff] rounded block bg-[#006642] hover:text-white border h-[43px] border-[#125133] hover:bg-[#125133] focus:ring-4 focus:outline-none focus:ring-[#125133] font-ubuntu  text-sm px-5 py-2.5 text-center  dark:border-[#125133] dark:text-[#125133] dark:hover:text-white dark:hover:bg-[#125133] dark:focus:ring-[#125133]">CHARGES</button>
    
    </div>
 
  
</form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>










      </div>
     
    </section>
 
    </>
  );
};

export default Hero;
