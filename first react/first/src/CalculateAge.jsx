import React from 'react';
import { Button } from 'react-bootstrap';

const CalculateAge = () => {
    const [dob, setDOB] = React.useState();
    const [years, setYears] = React.useState();
    const [months, setMonths] = React.useState();
    // const [age, setAge] = React.useState();

    const handleCalculateAge = () => {
        // logic to calculate age based on dob and current date
        // 1. get difference between dates (get time)
        // 2. convert difference value to years (year -> 365 days, day -> 24 hours, 1 hour -> 60 mins, 1 min -> 60 secs, 1 sec -> 1000 mss)
        // 3. set age in state
        const currentDate = new Date();
        const birthDate = new Date(dob)
        console.log({ currentDate, birthDate })

        const Age = currentDate - birthDate;

        const inSeconds = Age / 1000;
        const inMinutes = inSeconds / 60;
        const inHours = inMinutes / 60;
        const inDays = inHours / 24;

        const inYears = inDays / 365;
        const inWeeks = inDays / 7;

        const yearDifference = inDays / 365
        const yearDifferenceInString = yearDifference.toString();
        const remainingPartOfYear = yearDifferenceInString.split('.')[1]
        const remainingPartOfYearInDecimal = '0.' + remainingPartOfYear;
        const monthsInNumber = Number(remainingPartOfYearInDecimal * 10)
        const inMonths = Math.ceil(monthsInNumber)

        // const inMonths = Math.ceil(Number('0.' + (inDays / 365).toString().split(".")[1]) * 10);

        console.log({ inSeconds, inMinutes, inHours, inDays, inMonths, inYears })

        const AgeCalLogic = Age / (1000 * 60 * 60 * 24 * 365);

        setYears(Math.floor(inYears));
        setMonths(inMonths);
        // setMonths(Math.floor(inMonths));



        console.log('dob', new Date(dob));
        console.log('current date', new Date());
    }

    return (
        <div className="card">

            <h2>Calculate Age</h2>

            <div className="input-wrapper">
                <label htmlFor="dob">Enter your DOB</label>
                <input id="dob" className="input" type="date" onChange={(e) => setDOB(e.target.value)} value={dob} />
            </div>

            <button className='btn btn-primary' onClick={handleCalculateAge}>Calculate Age</button>
            <Button>hello</Button>
            <p>Your age is: {years} in years {months} in months</p>

            {/* <p>Your age is: {age} in years</p> */}

        </div>
    )
}

export default CalculateAge;