import mongoose from 'mongoose';

const categorysSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model('Category', categorysSchema);
