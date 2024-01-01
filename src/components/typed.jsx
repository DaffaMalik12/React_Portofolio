import Typed from "typed.js";
import { useEffect, useRef } from "react";

 function TypedComponents() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Muhammad Daffa", "Front End Developer", "UI/UX Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <span ref={el}></span>
  );
}

export default TypedComponents;