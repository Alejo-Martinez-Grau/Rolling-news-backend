import mongoose, {Schema} from 'mongoose';

const categoriasSchema = new Schema({
    name:{
        type: String,
        maxLength:150,
        unique:true
    }
});

const Categoria = mongoose.model('categories', categoriasSchema);

export default Categoria;