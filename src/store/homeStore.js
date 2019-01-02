import {observable, action, computed} from 'mobx'

class HomeStore {

    @observable number = 1;

    @action addNumber() {
        this.number += 1
    }

}

export default new HomeStore()