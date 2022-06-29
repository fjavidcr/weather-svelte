export async function getWeatherFromQuery (query = 'Pozuelo de Alarcon') {
  return fetch(`/api/get-weather?q=${query}`).then(res => res.json())
}
