import moment from 'moment';
import 'moment/locale/ru';

const getDaysInMonth = (month, year) => {
    return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
}

const getFirstWeekdayOfMonth = (month, year) => {
    return moment(
        `${month}-${year}`,
        'MM-YYYY'
    ).startOf('month').weekday()
}

const getPrevMonthYear = (month, year) => {
    // Если январь... предыдущий месяц - декабрь предыдущего года
    if (month === 1) {
        return {
            month: 12,
            year: year - 1
        }
    }

    // Otherwise, same year, but month - 1
    return {
        month: month - 1,
        year
    }
}

const getNextMonthYear = (month, year) => {
    // Если декабрь... в следующем месяце это январь следующего года
    if (month === 12) {
        return {
            month: 1,
            year: year + 1,
        };
    }

    // Otherwise, same year, but month + 1
    return {
        month: month + 1,
        year: year,
    };
};


/*export const getDatesInMonthDisplay = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstWeekday = getFirstWeekdayOfMonth(month, year);
    const result = [];

    const prev = getPrevMonthYear(month, year);
    const prevDaysInMonth = getDaysInMonth(
        prev.month,
        prev.year
    );

    // Добавляем предыдущие даты переполнения...
    for (let j = firstWeekday - 1; j >= 0; j--) {
        result.push({
            date: moment(
                `${prev.month}-${prevDaysInMonth - j}-${prev.year}`,
                'MM-DD-YYYY'
            ).toDate(),
            currentMonth: false
        })
    }
    // Добавить даты текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
        result.push({
            date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate(),
            currentMonth: true
        })
    }

    // Перенос дат на следующий месяц в соответствии с требованиями к отображению 42 дней в месяц
    if (result.length < 42) {
        const daysToAdd = 42 - result.length;
        const next = getNextMonthYear(month, year);

        for (let k = 1; k <= daysToAdd; k++) {
            result.push({
                date: moment(
                    `${next.month}-${k}-${next.year}`,
                    'MM-DD-YYYY'
                ).toDate(),
                currentMonth: false
            })
        }
    }

    return result;
}*/

export const getDatesInMonthDisplay = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstWeekday = getFirstWeekdayOfMonth(month, year);
    const result = [];

    const prev = getPrevMonthYear(month, year);
    const prevDaysInMonth = getDaysInMonth(
        prev.month,
        prev.year
    );

    // Добавляем предыдущие даты переполнения...
    for (let j = firstWeekday - 1; j >= 0; j--) {
        result.push({
            date: moment(
                `${prev.month}-${prevDaysInMonth - j}-${prev.year}`,
                'MM-DD-YYYY'
            ).toDate(),
            currentMonth: false
        })
    }
    // Добавить даты текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
        result.push({
            date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate(),
            currentMonth: true
        })
    }

    // Перенос дат на следующий месяц в соответствии с требованиями к отображению 42 дней в месяц
    if (result.length < 42) {
        const daysToAdd = 42 - result.length;
        const next = getNextMonthYear(month, year);

        for (let k = 1; k <= daysToAdd; k++) {
            result.push({
                date: moment(
                    `${next.month}-${k}-${next.year}`,
                    'MM-DD-YYYY'
                ).toDate(),
                currentMonth: false
            })
        }
    }

    // Группируем даты по неделям
    const weeks = [];
    for (let i = 0; i < result.length; i += 7) {
        weeks.push(result.slice(i, i + 7));
    }

    return weeks;
}


