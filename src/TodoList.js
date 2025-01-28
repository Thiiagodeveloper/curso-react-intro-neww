import './TodoList.css';

function TodoList({children}){
    return(
        <ul className='TOdoList'>
            {children}
        </ul>
    );
}

export {TodoList};