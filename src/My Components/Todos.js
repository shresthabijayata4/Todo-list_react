import React from 'react'
import TodosItem from './TodosItem'
// import TodosItem from '../My Components/Todos';


// export default function todos(props) {
//     return (
//         <div className='container'>
//             <h3>Todos List</h3>
//             <TodosItem todo={props.todos[0]} />
//         </div>
//     )
// }



const todos = (props) => {
    return (
        <div className='text-center'>
            {/* <h3>Todos List</h3> */}
            <h3>
                Here are my Todos lists: </h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    return <TodosItem todos={todo} key={todo.sno} onDelete={props.onDelete} />
                })}

            {/* <TodosItem todos={props.todos[0]} /> */}
        </div>
    )
}

export default todos

