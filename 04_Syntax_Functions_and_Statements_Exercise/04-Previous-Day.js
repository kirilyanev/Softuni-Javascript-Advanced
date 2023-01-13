function previousDay(year, month, day) {
    // const currDate = new Date(year, month - 1, day);
    // console.log(`${currDate.getFullYear()}-${currDate.getMonth()+1}-${currDate.getDay()}`);
    const now = new Date();
    now.setFullYear(year);
    now.setMonth(month - 1);
    now.setDate(day-1);

    console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
previousDay(2021,1,1);