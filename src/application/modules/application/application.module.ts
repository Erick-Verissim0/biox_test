import { Module } from '@nestjs/common';
import { PostRecipesUseCase } from 'src/application/usecases/recipes/post_recipes_usecases';
import { DomainModule } from '../domain/domain.module';
import { GetAllRecipesUseCase } from 'src/application/usecases/recipes/find_all_recipes.usecase';
import { GetRecipeByIdUseCase } from 'src/application/usecases/recipes/find_one_recipes.usecase';

@Module({
  imports: [DomainModule],
  providers: [PostRecipesUseCase, GetAllRecipesUseCase, GetRecipeByIdUseCase],
  exports: [PostRecipesUseCase, GetAllRecipesUseCase, GetRecipeByIdUseCase],
})
export class ApplicationModule {}
