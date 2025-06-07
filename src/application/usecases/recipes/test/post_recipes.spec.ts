import { PostRecipesUseCase } from '../post_recipes_usecases';
import { RecipeRepository } from '../../../../domain/repository/recipes/recipes.interface';

describe('PostRecipesUseCase', () => {
  let useCase: PostRecipesUseCase;
  let mockRepo: jest.Mocked<RecipeRepository>;

  beforeEach(() => {
    mockRepo = {
      postRecipe: jest.fn(),
    } as any;

    useCase = new PostRecipesUseCase(mockRepo);
  });

  it('should create and return a recipe', async () => {
    const data = {
      title: 'Salad',
      ingredients: ['lettuce', 'tomato'],
      description: 'Salad',
    };

    const result = await useCase.execute(data);

    expect(result).toMatchObject({
      ingredients: data.ingredients,
      description: data.description,
    });
  });

  it('should throw error if repository throws', async () => {
    mockRepo.postRecipe.mockRejectedValue(new Error('DB error'));

    await expect(
      useCase.execute({
        title: 'Error',
        ingredients: ['x'],
        description: 'fail',
      }),
    ).rejects.toThrow('Error in usecase: Error: DB error');
  });
});
