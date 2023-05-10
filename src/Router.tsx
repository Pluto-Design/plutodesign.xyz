import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import React from 'react';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;