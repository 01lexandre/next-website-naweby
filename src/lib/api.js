const API_URL = 'https://api-prod.naweby.com.br/v1/'
import axios from 'axios';

export const getData = obj => obj.data
const setFormData = (obj) => {
  const formData = new FormData();
  Object.keys(obj).forEach(key => formData.append(key, obj[key]));
  return formData;
}
const headers = {
  'Content-Language': 'pt-BR',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers' : 'Content-Type,Authorization,true'
}
const headersToken = {
  headers: {
    'Content-Language': 'pt-BR',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers' : 'Content-Type,Authorization,true',
    'Authorization' : `Bearer ${getTokenStorage}`,
  }
}
export async function postCreateUser(form) {
  const data = await axios.post(API_URL+'auth/register?include=current_account,tenants', setFormData(form), {headers}).then(getData)
  return data
}
export async function postCreateAccount(form) {
  axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('NUI')}`
  const data = await axios.post(API_URL+'accounts', setFormData(form), {headers}).then(getData)
  return data
}

export async function getSearchDocument (document) {
  const data = await axios.get('https://cnpj.srvco.re/fnfv1/companies/'+document.replace(/[^\d]+/g, '')).then((x) => {return x.data.data})
  return data
}

export async function getSearchCidade (payload) {
  // console.log('qui', localStorage.getItem('NUI'))
  axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.getItem('NUI')}`
  const data = await axios.get('https://api.naweby.com.br/v1/geo/cities?search='+payload, {headers} ).then((x) => {
    console.log(x)
    return x.data.data
  })
  return data
}

export async function setTokenStorage(payload) {
  localStorage.setItem('NUI', payload)
  return true
}
export async function getTokenStorage() {
  return localStorage.getItem('NUI');
}
