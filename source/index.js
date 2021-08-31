function repeatMessage(message, repeatCount) {
    if (typeof message != "string") {
        throw "message is not a string";
    }

    if (message && (repeatCount === null || repeatCount === false || repeatCount === '' || repeatCount === 0 || repeatCount === undefined)){
        return message
    }

    // if (isNaN(repeatCount)) {
    //     throw "repeatCount is not a number";
    // }

    if (message === "") {
        throw "message should not be an empty string"
    }

    let messageToShow = "";
    for (let index = 0; index < repeatCount; index++) {
        messageToShow += message;
    }
    return messageToShow;
}

console.log(repeatMessage("hello", 0));

module.exports = {
    repeatMessage,
};
