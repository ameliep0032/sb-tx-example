import React from "react";
import "./LinkButton.scss";

interface LinkButtonProps {
  text: string;
  icon: JSX.Element;
}

export const LinkButton = ({ text, icon, ...rest }: LinkButtonProps) => {
  return (
    <button className="link-button" {...rest}>
      <div className="button-align">
        {text}
        {icon}
      </div>
    </button>
  );
};
