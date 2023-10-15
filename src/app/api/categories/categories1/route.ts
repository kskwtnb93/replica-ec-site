export async function GET() {
  const categories = [
    {
      id: 'all',
      en_name: 'ALL',
      ja_name: '全て',
    },
    {
      id: 'men',
      en_name: 'MENS',
      ja_name: 'メンズ',
    },
    {
      id: 'women',
      en_name: 'WOMENS',
      ja_name: 'レディース',
    },
  ]

  return Response.json(categories)
}
