import React from "react";
import "./Profile.css";
import { Contact } from "../../component/profile/contact/Contact";
import { Products } from "../../component/profile/products/Products";
import { Links } from "../../component/profile/links/Links";

export const Profile = () => {
    return (
        <div className="Profile">
            <section>
                <p className="title">tktcorporation</p>
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
