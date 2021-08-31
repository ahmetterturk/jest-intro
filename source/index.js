function repeatMessage(message, repeatCount) {
    // try {

    // } catch (error) {

    // }

    if (typeof message != "string") {
        throw "message is not a string";
    }

    if (isNaN(repeatCount)) {
        throw "repeatCount is not a number";
    }

    let messageToShow = "";
    for (let index = 0; index < repeatCount; index++) {
        messageToShow += message;
    }
    return messageToShow;
}

console.log(repeatMessage("Ahmet was here ", 0));

module.exports = {
    repeatMessage,
};
