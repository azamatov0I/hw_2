import React from 'react';
import Input from './Input';

function Home() {
  const handleInputChange = (value) => {
    console.log(value); // do something with the input value
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Input
        name="searchInput"
        placeholder="Search for something"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Home;
