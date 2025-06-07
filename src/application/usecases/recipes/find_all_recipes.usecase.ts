import { Injectable, Inject } from '@nestjs/common';
import { RecipeRepository } from 'src/domain/repository/recipes/recipes.interface';
import { Recipe } from 'src/domain/entities/recipe';

@Injectable()
export class GetAllRecipesUseCase {
  constructor(
    @Inject(RecipeRepository)
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async execute(): Promise<Recipe[]> {
    return this.recipeRepository.findAll();
  }
}
