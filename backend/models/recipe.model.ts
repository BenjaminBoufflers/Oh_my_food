import mongoose, { Document, model, Schema } from "mongoose";

interface IRecipe extends Document {
  title: string;
  description: string;
  categorie: "all" | "entree" | "dish" | "dessert" | "snack" | "cake";
}

const recipeSchema = new Schema<IRecipe>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categorie: { type: String,
  required: true,
  enum: [ "all" , "entree" , "dish" , "dessert" , "snack" , "cake" ] },
});

const Recipe = model<IRecipe>('Recipê', recipeSchema);

export default Recipe;
