import React from "react";
import "./App.scss";
import { Profile } from "./container/profile/Profile";
import { CopyRight } from "./component/copy-right/CopyRight";

export const App = () => (
    <div className="App">
        <main>
            <Profile />
        </main>
        <footer>
            <CopyRight />
        </footer>
    </div>
);
