import * as React from "react";
import { Link } from "../Link";

export const Links = () => {
    return (
        <div className="Links">
            <div>Links</div>
            <div>
                <Link text="GitHub" url="https://github.com/tktcorporation" />
            </div>
            <div>
                <Link text="Qiita" url="https://qiita.com/tktcorporation" />
            </div>
            <div>
                <Link text="Twitter" url="https://twitter.com/tktcorporation" />
            </div>
        </div>
    );
};
