// const asyncHandler = (fn) => async (params) => {}
// const asyncHandler = (fn) => { async (params) => {} }
// const asyncHandler = (fn) => { async (params) => {try-catch} }

const asyncHandler = (requestHandler) => async(req, res, next) => {
  try {
    await requestHandler(req, res, next)
  } catch (error) {
    res.status(error?.code || 500).json({
      message: error?.message || "InternaInternal Server Error",
      success: false
    });
    next(error)
  }
}

export { asyncHandler }