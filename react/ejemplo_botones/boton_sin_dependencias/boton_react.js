import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.querySelector("#app"),
   button1 = React.createElement("button", { "data-id": 123 }, "Botón 1"),
   button2 = React.createElement("button", { "data-id": 444 }, "Botón 2"),
   button3 = React.createElement("button", { "data-id": 199 }, "Botón 3"),
   app = React.createElement(React.Fragment, null, [button1, button2, button3]),
   root = ReactDOM.createRoot(appDomElement)

/* JSX
<React.Fragment>
   <button data-id="123">Botón 1</button>
   <button data-id="444">Botón 2</button>
   <button data-id="199">Botón 3</button>
</React.Fragment>
*/

root.render(app);