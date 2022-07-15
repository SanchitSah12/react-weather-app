import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import "./forecast.css";
const MyAccordion = ({ data }) => {

    const getTime = (date) => {
        var d = new Date(date);
        let text = d.toLocaleTimeString();
        return text;
    }
    return (
        <div>
            <Accordion allowZeroExpanded>
                {data.map((item, idx) => {
                    return <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="" className="icon-small" />
                                    <label htmlFor="" className="day">{getTime(item.dt_txt)}</label>
                                    <label htmlFor="" className="description">{item.weather[0].description}</label>
                                    <label htmlFor="parameter" className="minmax">{`${Math.round(item.main.temp_min)}°C/${Math.round(item.main.temp_max)}°C`}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily_details">
                                <div className="daily_details_grid_item">
                                    <label htmlFor="">Pressure</label>
                                    <label htmlFor="">{item.main.pressure}Pa</label>
                                </div>
                                <div className="daily_details_grid_item">
                                    <label htmlFor="">Humidity</label>
                                    <label htmlFor="">{item.main.humidity}%</label>
                                </div>
                                <div className="daily_details_grid_item">
                                    <label htmlFor="">Clouds</label>
                                    <label htmlFor="">{item.clouds.all}%</label>
                                </div>
                                <div className="daily_details_grid_item">
                                    <label htmlFor="">Wind Speed</label>
                                    <label htmlFor="">{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily_details_grid_item">
                                    <label htmlFor="">Sea Level</label>
                                    <label htmlFor="">{item.main.sea_level}m</label>
                                </div>
                                <div className="daily_details_grid_item">
                                    <label htmlFor="">Feels Like</label>
                                    <label htmlFor="">{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                })}
            </Accordion>
        </div>
    )
}

export default MyAccordion