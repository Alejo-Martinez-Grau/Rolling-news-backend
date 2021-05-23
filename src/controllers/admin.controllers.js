import bcryptjs from 'bcryptjs';

const adminCtrl = {};

adminCtrl.getAdmin = async (req, res) => {
    //datos a cargar a postman
    const email = req.body.email;
    const password = req.body.password;
    //comprobamos que los datos de administrador son correctos
    if(email === 'aaa@gmail.com' && password === '123'){
        let passwordHash = await bcryptjs.hash(password, 8);
        res.json({
            message: "Autentificación exitosa!",
            passwordHash: passwordHash
        });
    }else{
        res.json({
            message: "datos inválidos"
        });
    };
};

adminCtrl.getPrueba = (req, res) => {
    //res.send('Hola desde el servidor');
    let hashSaved = '$2a$08$PPhD8VsCGvjT70noCYkyseWE1Jdg3ct5EClaTXfPtxhtAcRXe9WZW'
    let compare = bcryptjs.compareSync('123', hashSaved);
    if(compare){
        res.json('Ingreso exitoso!');
    }else{
        res.json('los datos ingresados no son correctos');
    }
    };

export default adminCtrl;