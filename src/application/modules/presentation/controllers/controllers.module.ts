import { Module } from '@nestjs/common';
import { ApplicationModule } from '../../application/application.module';
import { RecipeController } from 'src/presentation/controllers/recipe/recipe.controller';
import { InfrastructureModule } from '../../infraestructure/infraestructure.module';

@Module({
  imports: [ApplicationModule, InfrastructureModule],
  controllers: [RecipeController],
})
export class ControllersModule {}
