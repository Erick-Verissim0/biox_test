import { IsString, IsNotEmpty, IsArray, ArrayMinSize } from 'class-validator';

export class PostRecipeDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  ingredients: string[];

  constructor(data: Partial<PostRecipeDTO>) {
    Object.assign(this, data);
  }
}
