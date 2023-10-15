export async function GET() {
  const categories = [
    {
      id: 'tops',
      name: 'トップス',
    },
    {
      id: 'jacket-outerwear',
      name: 'ジャケット/アウター',
    },
    {
      id: 'pants',
      name: 'パンツ',
    },
  ]

  return Response.json(categories)
}
