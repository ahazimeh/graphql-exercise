import { makeAutoObservable, observable } from "mobx";


class Contacts {
    @observable all = [
        {id:1,name:"asd",email:"asd@gmail.com"}
    ]
}

const contact = new Contacts();
export default contact;