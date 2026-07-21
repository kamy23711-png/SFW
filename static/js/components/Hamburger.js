/**
 * ハンバーガーメニュー
 *
 * @param {Function} onToggle
 * @returns {HTMLButtonElement}
 */
export function Hamburger(onToggle) {

    const button = document.createElement("button");

    button.className = "hamburger";

    button.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    let isOpen = false;

    button.addEventListener("click", () => {

        isOpen = !isOpen;

        button.classList.toggle("active", isOpen);

        if (typeof onToggle === "function") {
            onToggle(isOpen);
        }

    });

    return button;

}
