export default observer => {
    let _callbacks = [];

    observer.subscribe = callback => {
        const callbackId = _callbacks.length;
        _callbacks.push(callback);
        return callbackId;
    };

    observer.unsubscribe = callbackId => {
        _callbacks.splice(callbackId, 1);
    };

    return payload => {
        _callbacks.forEach(callback => {
            if (typeof callback === 'function') {
                callback(payload);
            }
        });
    };
};
