// ResponseObject.js

class ResponseEntity {
  constructor(result, statusCode, status, message) {
    this.result = result;
    this.statusCode = statusCode;
    this.status = status;
    this.message = message;
  }
}

export default ResponseEntity;
