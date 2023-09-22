const inputEl = document.getElementById("name");
const spanEl = document.getElementById("name-span");

const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
  name: "Name field",
});
connection?.init("");
connection.subscribe((evt)=>{
    if(evt.type === 'DISPATCH') {
        const name = JSON.parse(evt.state);
        spanEl.innerText = name;
        inputEl.value = name;
    }
})
inputEl.addEventListener("keyup", (e) => {
  spanEl.innerText = e.target.value;
  connection?.send("Text value", e.target.value)
});
