// const timestamp = 1678695727 // UNIX timestamp
// const date = new Date(timestamp * 1000) // умножаем на 1000, чтобы получить миллисекунды
// const year = date.getFullYear()
// const month = (date.getMonth() + 1).toString().padStart(2, '0')
// const day = date.getDate().toString().padStart(2, '0')
// const hours = date.getHours().toString().padStart(2, '0')
// const minutes = date.getMinutes().toString().padStart(2, '0')
// const seconds = date.getSeconds().toString().padStart(2, '0')
// const formattedTime =
//   year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
// console.log(formattedTime)

export const convertTime = (time) => {
  const date = new Date(time * 1000)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const formattedTime = hours + ':' + minutes
  return formattedTime
}
