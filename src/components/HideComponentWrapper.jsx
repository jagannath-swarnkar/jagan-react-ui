import React from "react";

const HideComponentWrapper = ({ hidden = false, show = true, ...props }) => {
    if (hidden) {
        return <React.Fragment></React.Fragment>;
    } else if (show && !hidden) {
        return <React.Fragment>{props.children}</React.Fragment>;
    } else {
        return <React.Fragment></React.Fragment>;
    }
};

export default HideComponentWrapper;
