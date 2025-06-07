import { Recipe } from 'src/domain/entities/recipe';

export interface RecipeRepository {
  postRecipe(recipeData: Partial<Recipe>): Promise<Recipe | null>;
  findAll(): Promise<Recipe[]>;
  findById(id: string): Promise<Recipe | null>;
}

export const RecipeRepository = Symbol('RecipeRepository');
