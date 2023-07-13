const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://anthonybacon9:Tillybacon1@cluster0.g3zc3dq.mongodb.net/cluster0?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}