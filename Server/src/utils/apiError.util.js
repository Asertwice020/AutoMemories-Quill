class ApiError extends Error {
  constructor(
    statusCode = null,
    message = 'API ERROR HAPPENED (DEFAULT-MSG)',
    errors = [],
    stack = ""
  ) {
    super( message )
    this.statusCode = statusCode
    this.message = message
    this.errors = errors
    this.data = null
    this.success = false

    stack ? this.stack = stack : Error.captureStackTrace(this, this.constructor);
  }
}

export { ApiError }