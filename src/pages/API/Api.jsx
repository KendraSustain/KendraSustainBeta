import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../../context/Contexts";

const Api = () => {
    const context = useContext(Context);
    const history = useHistory();
    useEffect(() => {
        context.setShowNavTop(true);
        history.push("/dashboard");
        window.open('https://api.kendrasustain.com/docs');
    }, [context, history]);

    return (
        <>

        </>
    );
}

export default Api;