// src/App.js
import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/User";
import { ThemeProvider } from "../context/Theme";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
        <Header
          theme={theme}
          setTheme={setTheme}
          user={user}
          setUser={setUser}
        />
        <ThemeProvider>
          <Profile theme={theme} user={user} />
        </ThemeProvider>
      </UserProvider>
    </main>
  );
}

export default App;
