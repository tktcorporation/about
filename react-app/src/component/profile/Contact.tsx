import * as React from "react";
import { Link } from "../Link";

export const Contact = () => {
    return (
        <div className="Contact">
            <div>Contact</div>
            <div>
                <Link
                    text="tktcorporation.go@gmail.com"
                    url="mailto:tktcorporation.go@gmail.com"
                />
            </div>
        </div>
    );
};
