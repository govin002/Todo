import React, { useState } from 'react';

function Entry({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update input value as the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue); // Call addTask function from parent to add a task
      setInputValue(''); // Clear input field after submitting
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-1 rounded-l-md w-md bg-[#f0f0f0] border-none outline-none focus:ring-2 focus:ring-blue-200 md:w-lg"
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className="p-2 bg-[#e4d00a] text-white rounded-r-md hover:bg-blue-200"
      >
        Post
      </button>
    </form>
  );
}

export default Entry;
