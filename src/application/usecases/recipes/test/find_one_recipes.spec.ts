import { GetRecipeByIdUseCase } from '../find_one_recipes.usecase';
import { RecipeRepository } from '../../../../domain/repository/recipes/recipes.interface';
import { Recipe } from '../../../../domain/entities/recipe';
import { NotFoundException } from '@nestjs/common';

describe('GetRecipeByIdUseCase', () => {
  let useCase: GetRecipeByIdUseCase;
  let mockRepo: jest.Mocked<RecipeRepository>;

  beforeEach(() => {
    mockRepo = {
      findById: jest.fn(),
    } as any;

    useCase = new GetRecipeByIdUseCase(mockRepo);
  });

  it('should return recipe by id', async () => {
    const recipe = new Recipe(
      '1',
      'Cake',
      ['flour'],
      'Yummy',
      new Date(),
      new Date(),
    );
    mockRepo.findById.mockResolvedValue(recipe);

    const result = await useCase.execute('1');

    expect(mockRepo.findById).toHaveBeenCalledWith('1');
    expect(result).toEqual(recipe);
  });

  it('should throw NotFoundException if recipe not found', async () => {
    mockRepo.findById.mockResolvedValue(null);

    await expect(useCase.execute('not-found')).rejects.toThrow(
      NotFoundException,
    );
  });
});
