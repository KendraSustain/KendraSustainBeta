import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../../context/Contexts";

const KendraFlow = () => {
    const context = useContext(Context);
    const history = useHistory();
    useEffect(() => {
        context.setShowNavTop(true);
        history.push("/dashboard");
        window.open('https://flow.kendrasustain.com');
    }, [context, history]);

    return (
        <>

        </>
    );
}

export default KendraFlow;