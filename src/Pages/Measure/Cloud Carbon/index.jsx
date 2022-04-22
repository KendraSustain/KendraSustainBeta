import { useEffect } from "react";
import { useNavigate } from "react-router";

const CloudCarbon = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
    window.open("http://18.185.48.92/", "_self");
  }, [navigate]);

  return <></>;
};

export default CloudCarbon;
