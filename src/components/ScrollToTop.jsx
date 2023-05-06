import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    // document.getElementsByClassName('navbar')[0].scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "instant", // Optional if you want to skip the scrolling animation
    // });
    document.getElementsByClassName('navbar')[0].scrollIntoView({ behavior: "smooth" })
  }, [pathname]);

  return null;
}

