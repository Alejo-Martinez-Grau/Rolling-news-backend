import Categoria from '../models/categoria';

const categoriasCtrl = {};

categoriasCtrl.getPrueba = (req, res) => {
res.send('hola desde el servidor y controller de categorias')
};

categoriasCtrl.categoriaNueva = async (req,res) =>{
    try{
        const nuevaCategoria = new Categoria({
            
            name: req.body.name
        });

        await nuevaCategoria.save();
        res.status(201).json({
            mensaje: 'categoria agregada a la BD'
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: 'ocurrio un error al intentar agregar una nueva ctegoria'
        });
    };
};

categoriasCtrl.listarCategorias = async (req,res) => {
    try{
        const arregloCategorias = await Categoria.find();

        res.status(200).json(arregloCategorias);
    }catch(error){
        console.log(error);

        res.status(500).json({
            mensaje: "ocurrio un error al intentar listar las categorias"
        });
    };
};

categoriasCtrl.eliminarCategoria = async (req,res) => {
    try{
        console.log(req.params._id);
        await Categoria.findByIdAndDelete(req.params._id);
        res.status(200).json({
            mensaje: "categoria eliminada correctamente"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "ocurrio un error al intentar eliminar una categoria"
        });
    };
};

categoriasCtrl.editarCategoria = async (req,res) =>{
    try{
        await Categoria.findByIdAndUpdate(req.params._id, req.body);
        res.status(200).json({
            mensaje:"la categoria se modificó con éxito"
        });
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'error: no se pudo editar la categoria'
        });

    };


}

categoriasCtrl.obtenerCategoria  = async (req,res) =>{
    try{
        const buscarCategoria = await Categoria.findById(req.params._id);
        res.status(200).json(buscarCategoria);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'no se pudo encontrar la categoria'
        });
    };
};

export default categoriasCtrl;