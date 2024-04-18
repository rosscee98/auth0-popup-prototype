"use client";

import { useEffect } from "react";

function handleRedirect(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  window.location.replace("/popup?token=123");
}

export default function NestedRoute() {
  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    if (token) {
      window.opener.postMessage({ token }, "*");
      window.close();
    }
  }, []);

  return (
    <>
      <h1>Nested page</h1>
      <button onClick={handleRedirect}>Redirect</button>
    </>
  );
}
