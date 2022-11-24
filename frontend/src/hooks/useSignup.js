import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const signup = async (email, password, role) => {
    console.log("role:", role, "hata hook mu??");
    setIsLoading(true);
    setError(null);

    const response = await fetch("https://backend-tfffc.herokuapp.com//api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
      if (role === "Student") {
        navigate("/student");
      } else if (role === "Teacher") {
        navigate("/teacher");
      }
    }
  };

  return { signup, isLoading, error };
};
