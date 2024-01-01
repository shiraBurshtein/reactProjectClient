import { observable, makeObservable, action } from 'mobx';

class AdminStore {
    isAdmin = false;

    constructor() {
        makeObservable(this, {
            isAdmin: observable,
            setIsAdmin: action,
        })
    }

    setIsAdmin = (val) => {
        this.isAdmin = val;
    }

}

export default new AdminStore();