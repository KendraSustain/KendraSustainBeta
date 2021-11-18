import styles from "./FeaturedInfo.module.css";

const data = [
  { title: "Energy Price", price: "£2,415", icon: "fas fa-money-bill-wave" },
  { title: "Energy Consumption", price: "200 kW/h", icon: "fas fa-lightbulb" },
  { title: "Carbon Intenstity", price: "2500 gCO2/kWh", icon: "fas fa-shoe-prints" },
];
const FeaturedInfo = () => {

  return (
    <div className={styles.featured}>
      {data.map((item, pos) => (
        <div key={pos} className={styles.featuredItem}>
          <span className={styles.featuredTitle}>{item.title}</span>
          <div className={styles.featuredContainer}>
            <span className={styles.featuredAmount}>{item.price}</span>
            <i className={[item.icon, styles.featuredIcon].join(" ")}></i>
          </div>
          {/* <span className={styles.featuredSub}>Compared to last month</span> */}
        </div>
      ))}
    </div>
  );
}

export default FeaturedInfo;