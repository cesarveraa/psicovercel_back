import mongoose from 'mongoose';

const { Schema } = mongoose;
// Esquema de visitas
const visitaSchema = new Schema({
    userId: String,
    entrada: Date,
    salida: Date,
    duracion: Number, // en minutos
});

// Esquema principal del dashboard
const dashboardSchema = new Schema({
    totalCompartidos: Number,
    totalVisualizaciones: Number,
    nuevosUsuarios: Number,
    tiempoPromedioVisita: Number,
    compartidos: [{
        user: String,
        date: String,
        title: String,
        category: String,
    }],
    compartidosPorPlataforma: [{
        plataforma: String,
        categorias: [{
            nombre: String,
            valor: Number,
        }]
    }],
    eventosAsistidos: {
        total: Number,
        mensaje: String,
    },
    estudiantesPorSexo: [{
        sexo: String,
        valor: Number,
    }],
    visitas: [visitaSchema], // Incorporar el esquema de visitas
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);
export default Dashboard;