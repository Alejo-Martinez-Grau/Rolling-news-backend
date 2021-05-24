import bcryptjs from "bcryptjs";

//emailhash $2a$08$YOQoHQrnsllKsjHVW.1w8uCOM6FFBLtvX22h.ODG.l33SXHS5Hw9O
//passwordhash $2a$08$PPhD8VsCGvjT70noCYkyseWE1Jdg3ct5EClaTXfPtxhtAcRXe9WZW

const adminCtrl = {};

adminCtrl.getAdmin = async (req, res) => {
  //datos a cargar a postman
  const email = req.body.email;
  const password = req.body.password;
  //comprobamos que los datos de administrador son correctos
  const passHash = "$2a$08$PPhD8VsCGvjT70noCYkyseWE1Jdg3ct5EClaTXfPtxhtAcRXe9WZW";
  const adminHash = "$2a$08$YOQoHQrnsllKsjHVW.1w8uCOM6FFBLtvX22h.ODG.l33SXHS5Hw9O";
  let comparePass = await bcryptjs.compareSync(password, passHash);
  let compareAdmin = await bcryptjs.compareSync(email, adminHash);

  if (compareAdmin && comparePass) {
    res.json({
      message: "Autentificación exitosa!",
    });
  } else {
    res.json({
      message:
        "Datos inválidos, revise el usuario y contraseña de administrador.",
    });
  }
};

adminCtrl.getPrueba = (req, res) => {
  res.json({
    message: "Hola desde el servidor y controlador del admin",
  });
};

export default adminCtrl;
