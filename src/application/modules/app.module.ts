import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infraestructure/database.module';
import { InfrastructureModule } from './infraestructure/infraestructure.module';
import { ControllersModule } from './presentation/controllers/controllers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    DatabaseModule,
    InfrastructureModule,
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
