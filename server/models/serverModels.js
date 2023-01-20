const generateServerAnswer = (success, payload) => {
    return {
        success,
        message: "",
        payload,
    };
};

module.exports = generateServerAnswer(true, {});
