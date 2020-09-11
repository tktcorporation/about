import * as React from "react";
import "./Link.css";

interface Props {
    url: string;
    text: string;
}
export class Link extends React.Component<Props> {
    render = () => {
        return (
            <a
                className="Link"
                href={this.props.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {this.props.text}
            </a>
        );
    };
}
