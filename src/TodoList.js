function TodoList({children}){
    return(
        <li>
            <ul>{children} </ul>
        </li>
    );
}

export {TodoList};