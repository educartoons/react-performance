import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(
    'https://uxonyqlchonyeukyqerd.supabase.co/rest/v1/products?select=*',
    () => {
      return HttpResponse.json([
        {
          id: 1,
          name: 'Nike Air Max Dn',
          price: 160,
          image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b0c88ac-202d-4335-a864-1907e95c732b/air-max-dn-shoes-dFBSQh.png',
          type: 'Shoes',
        },
        {
          id: 2,
          name: 'Nike Alphafly 3',
          price: 285,
          image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7776f88c-1bf6-49ac-a53b-b532f4c51a87/alphafly-3-mens-road-racing-shoes-6Nc43S.png',
          type: 'Shoes',
        },
      ])
    }
  ),
  http.post('https://uxonyqlchonyeukyqerd.supabase.co/rest/v1/products', () => {
    return HttpResponse.json({
      ok: true,
    })
  }),
]

// SOFTWARE ENGINEER
// QA ENGINEER
