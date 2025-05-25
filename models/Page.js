import mongoose from 'mongoose';
import AboutUsSchema from './About.js';
import ContactUsSchema from './ContactUs.js';
import HomePageSchema from './HomePage.js';
import Sce from './Sce.js';
import Za from './zonaAprendizaje.js';


const { Schema, model } = mongoose;

const PageSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    home: { type: HomePageSchema, required: false },
    contact: { type: ContactUsSchema, required: false },
    about: { type: AboutUsSchema, required: false },
    sce: { type: Sce, required: false },
    za: { type: Za, required: false },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const Page = model('Page', PageSchema);

export default Page;
