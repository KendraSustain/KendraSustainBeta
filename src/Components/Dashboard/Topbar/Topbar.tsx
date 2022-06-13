import { Context } from 'Context'
import React, { useContext } from 'react'
import { userType } from 'Types'
import calendar from './calendar.svg'
import style from './Topbar.module.scss'
interface PropType {
  user?: userType
}
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const date = new Date()
const Topbar: React.FC<PropType> = ({
  user = {
    firstname: 'First',
    lastname: 'Last',
    id: 1,
    email: 'Email',
    profile: '',
  },
}) => {
  const { headText } = useContext(Context)
  return (
    <>
      <div className={style.container}>
        <div className={style.right}>{headText}</div>
        <div className={style.left}>
          <div className={style.date}>
            <img src={calendar} alt="" />
            <p>
              {weekday[date.getDay()].slice(0, 3)} , {date.getDate()}{' '}
              {month[date.getMonth()].slice(0, 3)} {date.getFullYear()}
            </p>
            <i className="bx bx-chevron-down"></i>
          </div>
          <i className="bx bx-search"></i>
          <i className="bx bxs-bell"></i>
          <img
            src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Discord-768x890.jpg"
            alt=""
            className={style.photo}
          />
        </div>
      </div>
    </>
  )
}
export default Topbar
