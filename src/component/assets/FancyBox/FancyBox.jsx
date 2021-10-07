import React, { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

function Fancybox(props) {
  useEffect(() => {
    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}
export default Fancybox;