import {observable, action, computed} from 'mobx'
import BaseStore from "../base/baseStore";

class HomeStore extends BaseStore{

    @observable number = 1;

    @action addNumber() {
        this.number += 1
    }

}

export default new HomeStore()