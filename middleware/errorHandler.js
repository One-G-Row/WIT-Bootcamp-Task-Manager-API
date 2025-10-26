const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        return res.status(400).json({
            success: false,
            message: 'InvalidID format'
        });
    }
    // Mongoose validationerror
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({
            success: false,
            message: messages.join(',')
        });
    }
    // Mongoose duplicatekey error
    if (err.code === 11000) {
        return res.status(400).json({
            success: false,
            message: 'Duplicatefield value entered'
        });
    }
    // Default error
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error'
    });
};

module.exports = errorHandler;