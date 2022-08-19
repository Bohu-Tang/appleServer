function singal(data, type, msg) {
    if (type) {
        return {
            status: type,
            data: data,
            msg: msg ? msg : type
        }
    } else {
        return {
            status: 'success',
            data: data,
            msg: ''
        }
    }
}

module.exports=  {
    singal
}