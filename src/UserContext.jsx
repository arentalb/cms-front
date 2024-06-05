// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "aren",
    role: "Admin",
  });

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("AuthContext is used outside of AuthProvider");
  return context;
}

export { UserProvider, useUser };
