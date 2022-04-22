import { useEffect } from "react";
import { useNavigate } from "react-router";

const Flow = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/dashboard");
        window.open("https://flow.kendrasustain.com");
    }, [navigate]);

    return <></>;
};

export default Flow;
