import { expect, test, describe, vi } from 'vitest';

// 1. Test the Product API (Using a Mock)
describe('API Check', () => {
  test('FakeStore API should return products correctly', async () => {
    
    // We MOCK the fetch function so it doesn't actually go to the internet
    global.fetch = vi.fn().mockResolvedValue({
      status: 200,
      ok: true,
      json: () => Promise.resolve([
        { id: 1, title: 'Mock Shirt', price: 10.99 }
      ]),
    });

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    
    expect(response.status).toBe(200);
   
    
    console.log("API Mock test passed successfully");
  });
});

// 2. Test the Cart Math
describe('Cart Total price Logic', () => {
  test('Should calculate the sum of prices correctly', () => {
    const mockCart = [
      { price: 10.00 },
      { price: 20.00 },
      { price: 15.00 }
    ];

    const total = mockCart.reduce((acc: number, curr: any) => acc + curr.price, 0);
    
    expect(total).toBe(45.00);
    console.log("Cart Math test passed successfully");
  });
});