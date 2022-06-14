import { makeAutoObservable, observable } from "mobx";

export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
        text,
        done: false,
    },
];

class Store {
    token: String = "";
    todos: Todo[] = [
        {
            id: 1,
            done: true,
            text: "adasd"
        }
    ];
    newTodo: string = "";
    constructor() {
        makeAutoObservable(this);
    }
    addTodo() {
        this.todos = addTodo(this.todos, this.newTodo);
        this.newTodo = "";
    }
    // @observable all = [
    //     { id: 1 }
    // ]
}

const store = new Store();
export default store;