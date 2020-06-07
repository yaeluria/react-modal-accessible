import { useState, useRef } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const toggle = () => {
    setIsShowing(!isShowing);
  };
const outerContent = useRef();
return [isShowing, toggle, outerContent];
};

export default useModal;