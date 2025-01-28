import {
    getDayOfMonth,
    getReadableMonth,
    getReadableWeekday,
    getYear,
} from '../utils/moment-utils';

const CalendarHeader = ( {selectDate} ) => {
    const date = selectDate;
    return (
        <div className="ui-datepicker-material-header">
            <div className="left-container">
                <div className="ui-datepicker-material-day">{getReadableWeekday(date)}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{getDayOfMonth(date)}</div>
                    <div className="ui-datepicker-material-month">{getReadableMonth(date)}</div>
                    <div className="ui-datepicker-material-year">{getYear(date)}</div>
                </div>
            </div>
        </div>
    );
};

export default CalendarHeader;