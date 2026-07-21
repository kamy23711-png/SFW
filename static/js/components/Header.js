import { Hamburger } from "./Hamburger.js";

export function Header(){

    const header = document.createElement("header");

    header.className = "header";

    header.innerHTML = `
        <h1>Smart Factory Window</h1>
    `;

    header.append(
        Hamburger(() => {
            alert("メニューを開く")
        })
    )
    return header;

}
