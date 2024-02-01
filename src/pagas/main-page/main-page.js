import Navigation from "../../components/navigation"
import "./main-page.css"

function MainPage ({click}) {
    return (
        <>
        <div className="screen screen1"> 
        <Navigation click={click}></Navigation>
        </div>
        </>
    )
}

export default MainPage