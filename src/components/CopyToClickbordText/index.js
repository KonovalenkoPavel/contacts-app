import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import { useCopyToClipboard } from "react-use";

export const CopyToClickbordText = ({ text }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState("Copy");

  const getTooltipTitle = () => {
    switch (statusCopy) {
      case "Copy":
        return "Copy";
      case "Copied":
        return "Copied";
      default:
        return "";
    }
  };

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy("Copied");
  }, [copyToClipboard, text]);

  // const onClickAway = useCallback(() => {
  //   setStatusCopy("Копировать")
  // }, [setStatusCopy])

  return (
    <a
      href="#"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title={getTooltipTitle()}
      onClick={onClickCopy}
    >
      <div className="d-flex flex-row p-2">
        <i className="bi bi-clipboard-check"></i>
        <div>{text}</div>
      </div>
    </a>
  );
};

CopyToClickbordText.propTypes = {
  text: PropTypes.string.isRequired,
};
