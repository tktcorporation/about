import React from "react";
import "./Profile.css";
import { Contact } from "../component/profile/Contact";
import { Products } from "../component/profile/Products";
import { Links } from "../component/profile/Links";

export const Profile = () => {
    return (
        <div className="Profile">
            <p>tktcorporation</p>
            <p>
                <Links />
            </p>
            <p>
                <Products />
            </p>
            <p>
                <Contact />
            </p>
        </div>
    );
};
