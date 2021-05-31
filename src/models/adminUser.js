import mongoose, {Schema} from 'mongoose';

const adminShema = new Schema({
    name:{
        type: String,
        required: true,
        maxLength:150,
        unique: true
    },
    email:{
        type: String,
        required: true,
        maxLength:150,
        unique:true
    },
    password:{
        type: String,
        required:true,
        maxLength:50,
        }, 
        online:{
        type: Boolean,
      }
});

const AdminUser = mongoose.model('admin', adminShema);

export default AdminUser;

