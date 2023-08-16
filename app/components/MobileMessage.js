"use client";

import mobileStyles from "../../styles/Mobile.module.css";
import { useState, useEffect } from "react";

export default function TestMobile() {
  const [domloaded, setDomloaded] = useState(false);

  useEffect(() => {
    setDomloaded(true);
  });

  if (domloaded && window.innerWidth < 780) {
    return (
      <div className={mobileStyles["error-message"]}>
        <h3>NOTE: This site is not currently mobile-friendly.</h3>
        <p>
          It is best viewed on a computer and will appear incorrectly formatted
          on sufficiently small screens.
        </p>
      </div>
    );
  }
}
