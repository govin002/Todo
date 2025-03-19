import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function List()
{
    return (
        <> 
        
        <div className=' flex justify-center   bg-[#131829] w-xl md:w-xl  '>
        <div className='w-sm md:w-lg '>
            <ul>

                <div className='flex display row w-full my-4 p-2'>
                    <div className='mb-2 w-full text-white'> <li >Govinda </li></div>
                    <div className='flex justify-end w-full'><li> <button  type="submit"
                className="p-2 bg-[#e4d00a] text-white text-white rounded-l-md  hover:bg-[#215226]"><FaRegEdit /></button> 
               
                 <button  type="submit"
                className="p-2 bg-[#e4d00a] text-white text-white rounded-r-md  hover:bg-[#215226]"><MdDeleteOutline /></button>
                </li></div>
                </div>
                
                <div className='flex display row w-full my-4 p-2'>
                    <div className='mb-2 w-full text-white'> <li >Govinda </li></div>
                    <div className='flex justify-end w-full'><li> <button  type="submit"
                className="p-2 bg-[#e4d00a] text-white text-white rounded-l-md  hover:bg-[#215226]"><FaRegEdit /></button> 
               
                 <button  type="submit"
                className="p-2 bg-[#e4d00a] text-white text-white rounded-r-md  hover:bg-[#215226]"><MdDeleteOutline /></button>
                </li></div>
                </div>
            </ul>
        </div>
        </div>
        
        </>

    );

}
export default List;