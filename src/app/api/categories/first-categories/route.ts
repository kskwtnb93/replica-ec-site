export async function GET() {
  const categories = [
    {
      id: 'all',
      en_name: 'ALL',
      ja_name: 'すべて',
      color: '#2d2d2d',
    },
    {
      id: 'men',
      en_name: 'MENS',
      ja_name: 'メンズ',
      color: '#0064d8',
    },
    {
      id: 'women',
      en_name: 'WOMENS',
      ja_name: 'レディース',
      color: '#f26868',
    },
  ]

  return Response.json(categories)
}
