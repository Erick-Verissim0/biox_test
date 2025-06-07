import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostRecipeDTO } from 'src/application/dto/recipe/post_recipe.dto';
import { GetAllRecipesUseCase } from 'src/application/usecases/recipes/find_all_recipes.usecase';
import { GetRecipeByIdUseCase } from 'src/application/usecases/recipes/find_one_recipes.usecase';
import { RecipeRepository } from 'src/domain/repository/recipes/recipes.interface';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipeController {
  constructor(
    @Inject(RecipeRepository)
    private readonly recipeRepository: RecipeRepository,
    private readonly getAllRecipesUseCase: GetAllRecipesUseCase,
    private readonly getRecipeByIdUseCase: GetRecipeByIdUseCase,
  ) {}

  @Post()
  async postRecipe(@Body() data: PostRecipeDTO) {
    return this.recipeRepository.postRecipe(data);
  }

  @Get()
  async getAllRecipes() {
    return this.recipeRepository.findAll();
  }

  @Get(':id')
  async getRecipeById(@Param('id') id: string) {
    return this.recipeRepository.findById(id);
  }
}
