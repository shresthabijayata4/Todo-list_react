import React from 'react'

// export default function TodosItem({ todos }) {
//     return (
//         <div>
//             <h3>
//                 Here are my Todos lists:
//                 {/* <h2>{todos.title}</h2> */}
//                 {/* <h2>{todos.desc}</h2> */}
//                 {/* <h4>Hello!</h4> */}
//                 <p>{todos}</p>


//             </h3>
//         </div>
//     )
// }

// import React from 'react'

const TodosItem = ({ todos, onDelete }) => {
    return (
        <div>

            {/* <h2>{todos.title}</h2> */}
            {/* <h2>{todos.desc}</h2> */}
            {/* <h4>Hello!</h4> */}
            <p>{todos.title}</p>
            <p>{todos.desc}</p>
            <button className='btn btn-danger' onClick={() => { onDelete(todos) }}>Delete</button>





        </div>
    )
}

export default TodosItem

