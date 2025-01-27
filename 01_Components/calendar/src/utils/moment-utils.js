import moment from 'moment';
import 'moment/locale/ru';

export const getSpecificDate = (month, dayOfMonth, year) => {
    return moment(`${month}-${dayOfMonth}-${year}`, 'MM-DD-YYYY').toDate();
};

export const getDayOfMonth = (date) => moment(date).date();

export const getMonth = (date) => moment(date).month();

export const getYear = (date) => moment(date).year();

export const getToday = () => moment().toDate();

export const getReadableWeekday = (date) => {
    const weekday = moment(date).format('dddd');
    return weekday.charAt(0).toUpperCase() + weekday.slice(1);
}

export const getWeekday = (date) => moment(date).format('d');

export const getReadableMonthDate = (date) => moment(date).format('MMMM Do');

export const getMonthDayYear = (date) => moment(date).format('MM-DD-YYYY');

export const getReadableMonth = (date) => moment(date).format('MMMM');