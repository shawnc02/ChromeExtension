async function sayHello() {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executingScript({
        target: { tabID: tab.id },
        func: () => {
            alert('Hello from Candle AI!');
        }
    });
}
document.getElementById("myButton").addEventListener("click", sayHello);