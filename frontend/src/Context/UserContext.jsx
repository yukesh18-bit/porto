import { createContext, useEffect, useState } from "react";
console.log("UserContext loaded");
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "",
          email: "",
          phone: "",
          college: "",
          department: "",
          photo: "",

          certificates: [],
          projects: [],
          achievements: [],
          activity: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}