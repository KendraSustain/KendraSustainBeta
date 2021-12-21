import styles from "./FeaturedInfo.module.css";

const data = [
  { title: "Balancing Energy Price for UK Flex Market ", price: "£2,415", date: "21-12-2021" },
  { title: "Average Energy Consumption for UK", price: "200 kW/h", date: "21-12-2021" },
  { title: "Average Carbon Intenstity for Swansea", price: "2500 gCO2/kWh", date: "21-12-2021" },
];
const FeaturedInfo = () => {

  return (
    <div className={styles.featured}>
      {data.map((item, pos) => (
        <div key={pos} className={styles.featuredItem}>
          <span className={styles.featuredTitle}>{item.title}</span>
          <div className={styles.featuredContainer}>
            <span className={styles.featuredAmount}>{item.price}</span>
            <span className={styles.featuredAmount2}>Date : {item.date}</span>
            <i className={[item.icon, styles.featuredIcon].join(" ")}></i>
          </div>
          {/* <span className={styles.featuredSub}>Compared to last month</span> */}
        </div>
      ))}
    </div>
  );
}

export default FeaturedInfo;