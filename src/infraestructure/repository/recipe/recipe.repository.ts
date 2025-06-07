import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/domain/entities/recipe';
import { RecipeRepository } from 'src/domain/repository/recipes/recipes.interface';
import { RecipeModel } from 'src/infraestructure/config/typeorm/models/recipe.typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PgRecipeRepository implements RecipeRepository {
  constructor(
    @InjectRepository(RecipeModel)
    private readonly recipeRepository: Repository<RecipeModel>,
  ) {}

  async postRecipe(recipe: Recipe): Promise<Recipe | null> {
    try {
      const entity = this.recipeRepository.create({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients,
        createdAt: recipe.createdAt,
        updatedAt: recipe.updatedAt,
      });

      const saveRecipe = await this.recipeRepository.save(entity);

      return new Recipe(
        saveRecipe.title,
        saveRecipe.description,
        saveRecipe.ingredients,
        saveRecipe.id,
        saveRecipe.createdAt,
        saveRecipe.updatedAt,
      );
    } catch (error) {
      throw new Error(`Error in repository: ${error}`);
    }
  }

  async findAll(): Promise<Recipe[]> {
    const entities = await this.recipeRepository.find();
    return entities.map(
      (entity) =>
        new Recipe(
          entity.title,
          entity.description,
          entity.ingredients,
          entity.id,
          entity.createdAt,
          entity.updatedAt,
        ),
    );
  }

  async findById(id: string): Promise<Recipe | null> {
    const entity = await this.recipeRepository.findOneBy({ id });

    if (!entity) return null;

    return new Recipe(
      entity.title,
      entity.description,
      entity.ingredients,
      entity.id,
      entity.createdAt,
      entity.updatedAt,
    );
  }
}
