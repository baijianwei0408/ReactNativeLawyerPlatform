import {getApiUrl} from "../common/constants";
import api from "../api"

export default class BaseStore {

    async request(opts, callback) {
        opts.url = getApiUrl() + opts.url
        return await api.request(opts).then(rs => {
            return callback && callback(rs)
        })
    }

}
