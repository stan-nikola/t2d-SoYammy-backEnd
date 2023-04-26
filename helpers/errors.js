class SoYummyAppError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class RegistrationConflict extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

class InvalidEmail extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class LoginError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class NotAuthorizedError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class FileError extends SoYummyAppError {
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

class NonExistingParamsError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class ParamsConflictError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

module.exports = {
  SoYummyAppError,
  RegistrationConflict,
  InvalidEmail,
  LoginError,
  NotAuthorizedError,
  FileError,
  ValidationError,
  RequestError,
  NonExistingParamsError,
  ParamsConflictError,
};
