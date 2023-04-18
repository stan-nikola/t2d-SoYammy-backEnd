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

class LoginError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

class ValidationError extends SoYummyAppError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

module.exports = {
  SoYummyAppError,
  RegistrationConflict,
  LoginError,
  ValidationError,
};
