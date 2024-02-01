import NavItem from "./nav-item";

import CHARACTERS from "../../img/CHARACTERS.png"
import iconFilms from "../../img/icon-films.png"
import PLANETS from "../../img/PLANETS.png"
import SPECIES from "../../img/SPECIES.png"
import STARSHIPS from "../../img/STARSHIPS.png"
import VEHICLES from "../../img/VEHICLES.png"

import "./navigation.css"


function Navigation({click}) {
    return (
        <ul className="navigation">
            <NavItem click={click} title="people" icon={CHARACTERS}></NavItem>
            <NavItem click={click} title="films" icon={iconFilms}></NavItem>
            <NavItem click={click} title="planets" icon={PLANETS}></NavItem>
            <NavItem click={click} title="species" icon={SPECIES}></NavItem>
            <NavItem click={click} title="starships" icon={STARSHIPS}></NavItem>
            <NavItem click={click} title="vehicles" icon={VEHICLES}></NavItem>
        </ul>
    )
}

export default Navigation