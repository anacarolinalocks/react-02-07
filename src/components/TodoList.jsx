function TodoList({content}) {
    return (
       <ul>
        {content.map(task => (
            <li key={task.id}>{task.text}</li>
        ))}
       </ul>
    );
}

export default TodoList;
