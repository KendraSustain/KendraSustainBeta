import { useEffect } from "react";
import { useNavigate } from "react-router";

const Api = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
    window.open("https://api.kendrasustain.com/redoc", "_self");
  }, [navigate]);

  return <></>;
};

export default Api;
