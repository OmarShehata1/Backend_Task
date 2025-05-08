const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 2,
        },
        description: {
            type: String,
            required: true,
            minlength: 10,
        },
       image : {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
});

module.exports = mongoose.model('Course', courseSchema, 'course');
