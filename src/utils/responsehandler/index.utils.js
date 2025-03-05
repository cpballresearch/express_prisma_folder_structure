import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Constants } from '../constant.utils.js';
import ResponseEntity from './responseentity.utils.js';
dotenv.config();

// Response types enum
const ResponseType = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning'
};

class ResponseBuilder {
  static build(options = {}) {
    const {
      result = null,
      statusCode = Constants.HTTPOK,
      status = Constants.SUCCESS_STATUS,
      message = '',
    } = options;

    const response = new ResponseEntity(result, statusCode, status, message);
    return response;
  }

  static send(res, options) {
    const response = this.build(options);
    return res.status(options.statusCode || Constants.HTTPOK).json(response);
  }
}

// Generic response handlers
const handleResponse = (res, options) => {
  return ResponseBuilder.send(res, options);
};

const handleError = async (res, error, statusCode = Constants.HTTPINTERNALSERVERERROR) => {
  console.log(error);

  return handleResponse(res, {
    statusCode,
    status: Constants.FAILED_STATUS,
    message: error.message,
    type: ResponseType.ERROR
  });
};

const handleSuccess = (res, result, message, statusCode = Constants.HTTPOK) => {
  return handleResponse(res, {
    result,
    statusCode,
    status: Constants.SUCCESS_STATUS,
    message,
    type: ResponseType.SUCCESS
  });
};

// Specific handlers using the generic handlers
const handleLogin = (res, user) => {
  const users = { userId: user?.id };
  const authToken = jwt.sign(users, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });

  return handleSuccess(res,
    { authToken, user },
    Constants.LOGIN_SUCCESS_MESSAGE
  );
};

const handleDataCreation = (res, result) => {
  return handleSuccess(res,
    result,
    Constants.DATA_SAVE_MESSAGE,
    Constants.HTTPCREATED
  );
};

const handleDataRetrieval = (res, result) => {
  return handleSuccess(res,
    result,
    Constants.DATA_FETCH_MESSAGE
  );
};

const handleNotFound = (res, message = Constants.DATA_NOT_FOUND_MESSAGE) => {
  return handleResponse(res, {
    statusCode: Constants.HTTPNOTFOUND,
    status: Constants.FAILED_STATUS,
    message,
    type: ResponseType.ERROR
  });
};

const handleBadRequest = (res, message = Constants.INVALID_DATA_ERROR_MESSAGE) => {
  return handleResponse(res, {
    statusCode: Constants.HTTPBADREQUEST,
    status: Constants.FAILED_STATUS,
    message,
    type: ResponseType.ERROR
  });
};

const handleUnauthorized = (res) => {
  return handleResponse(res, {
    statusCode: Constants.UNAUTHORIZED,
    status: Constants.FAILED_STATUS,
    message: Constants.UNAUTHORIZED_MESSAGE,
    type: ResponseType.ERROR
  });
};

export {
  handleBadRequest, handleDataCreation,
  handleDataRetrieval, handleError, handleLogin, handleNotFound, handleResponse, handleSuccess, handleUnauthorized, ResponseBuilder,
  ResponseType
};

