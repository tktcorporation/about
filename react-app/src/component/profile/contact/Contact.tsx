import * as React from "react";
import { Link } from "../../Link";
import "./Contact.scss";

export const Contact = () => {
    return (
        <div className="Contact">
            <div className="title">Contact</div>
            <div>
                <Link
                    text="tktcorporation.go@gmail.com"
                    url="mailto:tktcorporation.go@gmail.com"
                />
            </div>
        </div>
    );
};
