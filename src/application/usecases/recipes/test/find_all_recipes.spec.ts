import { GetAllRecipesUseCase } from '../find_all_recipes.usecase';
import { RecipeRepository } from '../../../../domain/repository/recipes/recipes.interface';
import { Recipe } from '../../../../domain/entities/recipe';

describe('GetAllRecipesUseCase', () => {
  let useCase: GetAllRecipesUseCase;
  let mockRepo: jest.Mocked<RecipeRepository>;

  beforeEach(() => {
    mockRepo = {
      findAll: jest.fn(),
    } as any;

    useCase = new GetAllRecipesUseCase(mockRepo);
  });

  it('should return all recipes', async () => {
    const recipes: Recipe[] = [
      new Recipe('1', 'Pizza', ['cheese'], 'Delicious', new Date(), new Date()),
    ];

    mockRepo.findAll.mockResolvedValue(recipes);

    const result = await useCase.execute();

    expect(mockRepo.findAll).toHaveBeenCalled();
    expect(result).toEqual(recipes);
  });
});
