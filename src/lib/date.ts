export function formatDate(timestamp: string): string {
  const date = new Date(timestamp)
  const year = date.getUTCFullYear()
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const day = date.getUTCDate().toString().padStart(2, '0')
  return `${year}. ${month}. ${day}`
}

export function getTimeDifference(createdAt: string): string {
  const createdDate = new Date(createdAt)
  const currentDate = new Date()
  const timeDifferenceInMilliseconds =
    currentDate.getTime() - createdDate.getTime()
  const timeDifferenceInMinutes = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60),
  )

  if (timeDifferenceInMinutes < 2) {
    return '1 minute ago'
  }

  if (timeDifferenceInMinutes <= 59) {
    return `${timeDifferenceInMinutes} minutes ago`
  }

  const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60)
  if (timeDifferenceInHours < 24) {
    return timeDifferenceInHours === 1
      ? '1 hour ago'
      : `${timeDifferenceInHours} hours ago`
  }

  const timeDifferenceInDays = Math.floor(timeDifferenceInMinutes / (60 * 24))
  if (timeDifferenceInDays < 30) {
    return timeDifferenceInDays === 1
      ? '1 day ago'
      : `${timeDifferenceInDays} days ago`
  }

  const timeDifferenceInMonths = Math.floor(
    timeDifferenceInMinutes / (60 * 24 * 30),
  )
  if (timeDifferenceInMonths < 12) {
    return timeDifferenceInMonths === 1
      ? '1 month ago'
      : `${timeDifferenceInMonths} months ago`
  }

  const timeDifferenceInYears = Math.floor(
    timeDifferenceInMinutes / (60 * 24 * 30 * 12),
  )
  const remainingMonths = Math.floor(
    (timeDifferenceInMinutes % (60 * 24 * 30 * 12)) / (60 * 24 * 30),
  )
  if (remainingMonths === 0) {
    return timeDifferenceInYears === 1
      ? '1 year ago'
      : `${timeDifferenceInYears} years ago`
  }

  return `${timeDifferenceInYears}.${remainingMonths} years ago`
}
