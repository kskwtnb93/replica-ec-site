export async function GET() {
  const categories = [
    {
      id: 'denim-pants',
      parent_id: 'pants',
      name: 'デニムパンツ',
    },
    {
      id: 'cargo-pants',
      parent_id: 'pants',
      name: 'カーゴパンツ',
    },
    {
      id: 'chino-pants',
      parent_id: 'pants',
      name: 'チノパンツ',
    },
    {
      id: 'sweatpants',
      parent_id: 'pants',
      name: 'スウェットパンツ',
    },
    {
      id: 'slacks',
      parent_id: 'pants',
      name: 'スラックス',
    },
    {
      id: 'pants',
      parent_id: 'pants',
      name: 'その他パンツ',
    },
  ]

  return Response.json(categories)
}
