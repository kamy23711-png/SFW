export function Card(title,...children){

    const card=document.createElement("section");

    card.className="card";

    const h=document.createElement("h2");

    h.textContent=title;

    card.appendChild(h);

    children.forEach(child=>{

        card.appendChild(child);

    });

    return card;

}
