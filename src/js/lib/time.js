const calculateSeconds = (counter, divisor) => {
    if (typeof counter !== 'number' || counter < 0) return 0; // Prevent invalid input
    return Math.floor((counter % (divisor * 10)) / divisor);
};

export default calculateSeconds