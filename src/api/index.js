export default {
    async request(opts) {
        if (!opts) throw Error("必须传入opts对象！");

        this._initUrl(opts);

        this._initMethod(opts);

        this._initHeaders(opts);

        this._initParams(opts);

        this._buildParams(opts);

        return this._sendRequest(opts);
    },
    _initUrl(opts) {
        if (!opts.url || opts.url === "") throw Error("参数url不能为空！");
        opts.urlTransform = opts.url;
    },
    _initMethod(opts) {
        let method = "get";
        if (opts.method) {
            method = opts.method.toLowerCase();
        }
        opts.methodTransform = method;
    },
    _initHeaders(opts) {
        if (opts.headers) {
            opts.headersTransform = opts.headers;
        } else {
            opts.headersTransform = {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }
    },
    _initParams(opts) {
        if (opts.params) {
            opts.paramsTransform = opts.params
        } else {
            opts.paramsTransform = {}
        }
    },
    _buildParams(opts) {
        const method = opts.methodTransform.toLowerCase();

        if (method === "get") {
            opts.urlTransform += this._generateUrlParamsForGetRequest(opts.paramsTransform);
            opts.paramsTransform = null;
        } else {
            opts.paramsTransform = this._transformJsonToFormFields(opts.paramsTransform);
        }
    },
    _generateUrlParamsForGetRequest(params) {
        let urlParams = this._transformJsonToFormFields(params);

        if (urlParams !== "") {
            urlParams = "?" + urlParams;
        }
        return urlParams;
    },
    _transformJsonToFormFields(params) {
        let index = 0,
            formFields = "";

        for (const key in params) {
            if (params[key] === null) continue;
            if (index++ !== 0) formFields += "&";
            formFields += key + "=" + encodeURIComponent(params[key]);
        }

        return formFields;
    },
    _sendRequest(opts) {
        const
            url = opts.urlTransform,
            params = {
                method: opts.methodTransform,
                headers: opts.headersTransform,
                body: opts.paramsTransform,
                // mode: "cors", // 设置跨域
                // credentials: "include" // 设置获取cookie
            }


        return fetch(url, params)
            .then((res) => {
                console.log("res", res)
                return res.json()
            })
            .then((json) => {
                console.log("json", json)
                if (json.code === "000000") {
                    return json
                }
                return json
            })
            .catch(err => {
                console.log(err);
            })
    }
}