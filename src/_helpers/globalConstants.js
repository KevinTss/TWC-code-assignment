export const REQUEST = 'REQUEST__'
export const FAILED = 'FAILED__'
export const SUCCESS = 'SUCCESS__'
export const OPEN_WEATHER_KEY = process.env.VUE_APP_OPEN_WEATHER_KEY
export const WEATHER_API_BASE_URL = 'http://api.openweathermap.org/data/2.5/'
export const GET_WEATHER_ICON_URL = iconName => `http://openweathermap.org/img/wn/${iconName}@2x.png`
