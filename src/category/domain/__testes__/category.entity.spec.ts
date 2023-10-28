import { Category } from "../category.entity";

describe("Category Unit Test", () => {
    test("Should create a category with default value", () => {
        // Arrange Act Assert
        let category = new Category({
            name: "Movie",
        });

        expect(category.category_id).toBeUndefined();
        expect(category.name).toBe("Movie");
        expect(category.description).toBeNull();
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
    });

    test("Should be create a category with all value", () => {
        const createdAt = new Date();

        const category = new Category({
            name: "Movie",
            description: "Movie description",
            is_active: false,
            created_at: createdAt,
        });

        expect(category.category_id).toBeUndefined();
        expect(category.name).toBe("Movie");
        expect(category.description).toBe("Movie description");
        expect(category.is_active).toBe(false);
        expect(category.created_at).toBe(createdAt);
    });

    describe('Create command', () => {
        test("sould create a category", () => {
            const category = Category.create({
                name: "Movie",
                description: "Movie description",
                is_active: false,
            });

            expect(category.category_id).toBeUndefined();
            expect(category.name).toBe("Movie");
            expect(category.description).toBe("Movie description");
            expect(category.is_active).toBe(false);
            expect(category.created_at).toBeInstanceOf(Date);
        })
    })

    describe('Should test methods', () => {
        test('Should chenge name', () => {
            const category = new Category({
                name: 'Movie'
            })

            category.changeName('other name')
            expect(category.name).toBe('other name')
        })

        test('Should change describe', () => {
            const category = new Category({
                name: 'Movie',
                description: 'Movie description',
            })

            category.changeDescription('other description')
            expect(category.description).toBe('other description')
        })

        test('Should change is_active to true', () => {
            const category = new Category({
                name: 'Movie',
                is_active: false
            })

            category.activate()
            expect(category.is_active).toBe(true)
        })

        test('Should change is_active to false', () => {
            const category = new Category({
                name: 'Movie',
                is_active: true
            })

            category.deactivate()
            expect(category.is_active).toBe(false)
        })
    })
});
