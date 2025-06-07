import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { RecipeRepository } from 'src/domain/repository/recipes/recipes.interface';
import { Recipe } from 'src/domain/entities/recipe';

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(
    @Inject(RecipeRepository)
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(id: string): Promise<Recipe> {
    const recipe = await this.recipeRepository.findById(id);

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return recipe;
  }
}
