import React from 'react'
import styles from './Features.module.css'
import Grid from '@mui/material/Grid'
import icon1 from '../../../Assets/Images/icon1.png'
import icon2 from '../../../Assets/Images/icon2.png'
import icon3 from '../../../Assets/Images/icon3.png'
const defaultValue = [
  {
    image: icon1,
    heading: 'Develop and Realize Net Zero Strategies',
    subHeading:
      'implement Circular Economy Models embed Sustainability Decisioning across your business.',
  },
  {
    image: icon2,
    heading: 'Be part of a growing Sustainability Ecosystem',
    subHeading:
      'with an AI and Data Marketplace to augment your Sustainability initiatives.',
  },
  {
    image: icon3,
    heading: 'Find out more',
    subHeading:
      'about our Custom Sustainability solutions in Asset Management, Real Estate, and Industrial markets.',
  },
]
interface PropType {
  feature: {
    image: string
    heading: string
    subHeading: string
  }[]
  company: string
  description: string
}

const Features: React.FC<PropType> = ({
  feature = defaultValue,
  company = 'Kendra Sustain',
  description = `enables
  enterprises to embed data-driven Sustainability Decision-Making across
  business operations by providing enterprises with the tools to build a
  Circular Economy model through Data and Artificial Intelligence.`,
}) => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.featureContainer}>
        <blockquote className={styles.p2}>
          <span style={{ fontWeight: '800' }}>{company}</span> {description}
        </blockquote>
      </div>
      <Grid item xs={9}>
        <Grid container justifyContent="center" spacing={2}>
          {feature.map((item, pos) => (
            <div key={pos} className={styles.cardWrapper}>
              <img src={item.image} alt="icon" />
              <p className={styles.heading}>{item.heading}</p>
              <p className={styles.subHeading}>{item.subHeading}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </section>
  )
}

export default Features
