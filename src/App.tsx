import React, { useCallback, useEffect, useRef, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  const onNavClickOut = useCallback((e: Event) => {
    const target = e.target as HTMLElement;

    if (!target.closest(".navbar")) {
      setNavbarIsOpen(false);
    }
  }, []);

  const cleanUpListeners = useCallback(() => {
    appRef.current?.removeEventListener("click", onNavClickOut);
  }, [onNavClickOut]);

  const closeNavbar = () => {
    appRef.current?.removeEventListener("click", onNavClickOut);
    setNavbarIsOpen(false);
  };

  useEffect(() => {
    return () => {
      cleanUpListeners();
    };
  }, [cleanUpListeners]);

  const toggleNavbar = () => {
    if (navbarIsOpen) {
      setNavbarIsOpen(false);
      appRef.current?.removeEventListener("click", onNavClickOut);
    } else {
      setNavbarIsOpen(true);
      appRef.current?.addEventListener("click", onNavClickOut);
    }
  };

  return (
    <div className="app" ref={appRef}>
      <div className="container">
        <Navbar
          username="Василий Пупкин"
          isOpen={navbarIsOpen}
          toggleNavbar={toggleNavbar}
          closeNavbar={closeNavbar}
        />

        <Routes>
          <Route path="/" element={<ActivityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
