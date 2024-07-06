import {action, computed, observable} from "mobx";

class UserStore {

    @observable
    name = "";

    @observable
    token = "";

    constructor() {
        this.name = localStorage.getItem('authenticated') || '';
        this.token = localStorage.getItem('auth_token') || '';
    }

    @computed
    get isAuthenticated() {
        return !!this.name;
    }

    @action
    setName(name) {
        this.name = name
    }

    @action
    login(name, token) {
        this.name = name;
        this.token = token;
        localStorage.setItem('authenticated', name);
        localStorage.setItem('token', token);
    }


    @action
    logout() {
        localStorage.setItem('authenticated', '');
        localStorage.setItem('token', '');
        this.name = '';
        this.token = '';
        console.log("logout finished!");
    }

}

export default UserStore;
