import { useEffect } from "react";

export const useBgColor = () => {
  useEffect(() => {
    // console.log(`マウンド時： ${count}`);
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // console.log(`アンマウント時： ${count}`);
      document.body.style.backgroundColor = "";
    }
  }, []);
}
