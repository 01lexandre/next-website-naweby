export const getError = (err) => {
  let errorInput = err.response.data.data.error.errors
  let errorI = {}
  let x
  for (x in errorInput) {
    console.log(x, errorInput[x][0])
    errorI[x] = errorInput[x][0]
  }
  let error = {
    'errors': errorI,
    'message': err.response.data.data.error.message
  }
  return error
}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)


export const setRGBDataURL = (r, g, b) => {
  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}
