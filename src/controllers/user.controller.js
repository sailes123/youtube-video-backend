import asyncHandler from '../utils/asyncHandlers'

const registerUser = asyncHandler( async (req, res) => {
        res.status(200).json({
                message: "ok"
        })
})
