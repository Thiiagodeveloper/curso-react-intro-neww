import './CreateTodoButton.css';

function CreateTodoButton(){
    return(
        <button className='CreateTodoButton' onClick={(event)=>
        console.log('Estas dandole click')}>+</button>
    );
}

export {CreateTodoButton};
