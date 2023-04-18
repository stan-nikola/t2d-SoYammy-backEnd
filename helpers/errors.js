class SoYummyAppError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ValidationError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class RequestError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

module.exports = { SoYummyAppError, ValidationError, RequestError };
