import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import connectDB from "./config/db.js";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// __filename y __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Routes
import PasswordHistory from "./routes/PasswordHistory.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import areaRoutes from "./routes/areaRoutes.js";
import bookCategoriesRoutes from "./routes/bookCategoriesRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import contactUsRoutes from "./routes/contactRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import docenteRoutes from "./routes/docenteRoutes.js";
import estudianteRoutes from "./routes/estudianteRoutes.js";
import formaPagoRouter from "./routes/formaPagoRoutes.js";
import homePageRoutes from "./routes/homePageRoutes.js";
import logsLoginRoutes from "./routes/logsLoginRoutes.js";
import logsSistemaRoutes from "./routes/logsSistemaRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import postCategoriesRoutes from "./routes/postCategoriesRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import postgradoCurso from "./routes/postgradoCurso.js";
import productCategoriesRouter from "./routes/productCategoryRouter.js";
import productRouter from "./routes/productoRoutes.js";
import pulpiComentariosRouter from "./routes/pulpiComentariosRouter.js";
import rolesRoutes from "./routes/rolesRoutes.js";
import sceRoutes from "./routes/sceRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import universityRoutes from "./routes/universityRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import zaRoutes from "./routes/zaRoutes.js";
import {
  initializeAboutUs,
  initializeContactUs,
  initializeDashboard,
  initializeHomePage,
  initializeProductCategories,
  initializeProducts,
  initializePulpiComentarios,
  initializeSCE,
  initializeZA,
} from "./utils/initializers.js";

dotenv.config();

connectDB().then(() => {
  initializeAboutUs();
  initializeContactUs();
  initializeHomePage();
  initializeSCE();
  initializeZA();
  initializeProducts();
  initializeProductCategories();
  initializeDashboard();
  initializePulpiComentarios();
  console.log("Database connected successfully.");
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Rutas principales
app.use("/api/users", userRoutes);
app.use("/api/roles", rolesRoutes); 
app.use("/api/passwords", PasswordHistory); 
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/post-categories", postCategoriesRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/homepage", homePageRoutes);
app.use("/api/contact", contactUsRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/universities", universityRoutes);
app.use("/api/docente", docenteRoutes);
app.use("/api/estudiantes", estudianteRoutes);
app.use("/api/postgradoCurso", postgradoCurso);
app.use("/api/schedules", scheduleRoutes);
app.use("/api/sce", sceRoutes);
app.use("/api/za", zaRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/book-categories", bookCategoriesRoutes);
app.use("/api/products", productRouter);
app.use("/api/products/categories", productCategoriesRouter);
app.use("/api/formaPago", formaPagoRouter);
app.use("/api/order", orderRoutes);
app.use("/api/areas", areaRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/pulpi", pulpiComentariosRouter);

app.use("/api/logs", logsLoginRoutes);
app.use('/api/logsSistema', logsSistemaRoutes);

// Archivos estáticos
app.use("/uploads", express.static(join(__dirname, "uploads")));


// Middleware de errores
app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
