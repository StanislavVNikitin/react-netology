import CalendarHeader from "./CalendarHeader";
import WeekdayDateIndicator from "./WeekdayDateIndicator";

const Calendar = ({selectDate}) => {

    return (
        <div className={`ui-datepicker`}>
            <CalendarHeader selectDate={selectDate}/>
            <WeekdayDateIndicator selectDate={selectDate}/>
        </div>
    );
};

export default Calendar;