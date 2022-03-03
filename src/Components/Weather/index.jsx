import ReactWeather, { useOpenWeather } from 'react-open-weather'
import styles from './index.module.css'

const customStyles = {
  fontFamily: 'Helvetica, sans-serif',
  gradientStart: '#cccccc',
  gradientMid: '#8b8c8c',
  gradientEnd: '#cccccc',
  locationFontColor: '#FFF',
  todayTempFontColor: '#FFF',
  todayDateFontColor: '#FFF',
  todayRangeFontColor: '#FFF',
  todayDescFontColor: '#FFF',
  todayInfoFontColor: '#FFF',
  todayIconColor: '#FFF',
  forecastBackgroundColor: '#FFF',
  forecastSeparatorColor: '#DDD',
  forecastDateColor: '#777',
  forecastDescColor: '#777',
  forecastRangeColor: '#777',
  forecastIconColor: '#4BC4F7'
}

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '3813076609c9999cecefe5310c42337a',
    lat: '51.5072',
    lon: '0.1276',
    lang: 'en',
    unit: 'metric' // values are (metric, standard, imperial)
  })
  return (
    <div className={styles.container}>
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang='en'
        
        locationLabel='London'
        unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  )
}

export default Weather
