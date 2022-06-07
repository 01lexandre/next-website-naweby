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
