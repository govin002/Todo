import { useState } from 'react'
import Entry from './Entry'
import List  from './List'
import {Link} from 'react-router-dom'
import { GiNinjaHead } from "react-icons/gi";




function Home() {
 
  return (
    <>

   <div className='bg-black m-0 p-2 h-screen'>
    <div className='flex flex-row'>
    <div className='text-white  flex items-center mx-2 mt-4 md:mx-2 '><GiNinjaHead className='text-3xl text-yellow-200 hover:text-green-200' /></div>
        <div> <Link to='/' className='text-white border border-yellow-200 p-2 hover:bg-yellow-100'>Logout</Link></div>
      <div className='flex flex-col'>
        <div className='text-white flex items-center mx-4 mt-4 md:mx-4 '><h1> Govinda Prasad Shrestha</h1> </div>
        {/* <div className='text-white flex mx-4  '> <p>Hope you are doing good.</p> </div> */}
      </div>
    </div>
 
    <div className='   flex flex-col  item-center '>

    <h1 className='flex justify-center items-center text-lg font-bold text-white '>Todo List</h1>
    <h5 className='flex justify-center items-center text-md font-normal text-white '>List The task</h5>
   
    <Entry/>
    <div className='flex justify-center  m-2 p-2'>
    <List/>
    </div>
    
    
    </div>
   </div>
   
    </>
  )
}

export default Home
