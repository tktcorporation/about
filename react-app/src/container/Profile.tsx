import React from "react";
import "./Profile.css";
import { Contact } from "../component/profile/Contact";
import { Products } from "../component/profile/Products";
import { Links } from "../component/profile/Links";

export const Profile = () => {
    return (
        <div className="Profile">
            <section>
                <p>tktcorporation</p>
            </section>
            <section>
                <Links />
            </section>
            <section>
                <Products />
            </section>
            <section>
                <Contact />
            </section>
        </div>
    );
};
