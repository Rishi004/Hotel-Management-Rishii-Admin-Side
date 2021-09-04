import React from "react";
import Button from "@material-ui/core/Button";

function ContainedButton({ variant, size, color, onClick, text, ...other }) {
    return (
        <div>
            <Button
                variant={variant}
                size={size}
                color={color}
                {...other}
                onClick={onClick}
            >
                {text}
            </Button>
        </div>
    );
}

export default ContainedButton;
