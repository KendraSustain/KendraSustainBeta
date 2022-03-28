import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/Contexts";

const Api = () => {
    const context = useContext(Context);
    const history = useHistory();
    useEffect(() => {
        context.setShowNavTop(true);
        history.push("/dashboard");
        window.open('https://api.kendrasustain.com/redoc');
    }, [context, history]);

    return (
        <>

        </>
    );
}

export default Api;