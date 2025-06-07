import { configDotenv } from 'dotenv';
import { DataSource } from 'typeorm';
import { RecipeModel } from './models/recipe.typeorm';
import { Recipe1748994727691 } from '../../../../database/migrations/1748994727691-recipe';

configDotenv();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE || 'biox',
  entities: [RecipeModel],
  migrations: [Recipe1748994727691],
  synchronize: false,
});
