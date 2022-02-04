import styles from "./NewProduct.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Contexts";




export default function NewProduct() {

  const context = useContext(Context);


  useEffect(() => {

    context.setShowNavTop(true);
  }, []);
  return (
    <div className={[styles.newProduct, context.close ? styles.close : ""].join(" ")}>

    </div>
  );
}
