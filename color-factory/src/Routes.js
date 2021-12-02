import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from "./Color";

const Routes = () =>{
    const initialColors = {  red: "#FF0000",green: "#00FF00", blue: "#0000FF"}
    const [colors, setColors] = useState(initialColors)

    const addColor = (newColor) =>{
        setColors(colors =>({ ...colors, ...newColor }))
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/colors'>
                    <ColorList colors={colors} />
                </Route>
                <Route exact path="/colors/new">
                    <ColorForm addColor={addColor} />
                </Route>
                <Route exact path="/colors/:name">
                    <Color colors={colors} />
                </Route>
                <Redirect to="/colors" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes