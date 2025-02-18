import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";
import { Category } from "../category.entity"

describe('Category Unit Tests', () => {
  test(('should change name'), () => {
    const category = new Category({
      name: 'Movie'
    });

    category.changeName('other name');

    expect(category.name).toBe('other name');

  });

  test(('should change description'), () => {
    const category = new Category({
      name: 'Movie',
      description: 'Movies category'
    });

    category.changeDescription('other description');

    expect(category.description).toBe('other description');
  })

  test(('should activate category'), () => {
    const category = new Category({
      name: 'Movie',
      is_active: false
    });

    category.activate();

    expect(category.is_active).toBeTruthy();
  });

  test(('should deactivate category'), () => {
    const category = new Category({
      name: 'Movie',
    });

    category.deactivate();

    expect(category.is_active).toBeFalsy();
  });

  describe('constructor', () => {
    test('should create a category with default values', () => {
      const category = new Category({
        name: 'Movie'
      });
  
      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe('Movie');
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);

    });

    test('should create a category with custom values', () => {
    const created_at = new Date();
      
    const category = new Category({
        name: 'Movie',
        description: 'Movies category',
        is_active: false,
        created_at
      })
  
      expect(category.category_id).toBeInstanceOf(Uuid);
      expect(category.name).toBe('Movie');
      expect(category.description).toBe('Movies category');
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBe(created_at);
    })
  })
  describe('category_id field', () => {
    test('should create a category with custom category_id', () => {
      const category_id = new Uuid('b1d3d3c7-3d9f-4e4d-8a3d-7f8e1e3b6f4d');
      
      const category = new Category({
        category_id,
        name: 'Movie'
      });
  
      expect(category.category_id).toBe(category_id);
    })

    test('should create a category with default category_id', () => {
      const category = new Category({
        name: 'Movie'
      });
  
      expect(category.category_id).toBeInstanceOf(Uuid);
    })
    
    test('should create a category with null category_id', () => {
      const category = new Category({
        category_id: null as any,
        name: 'Movie'
      });
  
      expect(category.category_id).toBeInstanceOf(Uuid);
    })
  })
})

// Arrange, Act, Assert