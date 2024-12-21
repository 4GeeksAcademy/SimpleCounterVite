const calculateSeconds = (counter, divisor) => {
    if (typeof counter !== 'number' || counter < 0) return 0;
    return Math.floor((counter % (divisor * 10)) / divisor);
};

export default calculateSeconds