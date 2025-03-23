import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

function List({ tasks, deleteTask }) {
  return (
    <div className="flex justify-center bg-[#131829] w-xl md:w-xl">
      <div className="w-sm md:w-lg">
        <ul>
          {tasks.map((task, index) => (
            <div className="flex display row w-full my-4 p-2" key={index}>
              <div className="mb-2 w-full text-white">
                <li>{task}</li>
              </div>
              <div className="flex justify-end w-full">
                <li>
                  <button
                    type="button"
                    className="p-2 bg-[#e4d00a] text-white rounded-l-md hover:bg-[#215226]"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    type="button"
                    className="p-2 bg-[#e4d00a] text-white rounded-r-md hover:bg-[#215226]"
                    onClick={() => deleteTask(task)}
                  >
                    <MdDeleteOutline />
                  </button>
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
