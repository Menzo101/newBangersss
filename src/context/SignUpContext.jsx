import { createContext, useState } from "react";

export const SignUpContext = createContext();

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    accountType: "", // musician | curator
    curatorType: "", // content_creator | music_blog | playlist_curator
  });

  return (
    <SignUpContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignUpContext.Provider>
  );
};
