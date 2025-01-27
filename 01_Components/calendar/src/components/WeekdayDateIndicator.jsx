import React, {useState} from 'react';
import moment from 'moment'
import './Calendar.css';

import {getDatesInMonthDisplay} from "../utils/date-utils";
import {getDayOfMonth, getMonth, getMonthDayYear, getYear, getWeekday} from "../utils/moment-utils";

const WeekdayDateIndicator = ({selectDate}) => {
    const date = selectDate;

    const datesInMonth = getDatesInMonthDisplay(
        getMonth(date) + 1,
        getYear(date)
    );


    const monthDates = datesInMonth.map((i, index) => {
        const dateWeek = (idateArray) => {
            const returnData = idateArray.map((i, index) => {
                const currentDay = getDayOfMonth(i.date) === getDayOfMonth(date);
                if (i.currentMonth === true) {
                    if (currentDay === true) {
                        return [
                            <td className="ui-datepicker-today">{getDayOfMonth(i.date)}</td>
                        ]
                    }
                    return [
                        <td>{getDayOfMonth(i.date)}</td>
                    ]
                } else {
                    return [
                        <td className="ui-datepicker-other-month">{getDayOfMonth(i.date)}</td>
                    ]

                }
            });
            return returnData;
        }
        return (
            <tr>
                {dateWeek(i)}
            </tr>
        )
    });

    return (

        <table className="ui-datepicker-calendar">
            <colgroup>
                <col/>
                <col/>
                <col/>
                <col/>
                <col/>
                <col className="ui-datepicker-week-end"/>
                <col className="ui-datepicker-week-end"/>
            </colgroup>
            <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
            </thead>
            <tbody>
            {monthDates}
            </tbody>
        </table>
    );
};


export default WeekdayDateIndicator;
