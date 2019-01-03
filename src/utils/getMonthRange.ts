interface Range {
  start: number,
  end: number
}

const ONE_DAY_MILLISECONDS = 1000 * 60 * 60 * 24 * 1

const getEndDate = (nextMonth: any): number => {
  const year = nextMonth.getUTCFullYear()
  const month = nextMonth.getUTCMonth() + 1
  const nextMonthFirstDay = (new Date(`${year}-${month}-01`))
  const previousMonth = new Date(nextMonthFirstDay.getTime() - ONE_DAY_MILLISECONDS)

  return previousMonth.getDate()
}

export default (dateString: string): Range => {
  const current = new Date(dateString)
  const currentMonth: number = current.getUTCMonth() + 1
  const nextMonth: number = currentMonth + 1
  const isCrossYear = nextMonth === 0

  let year = current.getUTCFullYear()

  if (isCrossYear) {
    year + 1
  }

  const end = getEndDate(new Date(`${year}-${nextMonth}-01`))

  return {
    start: 1,
    end
  }
}
