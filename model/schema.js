import mongoose, { Schema } from "mongoose";

const FormSchema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, trim: true },
});

const Form = mongoose.models.Form || mongoose.model("Form", FormSchema);

export default Form;
