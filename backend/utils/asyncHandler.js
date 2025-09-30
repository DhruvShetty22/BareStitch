const asyncHandler = (reqHandler) => {
    (req, res, next) => {
        Promise.resolve(reqHandler(req, res, next)).catch((err) => {
            console.error("Async error:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
    };
};

export default asyncHandler;
