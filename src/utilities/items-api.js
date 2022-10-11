import { getToken } from './users-service';

const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE, it's
// only provided here to remind you to follow RESTful routing, etc.
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

async function sendRequest(url, method = 'GET', payload = null){
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  //if you want to send data to server
  if (payload) {
    options.headers =  { 'Content-Type': 'application/json'};
    options.body = JSON.stringify(payload)
  }
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  //if there is any data
  //this depends on HTTP method such as 'GET' "POST" etc
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  // HTTP status code 200 means everything went fine
  if (res.ok) return res.json();

  throw new Error('Bad Request');
}