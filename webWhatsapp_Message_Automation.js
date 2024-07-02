function sendMessage(message, count) {
    // Function to send a message to an open chat
    function sendMessageToOpenChat(message, count) {
        const messageBox = document.querySelector("div[contenteditable='true'][data-tab='10']");
        if (!messageBox) {
            console.error("Message box not found.");
            return;
        }

        let i = 0;
        const intervalId = setInterval(() => {
            if (i >= count) {
                clearInterval(intervalId);
                console.log("All messages sent.");
                return;
            }

            messageBox.focus();
            document.execCommand('insertText', false, message);
            messageBox.dispatchEvent(new InputEvent("input", { bubbles: true }));

            setTimeout(() => {
                const sendButton = document.querySelector("span[data-icon='send']");
                if (sendButton) {
                    sendButton.click();
                    console.log(`Message ${i + 1} sent.`);
                    i++;
                } else {
                    console.error("Send button not found.");
                    clearInterval(intervalId);
                }
            }, 100); // Short delay before clicking send
        }, 500); // 500 ms delay between messages
    }

    // Check if the chat box is already open
    const messageBox = document.querySelector("div[contenteditable='true'][data-tab='10']");
    if (messageBox) {
        sendMessageToOpenChat(message, count);
    } else {
        console.error("Chat box is not open. Please open the chat box and try again.");
    }
}

// Replace 'Your message here' with your message and 5 with the number of times to send the message.
sendMessage('Type Your Message Here', 5);
