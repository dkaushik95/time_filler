const moment = require('moment')


const subtractor = [2, 3, 4, 5, 6, 0, 1]
const mom = moment()
const year = mom.format('YYYY')
const month = mom.format('MM')
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

let gaHours = []
let taHours = []

let gafrom = {
    day: parseInt(friday.format('D') - 1),
    hr: getRandom(10, 19),
    mm: getRandom(0, 60)
}

let tafrom = {
    day: parseInt(friday.format('D') - 1),
    hr: getRandom(10, 19),
    mm: getRandom(0, 60)
}

for(let i = 0;i < 5; i++){
    gafrom = {
        day: parseInt(gafrom.day) + 1,
        hr: getRandom(10, 19),
        mm: getRandom(0, 60)
    }

    const gaForma = `${year}-${month}-${gafrom.day} ${gafrom.hr}:${gafrom.mm}`
    let gaFromTime = moment(gaForma)
    let gaToTime = moment(gaForma)
    gaToTime.add(2, 'hour')
    
    gaHours.push({
        date: gaFromTime.format('MM/DD/YYYY'),
        from: gaFromTime.format('hh:mm'),
        to: gaToTime.format('hh:mm')
    })

    gaToTime.add(2, 'hour')

    tafrom = {
        day: parseInt(tafrom.day) + 1,
        hr: parseInt(gaToTime.format('hh')),
        mm: getRandom(0, 60)
    }

    const taforma = `${year}-${month}-${tafrom.day} ${tafrom.hr}:${tafrom.mm}`
    let tafromtime = moment(taforma)
    let tatotime = moment(taforma)
    tatotime.add(2, 'hour')
    
    taHours.push({
        date: tafromtime.format('MM/DD/YYYY'),
        from: tafromtime.format('hh:mm'),
        to: tatotime.format('hh:mm')
    })

}

console.log(`
Hi Bridgette,

Here is my timecard for the week:
TA(7044701):

`)

taHours.map(h => {
    console.log('\n');
    console.log(`Date: ${h.date}`)
    console.log(`In: ${h.from}`)
    console.log(`Out: ${h.to}`)
})

console.log('\n GA(7044771')

gaHours.map(h => {
    console.log('\n');
    console.log(`Date: ${h.date}`)
    console.log(`In: ${h.from}`)
    console.log(`Out: ${h.to}`)
})


console.log('\n Thanks, \n Dishant')