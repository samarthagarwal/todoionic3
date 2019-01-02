export class Weather {
    temperature: number;
    pressure: number;
    humidity: number;
    description: string;
    icon: string;
    sunrise: string;

    constructor(weatherInfo: any) {
        this.temperature = weatherInfo.main.temp - 273.15;
        this.pressure = weatherInfo.main.pressure;
        this.humidity = weatherInfo.main.humidity;
        this.description = weatherInfo.weather[0].main;
        this.icon = "http://openweathermap.org/img/w/" + weatherInfo.weather[0].icon + ".png";
        this.sunrise = new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString();
    }
}