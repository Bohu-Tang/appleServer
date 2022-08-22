function singal(data, type, msg) {
    if (type) {
        return {
            data: data,
            status: type,
            msg: msg ? msg : type
        }
    } else {
        return {
            data: data,
            status: 'success',
            msg: ''
        }
    }
}

module.exports=  {
    singal
}