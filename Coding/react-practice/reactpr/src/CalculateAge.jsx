import React from 'react';

const CalculateAge = () => {
    const [dob, setDOB] = React.useState();
    const [age, setAge] = React.useState();

    const handleCalculateAge = (event) => {
        // logic to calculate age based on dob and current date
        // 1. get difference between dates (get time)
        // 2. convert difference value to years (year -> 365 days, day -> 24 hours, 1 hour -> 60 mins, 1 min -> 60 secs, 1 sec -> 1000 mss)
        // 3. set age in state
        const current = new Date();

        const selectDate = new Date(dob);
        const yearDifference = current.getFullYear() - selectDate.getFullYear();
        const monthDifference = current.getMonth() - selectDate.getMonth();
        
  const  dayDifference = current.getDate() - selectDate.getDate();
    Math.abs(dayDifference) 
        // console.log(dayDifference);s
        console.log(monthDifference);
        console.log(yearDifference);
        // const value=event.target.value;
        // setDOB(value);
        // console.log({value});

        console.log('dob', new Date(dob));
        console.log('current date', new Date());

        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            yearDifference--;
            monthDifference += 12;
            if (dayDifference > 0) {
                const lastMonthDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    0
                ).getDate();
                dayDifference = lastMonthDate + dayDifference;
                monthDifference--;
            }


            let diff = "";

            if (yearDifference > 0) {
                diff += `${yearDifference} year${yearDifference > 1 ? "s" : ""}`;
            }
            if (monthDifference > 0) {
                diff += `${diff ? " " : ""}${monthDifference} month${monthDifference > 1 ? "s" : ""
                    }`;
            }
            if (dayDifference > 0) {
                diff += `${diff ? " " : ""}${dayDifference} day${dayDifference > 1 ? "s" : ""}`;
            }

            setAge(diff);
        }
        else {
            setAge("");
        }
    }



    return (
        <div className="card">

            <h2>Calculate Age</h2>

            <div className="input-wrapper">
                <label htmlFor="dob">Enter your DOB</label>
                <input id="dob" className="input" type="date" onChange={(e) => setDOB(e.target.value)} value={dob} />
            </div>

            <button className='btn' onClick={handleCalculateAge}>Calculate Age</button>

            <p>Your age is: {age} in years</p>

        </div>
    )
}

export default CalculateAge;