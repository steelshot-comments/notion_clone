import { useEffect, useCallback, useState } from "react";

const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();
      if(e.target.closest("li")) {
        setAnchorPoint({ x: e.pageX, y: e.pageY });
        setShow(true);
        e.target.parentElement.remove();
      }
      else {
        setShow(false);
      }
    },
    [setShow, setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  return { anchorPoint, show };
};

export default useContextMenu;
