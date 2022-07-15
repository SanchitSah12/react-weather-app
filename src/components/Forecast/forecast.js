import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "./forecast.css"
import MyAccordion from './MyAccordion';
const Forecast = ({ data }) => {

    function getDay(dat) {
        let date = dat.split(" ");
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date(date[0]);
        let day = weekday[d.getDay()];
        return day;
    }

    function getHumanDate(dat){
        const d = new Date(dat);
    let text = d.toLocaleDateString();
    return text; //
    }

    const newData  = Object.values(data.list.reduce((acc, x) => {
        acc[x.dt_txt.split(" ")[0]] = [...(acc[x.dt_txt.split(" ")[0]] || []), x ];
        return acc;
      }, {}));
    console.log(newData);

    return (
        <div>

            <label className="title">Future Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {newData.map((dayData, idx) => {
                    return <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='day_btn'>
                                    <label htmlFor="`">{getDay(dayData[0].dt_txt)}</label>
                                    <label htmlFor="`">{getHumanDate(dayData[0].dt_txt)}</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <MyAccordion data={dayData}></MyAccordion>

                        </AccordionItemPanel>
                    </AccordionItem>
                })}
            </Accordion>

            
        </div>
    )
}

export default Forecast