import React from 'react';
import { Link } from 'react-router-dom';
import FetchData from './FetchData';

const Header = () => {
  const [input, setInput] = React.useState('')
  const [data, setData] = React.useState('')

  function handleSearch() {
    setData(input)
  }
  const handleButton = (name) => {
    setData(name);
  };
  return (
    <div>
      <h1 className='main-heading'>SnapShot</h1>
      <div className='search' >
        <input onChange={(e) => { setInput(e.target.value) }} className='search-input' type="text" placeholder="Search..." />
        <button onClick={handleSearch} className='search-button' >Search</button>
      </div>
      <div className='component'>
        <Link to='/Mountain' ><button onClick={()=>handleButton('Mountains')}>Mountains</button></Link>
        <Link to='/Beaches'><button onClick={()=>handleButton('Beaches')}>Beaches</button></Link>
        <Link to='/Birds' ><button onClick={()=>handleButton('Birds')}>Birds</button></Link>
        <Link to='/Food'><button onClick={()=>handleButton('Food')}>Food</button></Link>
      </div>
      <h3 className='search-Keyword'>{data} Pictures</h3>
      <FetchData SearchKeyword={data} />
    </div>
  );
};

export default Header;