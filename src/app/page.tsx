"use client";

import { MouseEvent, useEffect, useState } from "react";

function openPopup(event: MouseEvent) {
  event.preventDefault();
  window.open("/popup", "popup", "width=300,height=300");
}

export default function Home() {
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const { token } = event.data;
      if (token) {
        setToken(token);
      }
    }

    window.addEventListener("message", onMessage);

    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <button onClick={openPopup}>Trigger popup</button>
      <p>Token: {token ?? "N/A"}</p>
    </>
  );
}
