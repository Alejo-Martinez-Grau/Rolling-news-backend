import AdminUser from '../models/adminUser';

const adminUserCtrl = {};

adminUserCtrl.getPrueba = (req, res) => {
    res.send('Hola desde el servidor y controller de adminV2')
};

adminUserCtrl.newAdminUser = async (req, res) => {
    try{
        const newAdmin = new AdminUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            online: req.body.online
        });

        await newAdmin.save();
        res.status(201).json({
            mensaje: "Nuevo Usuario Admin creado"
        });
       
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "ocurrio un error al intentar crear un nuevo administrador"
        });
    };
};

adminUserCtrl.listarAdmins = async (req, res) => {
    try{
        const adminArray = await AdminUser.find();
        res.status(200).json(adminArray);

    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Ocurrio un error al intentar obtener el usuario administrador"
        });

    };
};

export default adminUserCtrl;