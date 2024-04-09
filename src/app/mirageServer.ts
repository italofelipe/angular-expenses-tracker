import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  createServer({
    routes() {
      this.get('api/expenses', () => ({
        expenses: [
          { description: 'Compras de supermercado', amount: 150.50, date: '2024-04-07' },
          { description: 'Gasolina', amount: 200.00, date: '2024-04-08' }
        ]
      }))
    }
  })

}

/**
 *
 *
 */
