import { Inject, Injectable } from '@nestjs/common';
import { Recipe } from 'src/domain/entities/recipe';
import { RecipeRepository } from 'src/domain/repository/recipes/recipes.interface';
import { v4 as uuidv4 } from 'uuid';

interface CreateRecipeDTO {
  title: string;
  ingredients: string[];
  description: string;
}

@Injectable()
export class PostRecipesUseCase {
  constructor(
    @Inject(RecipeRepository)
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(data: CreateRecipeDTO): Promise<Recipe | null> {
    try {
      const recipe = new Recipe(
        uuidv4(),
        data.title,
        data.ingredients,
        data.description,
        new Date(),
        new Date(),
      );

      await this.recipeRepository.postRecipe(recipe);

      return recipe;
    } catch (error) {
      throw new Error(`Error in usecase: ${error}`);
    }
  }
}
