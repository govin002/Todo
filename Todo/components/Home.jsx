import { useState } from 'react';
import Entry from './Entry';
import List from './List';
import { Link } from 'react-router-dom';
import { GiNinjaHead } from "react-icons/gi";

function Home() {
  // State to manage the tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to delete a task
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <>
      <div className='bg-black m-0 p-2 h-screen'>
        <div className='flex flex-row'>
          <div className='text-white flex items-center mx-2 mt-4 md:mx-2 w-auto'>
            <GiNinjaHead className='text-3xl text-yellow-200 hover:text-green-200' />
          </div>

          <div className='flex flex-col w-full'>
            <div className='text-white flex items-center mx-4 mt-4 md:mx-4'>
              <h1>Govinda Prasad Shrestha</h1>
            </div>
          </div>

          <div className='flex flex-row-reverse w-auto mx-2 mt-4 md:mx-2'>
            <div>
              <Link to='/' className='text-sm text-white border rounded border-yellow-200 px-2 hover:bg-yellow-100 hover:text-black'>
                Logout
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h1 className='flex justify-center items-center text-lg font-bold text-white'>Todo List</h1>
          <h5 className='flex justify-center items-center text-md font-normal text-white'>List The task</h5>

          {/* Pass the addTask function to Entry */}
          <Entry addTask={addTask} />
          
          {/* Pass tasks and deleteTask function to List */}
          <div className='flex justify-center m-2 p-2'>
            <List tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
