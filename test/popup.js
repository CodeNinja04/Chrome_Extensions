const timeElement = document.getElementById("time")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = currentTime

chrome.action.setBadgeText({
    text:"Time",
}, () =>{

        console.log("it worked");
    }
)