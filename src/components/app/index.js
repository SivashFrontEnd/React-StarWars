import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { req } from "../../method/method";
import MainPage from "../../pagas/main-page";
import Menu from "../../pagas/menu";
import NotFaunt from "../../pagas/notfaunt/notfaut";
import Details from "../../pagas/datails/datails";

export default function App() {
    const [screen2, setScreen2] = useState({ status: false });
    const [reqData, setReqData] = useState([]);

    function clickMenu(e, d) {
        setScreen2({ display: d, status: true });
        req(`https://swapi.dev/api/${d}`)
            .then((info) => {
                setReqData(info)
            })
    }

    return (
        <>
            {
                
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage click={clickMenu}></MainPage>}></Route>
                        <Route path="/planets" element={<Menu displayName={screen2.display} data={reqData}></Menu>}></Route>
                        <Route path="/films" element={<Menu displayName={screen2.display} data={reqData}></Menu>}></Route>
                        <Route path="/people" element={<Menu displayName={screen2.display} data={reqData}></Menu>}></Route>
                        <Route path="/species" element={<Menu displayName={screen2.display} data={reqData}></Menu>}></Route>
                        <Route path="/starships" element={<Menu displayName={screen2.display} data={reqData}></Menu>}></Route>
                        <Route path="/vehicles" element={<Menu displayName={screen2.display} data={reqData}></Menu>}></Route>
                        <Route path="/people/:id" element={<Details url="https://swapi.dev/api/people/"></Details>}></Route>
                        <Route path="*" element={<NotFaunt />}></Route>
                    </Routes>
                </BrowserRouter>
            }
            
        </>
    )
}