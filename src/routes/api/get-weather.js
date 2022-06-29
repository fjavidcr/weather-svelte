const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '985cdd733cmsh37b02a0e3ab5bb4p151a92jsndc538c71f1e7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

export async function get(event) {
  const { searchParams } = event.url
  const query = searchParams.get('q') ?? 'Pozuelo de Alarcon'
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    FETCH_OPTIONS
  )
  const data = await response.json()

  const { location, current } = data
  const { country, localtime, name } = location
  const { condition, humidity, feelslike_c, temp_c, wind_kph, wind_dir, is_day } = current
  const { code, text } = condition

  const body = {
    country,
    localtime,
    locationName: name,
    condition,
    humidity,
    feelsLike: feelslike_c,
    temperature: temp_c,
    windSpeed: wind_kph,
    windDir: wind_dir,
    isDay: is_day,
    conditionCode: code,
    conditionText: text
  }


  return {
    status: 200,
    body
  }
}