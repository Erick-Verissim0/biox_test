import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from 'src/domain/entities/recipe';
import { config } from 'src/infraestructure/config/environment/enviroment.confg';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const getConfig = await config();

        return {
          type: 'postgres',
          host: getConfig.databaseHost,
          port: getConfig.databasePort,
          username: getConfig.databaseUsername,
          password: getConfig.databasePassword,
          database: getConfig.databaseName,
          entities: [Recipe],
          migrations: ['../../database/migrations/*.ts'],
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
