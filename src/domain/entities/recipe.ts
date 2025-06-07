export class Recipe {
  constructor(
    public title: string,
    public description: string,
    public ingredients: string[],
    public id?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {
    if (!title || title.trim() === '') throw new Error('Title is required');
    if (!description || description.trim() === '')
      throw new Error('Description is required');
    if (!Array.isArray(ingredients) || ingredients.length === 0)
      throw new Error('At least one ingredient is required');
  }
}
