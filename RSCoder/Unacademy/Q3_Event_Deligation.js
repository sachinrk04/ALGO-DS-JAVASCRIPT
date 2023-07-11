// Event Deligation ?

// 1.
// Event Delegation is a pattern based upon the concept of Event Bubbling. 
// It is an event-handling pattern that allows you to handle events at a higher 
// level in the DOM tree other than the level where the event was first received.

// 2.
// Capturing and bubbling allow us to implement one of the most powerful event 
// handling patterns called event delegation.

document.querySelector("#products").addEventListener("click", (event) => {
    console.log("event--->", event);

    if (event.target.tagName === "LI") {
        window.location.href += "#" + event.target.id;
    }
})