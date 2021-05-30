import Noticia from '../models/noticia'

const noticiaCtrl = {};

noticiaCtrl.getPrueba = (req, res) => {

    res.send('Hola desde el servidor y controller de noticias');
};

noticiaCtrl.noticiaNueva = async (req, res) => {

    try{
        //agregar validaciones
        const nuevaNoticia = new Noticia({
      title: req.body.title,
      author: req.body.author,
      date: req.body.date,
      preview: req.body.preview,
      detail: req.body.detail,
      category: req.body.category,
      img: req.body.img,
      imgalt: req.body.imgalt,
      img2: req.body.img2,
      imgalt2: req.body.imgalt,
      destacada: req.body.destacada
        })
        await nuevaNoticia.save();

        res.status(201).json({
            mensaje: 'noticia agregada a la BD :-)'
        });
    }catch(error){
        console.log(error);

        res.status(500).json({
            mensaje: 'ocurrio un error al intentar agregar una noticia a la BD'
        });

    }
};

noticiaCtrl.listarNoticias = async (req, res) => {
        try{
            const arregloNoticia = await Noticia.find();

            res.status(200).json(arregloNoticia);

        }catch(error){
            console.log(error)
            res.status(500).json({
                mensaje: "ocurrio un error al intentar listar las noticias"
            });

        };
};


noticiaCtrl.eliminarNoticia = async (req, res) => {
    try{
        console.log(req.params._id);

        await Noticia.findByIdAndDelete(req.params._id);
        res.status(200).json({
            mensjae: "El producto fué eliminado"
        });

    }catch(error){
        console.log(error);

        res.status(500).json({
            mensaje: "ocurrio un error al intentar eliminar la noticia "
        });


    };
};

noticiaCtrl.editarNoticia = async (req, res) => {
    try{
        await Noticia.findByIdAndUpdate(req.params._id, req.body);
        res.status(200).json({
            mensaje: "los datos de la noticia fueron modificados"
        });
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "no se puedo encontrar el producto"
        });
    };
};

noticiaCtrl.obtenerNoticia = async (req,res) => {
    try{
        const noticiaBuscada = await Noticia.findById(req.params._id);
        res.status(200).json(noticiaBuscada);

    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "no se puedo encontrar la noticia"
        });
    };
};


export default noticiaCtrl;