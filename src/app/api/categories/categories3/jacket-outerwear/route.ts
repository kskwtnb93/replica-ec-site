export async function GET() {
  const categories = [
    {
      id: 'tailored-jacket',
      parent_id: 'jacket-outerwear',
      name: 'テーラードジャケット',
    },
    {
      id: 'collarless-jacket',
      parent_id: 'jacket-outerwear',
      name: 'ノーカラージャケット',
    },
    {
      id: 'collarless-coat',
      parent_id: 'jacket-outerwear',
      name: 'ノーカラーコート',
    },
    {
      id: 'denim-jacket',
      parent_id: 'jacket-outerwear',
      name: 'デニムジャケット',
    },
    {
      id: 'riders-jacket',
      parent_id: 'jacket-outerwear',
      name: 'ライダースジャケット',
    },
    {
      id: 'jacket',
      parent_id: 'jacket-outerwear',
      name: 'ブルゾン',
    },
    {
      id: 'military-jacket',
      parent_id: 'jacket-outerwear',
      name: 'ミリタリージャケット',
    },
    {
      id: 'down-jacket',
      parent_id: 'jacket-outerwear',
      name: 'ダウンジャケット/コート',
    },
    {
      id: 'down-vest',
      parent_id: 'jacket-outerwear',
      name: 'ダウンベスト',
    },
    {
      id: 'duffle-coat',
      parent_id: 'jacket-outerwear',
      name: 'ダッフルコート',
    },
    {
      id: 'mods-coat',
      parent_id: 'jacket-outerwear',
      name: 'モッズコート',
    },
    {
      id: 'pea-coat',
      parent_id: 'jacket-outerwear',
      name: 'ピーコート',
    },
    {
      id: 'stand-collar-coat',
      parent_id: 'jacket-outerwear',
      name: 'ステンカラーコート',
    },
    {
      id: 'trench-coat',
      parent_id: 'jacket-outerwear',
      name: 'トレンチコート',
    },
    {
      id: 'chester-coat',
      parent_id: 'jacket-outerwear',
      name: 'チェスターコート',
    },
    {
      id: 'mouton-coat',
      parent_id: 'jacket-outerwear',
      name: 'ムートンコート',
    },
    {
      id: 'nylon-jacket',
      parent_id: 'jacket-outerwear',
      name: 'ナイロンジャケット',
    },
    {
      id: 'mountain-parker',
      parent_id: 'jacket-outerwear',
      name: 'マウンテンパーカー',
    },
    {
      id: 'stadium-jumper',
      parent_id: 'jacket-outerwear',
      name: 'スタジャン',
    },
    {
      id: 'japanese-souvenir-jacket',
      parent_id: 'jacket-outerwear',
      name: 'スカジャン',
    },
    {
      id: 'setup',
      parent_id: 'jacket-outerwear',
      name: 'セットアップ',
    },
    {
      id: 'coveralls',
      parent_id: 'jacket-outerwear',
      name: 'カバーオール',
    },
    {
      id: 'poncho',
      parent_id: 'jacket-outerwear',
      name: 'ポンチョ',
    },
    {
      id: 'other-outer',
      parent_id: 'jacket-outerwear',
      name: 'その他アウター',
    },
  ]

  return Response.json(categories)
}
