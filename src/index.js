import "./styles.css";
import { input } from "./modules/dom";
import { getWeather } from "./modules/api";

const city = input.value;

getWeather(city);