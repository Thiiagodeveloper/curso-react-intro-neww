import React from 'react';
import './TodoSearch.css'

function TodoSearch(){

    const [searchValue, setSearchValue ] = React.useState('');
    console.log('Hi, you are writing ' + searchValue);

    return(
        <input 
        className='TodoSearch' 
        value={searchValue} 
        onChange={(event)=>{
            setSearchValue(event.target.value);
        }} />
    );
}

export {TodoSearch};