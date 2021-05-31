import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
//import adminRoutes from './routes/admin.routes'
import adminRoutes from './routes/adminUser.routes'
import noticiasRoutes from './routes/noticias.routes'
import categoriasRoutes from './routes/categorias.routes'

//setup
//instancia de express
const app = express();

//creamos el puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('estoy usando el puerto ' + app.get('port'));
    
});

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

//rutas
app.use('/api/rollingnews', noticiasRoutes);
app.use('/api/rollingnews', adminRoutes);
app.use('/api/rollingnews', categoriasRoutes);
