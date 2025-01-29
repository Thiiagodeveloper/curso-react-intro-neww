import './TodoSearch.css'

function TodoSearch(){
    return(
        <input className='TodoSearch' placeholder = "Cortando Cebolla" onChange={(event)=>{
            console.log(event.target.value);
        }} />
    );
}

export {TodoSearch};