import React from 'react';

function Entry({ inputValue, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="flex justify-center mt-4">
           <input
    type="text"
    value={inputValue}
    onChange={handleChange}
    className=" p-1  rounded-l-md w-md bg-[#f0f0f0] border-none outline-none focus:ring-2 focus:ring-blue-200  md:w-lg" // Fixed the typo here
    placeholder="Enter a task"
/>

            <button
                type="submit"
                onClick={handleSubmit}
                className="p-2 bg-[#e4d00a] text-white text-white rounded-r-md  hover:bg-blue-200"
            >
               Post
            </button>
        </form>
    );
}

export default Entry;
