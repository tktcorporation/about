import * as React from "react";
import { Link } from "../../Link";
import "./Products.scss";

export const Products = () => {
    return (
        <div className="Contact">
            <div>Products</div>
            <div>
                <Link
                    text="二郎呪文ジェネレーター"
                    url="https://jiro-spells.web.app/"
                />
            </div>
            <div>
                <Link text="tapioca.today" url="http://tapioca.today/" />
            </div>
        </div>
    );
};
