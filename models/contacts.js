module.exports = (mongoose) => {
    const Contact = mongoose.model(
        'contacts',
        mongoose.Schema(
            {
                firstName: { type: String, required: true },
                lastName: { type: String, required: true },
                email: { type: String, required: true },
                favoriteColor: { type: String, required: true },
                birthday: { type: String, required: true },
            },
            { timestamps: true }
        )
    );

    return Contact;
};