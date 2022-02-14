const path = require('path')
const fs = require('fs')

const [language, timeOptions] = ['pt-br', { timeStyle: 'short' }]

const savePath = path.resolve(__dirname, 'file.txt')

let initDate = 2
const month = 2
const year = 2022

let initDateString = `${year}-${month}-${initDate}`
let initialDate = new Date(initDateString).toLocaleDateString()

const entryTime = '08:30:00'
const lunchTime = '14:00:00'
const endLunchTime = '15:00:00'
const outTime = '17:30:00'
const todayDate = new Date().getDate()

const initialHour = new Date(`${initDateString} ${entryTime}`).toLocaleTimeString(language, timeOptions)
const enterLunchTime = new Date(`${initDateString} ${lunchTime}`).toLocaleTimeString(language, timeOptions)
const outLunchTime = new Date(`${initDateString} ${endLunchTime}`).toLocaleTimeString(language, timeOptions)
const endHour = new Date(`${initDateString} ${outTime}`).toLocaleTimeString(language, timeOptions)


const exception = {
  date: 14,
  month: 2,
  year: 2022,
  initHour?: '13:00',
  finalHour?: '',
  outTime?: '13:00',
  returnTime?: '14:00',
  description: 'Exame médico'
}

const exception2 = {
  date: 14,
  month: 2,
  year: 2022,
  initHour?: '13:00',
  finalHour?: '',
  outTime?: '13:00',
  returnTime?: '14:00',
  description: 'Exame médico'
}

const exceptions = [exception, exception2]

function dateChange(date) {
  initDateString = `${year}-${month}-${date}`
  initialDate = new Date(initDateString).toLocaleDateString()
}

let phrase = ''

for (let i = initDate; i < todayDate; i++) {
  dateChange(i)

  let dayofWeek = new Date(initDateString).toLocaleString('pt-br', { weekday: 'short' })

  const excpetionsPhrase = exceptions.map(item => `Dia 02/02/2022 – Das 08:30 às 14:00 e das 15:00 às 17:30\n`)

  if(dayofWeek !== 'sáb.' && dayofWeek !== 'dom.') {
    phrase += `Dia ${initialDate} – Das ${initialHour} às ${enterLunchTime} e das ${outLunchTime} às ${endHour}\n`
  }
}

fs.writeFile(savePath, phrase, { encoding: 'utf-8', flag: 'w' }, () => console.log('ok'))
