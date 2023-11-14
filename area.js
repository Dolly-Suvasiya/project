// let r = Number(prompt("Enter the radius of a circle"));
// Math.PI

function circle(radius) {
    return Math.PI * Math.pow(radius, 2)
};
console.log(circle(2))

function area(r) {
    let run = 3.14 * r * r;
    return run;
}
console.log(area(2))



function arr(p, q) {
    let input1 = p.sort()
    let l1 = input1.at(0)
    let h1 = input1.at(-1)

    let input2 = q.sort()
    let l2 = input2.at(0)
    let h2 = input2.at(-1)
    return {
        l1, h1, l2, h2
    }
}
//console.log(arr([1, 9, 8, 7, 5, 4, 3, 2, 6], [5, 2, 3, 4, -1, 6]))


const student = {
    firstName: 'John',
    lastName: 'Doe',
    result: [{
        subjectName: 'Maths',
        score: 80,
    }, {
        subjectName: 'English',
        score: 85
    }, {
        subjectName: 'Science',
        score: 70
    }]
}

function getmarks(p) {
    if (!p.result) {
        return "No result"
    }
    let fullmarks = 0
    let score = 0

    for (let i of p.result) {
        if (!i.score || i.score < 0) {
            i.score = 0
        }
        score += i.score
        fullmarks = fullmarks + 100
    }
    let percentage = ((score / fullmarks) * 100).toFixed() + "%"
    return { percentage, score, fullmarks }

}
console.log(getmarks(student))



