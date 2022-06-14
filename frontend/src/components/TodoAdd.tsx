import React from "react";
import store from "../store";
import { observer } from "mobx-react";

function TodoAdd() {
    return (
        <div>
            <input type = "text"
                placeholder="New todo" 
                value = {store.newTodo}
                onChange={(evt) => (store.newTodo = evt.target.value)}
            />
            {/* <button onClick={() => store.addTodo()}>Add Todo</button> */}
        </div>
    )
}

export default observer(TodoAdd);