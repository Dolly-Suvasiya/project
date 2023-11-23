import React from 'react';

const CalculateAge = () => {
    const [dob, setDOB] = React.useState();
    const [age, setAge] = React.useState();

    const handleCalculateAge = () => {
        // logic to calculate age based on dob and current date
        // 1. get difference between dates (get time)
        // 2. convert difference value to years (year -> 365 days, day -> 24 hours, 1 hour -> 60 mins, 1 min -> 60 secs, 1 sec -> 1000 mss)
        // 3. set age in state

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

            <button className='btn' onClick={handleCalculateAge}>Calculate Age</button>

            <p>Your age is: {age} in years</p>

        </div>
    )
}

export default CalculateAge;