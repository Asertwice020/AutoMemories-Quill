class ApiResponse extends Error {
  constructor(
    statusCode = null,
    message = "API IS WORKING! (DEFAULT-MSG)",
    data = undefined,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };