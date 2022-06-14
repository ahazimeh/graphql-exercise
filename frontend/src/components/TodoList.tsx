import React from "react";
import store from "../store";
import { observer } from "mobx-react";

interface TodoListProps {

}

function TodoListItems() {
    return (
        <>
        {
            store.todos.map((todo: {id: number; text: string}) => (
                <div key={todo.id}>
                    <div>{todo.text}</div>
                </div>
            ))
        }
        </>
    );
}

const TodoListItemsObserver = observer(TodoListItems);

export const TodoList: React.FC<TodoListProps> = (props) => {

    return (
        <>
        <div>Todo List</div>
        <TodoListItemsObserver></TodoListItemsObserver>
        </>
    )
}
