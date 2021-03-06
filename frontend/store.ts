import { makeAutoObservable } from "mobx";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

const removeTodo = (todos: Todo[], id:number): Todo[] =>
    todos.filter((todo) => todo.id !==id);
    
const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({id}) =>id))) +1,
        text,
        done:false,
    },
];

class Store {
    todos: Todo[] = [];
    newTodo: string = "";
    constructor() {
        makeAutoObservable(this);
    }
    addTodo() {
        this.todos = addTodo(this.todos, this.newTodo);
        this.newTodo = "";
    }
}

const store = new Store();
export default store;