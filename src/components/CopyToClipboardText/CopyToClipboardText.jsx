import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import { useCopyToClipboard } from "react-use";

const CopyToClipboardText = ({ text }) => {
  const COPY_STATUSES = { copy: "Copy", copied: "Copied" };
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState(COPY_STATUSES.copy);

  const onClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(COPY_STATUSES.copied);
  }, [copyToClipboard, text]);

  return (
    <a
      href="#"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      aria-label={statusCopy}
      onClick={onClickCopy}
    >
      <div className="d-flex flex-row p-2" title={statusCopy}>
        <i className="bi bi-clipboard-check"></i>
        <div>{text}</div>
      </div>
    </a>
  );
};

export { CopyToClipboardText };

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
