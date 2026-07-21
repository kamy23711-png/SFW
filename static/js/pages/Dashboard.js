import { Header } from "../components/Header.js";
import { Card } from "../components/Card.js";

export function Dashboard(){

    const page = document.createElement("main");

    page.className = "dashboard";

    page.append(

        Header(),

        Card(

            "NC旋盤",

            MachineButton("M01"),

        )

    );

    return page;

}
