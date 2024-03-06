import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

type IAuthContext = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
};

const initialValue = {
  authenticated: false,
  setAuthenticated: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
  //Initializing an auth state with false value (unauthenticated)
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );

  const navigate = useNavigate();

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
