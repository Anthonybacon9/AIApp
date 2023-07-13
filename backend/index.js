const mongo = require('./mongo');
const userSchema = require('./schemas/user-schema');

const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to MongoDB!');
      const user = {
        email:'test@email.com',
        username: 'joe',
        password: 'Password'
      }
      
      await new userSchema(user).save()

      await mongoose.connection.close();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
})
}

connectToMongoDB();