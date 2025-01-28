import { makeAutoObservable } from "mobx";

export default class UsersListStore {
    constructor() {
        this._users = []; // Используйте точку с запятой вместо запятой
        makeAutoObservable(this);
    }

    setUsers(users) {
        this._users = users;
    }

    get users() {
        return this._users;
    }
}