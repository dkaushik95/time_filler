const moment = require('moment');

// randomly tell you what times to put in
// hours:minutes to hours:minutes
// 2 hours 5 times
// 10am - 6pm
// friday - thursday
// 0 6 = dayofWeel
// time 10 - 19 hrs
// min 0 - 60 mins
const subtractor = [2, 3, 4, 5, 6, 0, 1]
const year = moment().format("YYYY")
const month = moment().format("MM")
const friday = moment().subtract(subtractor[moment().format('e')], 'day')

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let ans = Math.floor(Math.random() * (max - min + 1)) + min
    if(ans < 10){
        ans = `0${ans}`
    }
    return ans;
}

let hours = []
let from = {
    day: parseInt(friday.format('D') - 1),
    hr: getRandom(10, 19),
    mm: getRandom(0, 60)
}
for(let i = 0; i < 5; i++){
    from = {
        day: parseInt(from.day) + 1,
        hr: getRandom(10, 19),
        mm: getRandom(0, 60)
    }
    const forma = `${year}-${month}-${from.day} ${from.hr}:${from.mm}`
    let fromTime = moment(forma)
    let toTime = moment(forma)
    toTime.add(2, 'hour')
    
    hours.push({
        date: fromTime.format('MM/DD/YYYY'),
        from: fromTime.format('hh:mm'),
        to: toTime.format('hh:mm')
    })
}
console.log(`
Hi Bridgette,

Here is my timecard for this week.

TA(7044701):
`)
hours.map(h => {
    console.log('\n');
    console.log(`Date: ${h.date}`)
    console.log(`In: ${h.from}`)
    console.log(`Out: ${h.to}`)
})

