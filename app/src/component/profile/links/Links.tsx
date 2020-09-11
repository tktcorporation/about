import * as React from "react";
import { Link } from "../../link/Link";
import "./Links.scss";

export const Links = () => {
    return (
        <div className="Links">
            <div className="title">Links</div>
            <div>
                <Link text="GitHub" url="https://github.com/tktcorporation" />
            </div>
            <div>
                <Link text="Qiita" url="https://qiita.com/tktcorporation" />
            </div>
            <div>
                <Link text="Twitter" url="https://twitter.com/tktcorporation" />
            </div>
            <div>
                <Link text="Note" url="https://note.com/tktcorporation" />
            </div>
            <div>
                <Link
                    text="Connpass"
                    url="https://connpass.com/user/tktcorporation"
                />
            </div>
        </div>
    );
};
