import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeRepository } from 'src/domain/repository/recipes/recipes.interface';
import { RecipeModel } from 'src/infraestructure/config/typeorm/models/recipe.typeorm';
import { PgRecipeRepository } from 'src/infraestructure/repository/recipe/recipe.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeModel])],
  providers: [
    PgRecipeRepository,
    { provide: RecipeRepository, useClass: PgRecipeRepository },
  ],
  exports: [RecipeRepository],
})
export class InfrastructureModule {}
