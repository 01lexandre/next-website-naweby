import axios from "axios";
const URL_CONSULTA = 'https://consulta-pecas-api.naweby.com.br/'


export async function searchString (string) {
  const data = await axios.get(URL_CONSULTA+'?search='+string).then((x) => {return x.data.data})
  return data
}

export async function searchMontadora (string) {
  const data = await axios.get(URL_CONSULTA+'montadoras?search='+string).then((x) => {return x.data.data})
  return data
}
export async function searchGrupo (string) {
  const data = await axios.get(URL_CONSULTA+'grupos'+string).then((x) => {return x.data.data})
  return data
}
export async function searchCategoria (string) {
  const data = await axios.get(URL_CONSULTA+'categorias'+string).then((x) => {return x.data.data})
  return data
}
export async function searchAplicacao (string) {
  const data = await axios.get(URL_CONSULTA+string).then((x) => {return x.data.data})
  return data
}
export async function searchProduto (string) {
  const data = await axios.get(URL_CONSULTA+string).then((x) => {return x.data.data})
  return data
}
export async function getAllFabricantes (string) {
  const data = await axios.get('https://62bf404c0bc9b125616a7feb.mockapi.io/v1/fabricantes'+string).then((x) => {return x})
  return data
}
