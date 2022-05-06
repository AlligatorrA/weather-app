const debounceFunc = (func, delay) => {
    let timerId;
    return function (...args) {
        clearInterval(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

export default debounceFunc