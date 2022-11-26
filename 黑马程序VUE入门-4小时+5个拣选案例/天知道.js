var app = new Vue({
  el: '#app',
  data: {
    weatherList: [],
    city: '',
  },
  methods: {
    searchWeather() {
      axios
        .get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then((res) => {
          console.log(res.data.data.forecast)
          this.weatherList = res.data.data.forecast
        })
        .catch((err) => {
          console.log(err)
        })
    },
    changeCity(city) {
      this.city = city
      this.searchWeather()
    },
  },
})
