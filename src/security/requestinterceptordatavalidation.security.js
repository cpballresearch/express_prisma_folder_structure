import {URL} from 'url';
import { handleBadRequest } from '../utils/responsehandler/index.utils.js';

const isValidUrlString = (urlString) => {
  return !(urlString.includes('%') || urlString.includes('script'));
};

const isValidQueryParam = (value) => {
  return /^[a-zA-Z0-9\s_@.-]*$/.test(value) && !value.includes('--');
};

const validateQueryParams = (queryParams) => {
  for (const key in queryParams) {
    if (!Object.hasOwn(queryParams, key)) continue;
    const values = Array.isArray(queryParams[key]) ? queryParams[key] : [queryParams[key]];
    if (values.some(val => !isValidQueryParam(val))) return false;
  }
  return true;
};

//* Define the middleware function
export default function requestInterceptorDataValidation(req, res, next) {
  console.log(req.originalUrl + ' - Check data sanctity');

  if (!isValidUrlString(req.originalUrl)) {
    return handleBadRequest(res);
  }

  const fullUrl = new URL(req.originalUrl, `http://${req.headers.host}`);
  if (!validateQueryParams(fullUrl.query)) {
    return handleBadRequest(res);
  }

  next();
}

