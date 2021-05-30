import mongoose, {Schema} from 'mongoose';

const noticiaSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength:150,
        unique:true
    },
        author: {
            type: String,
            required: true,
            maxLength: 150
        },
    // No se si usar los Date de moongose o string
    date:{
        type: String,
        required: true,
        maxLength:11,

    },
    preview: {
        type: String,
        required: true,
        maxLength:200,
        unique:true

    },
    detail: {
        type:String,
        required: true,
        unique:true
    },
    // como hago para que poner una categoria que este en la "coleccion" de categorias? desde el front?
    category: {
        type:String,
        required: true,
        maxLength: 50
    },
    //foto obligatoria
    img: {
        type:String,
        required: true,
    },
    imgalt: {
        type:String,
        required: true,
        maxLength:150
    },
    //imagen opcional
    img2: {
        type:String,
        
    },
    imgalt2: {
        type:String,
        maxLength:150
    },
    //En algun lado del back hay que poner que si existen 3 destacadas, no se pueden guardar mas.
    destacada: {
        type: Boolean
    }
});

const Noticia = mongoose.model('news', noticiaSchema);

export default Noticia;
