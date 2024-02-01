import Cards from "../../components/cards";
import LabelSearch from "../../components/label-search";
import "./menu.css"

const Menu = ({displayName, data}) => {
    return (
       <div className="screen2 screen">
           <LabelSearch displayName={displayName}></LabelSearch>
           <Cards data={data}></Cards>
       </div>
    )
}

export default Menu;