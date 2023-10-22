export async function GET() {
  const categories = [
    {
      id: 'tshirt-cutsew',
      parent_id: 'tops',
      name: 'Tシャツ/カットソー',
    },
    {
      id: 'shirt-blouse',
      parent_id: 'tops',
      name: 'シャツ/ブラウス',
    },
    {
      id: 'business-shirt',
      parent_id: 'tops',
      name: 'ビジネスシャツ',
    },
    {
      id: 'polo-shirt',
      parent_id: 'tops',
      name: 'ポロシャツ',
    },
    {
      id: 'knit-sweater',
      parent_id: 'tops',
      name: 'ニット/セーター',
    },
    {
      id: 'vest',
      parent_id: 'tops',
      name: 'ベスト',
    },
    {
      id: 'parka',
      parent_id: 'tops',
      name: 'パーカー',
    },
    {
      id: 'sweat',
      parent_id: 'tops',
      name: 'スウェット',
    },
    {
      id: 'cardigan',
      parent_id: 'tops',
      name: 'カーディガン/ボレロ',
    },
    {
      id: 'ensemble',
      parent_id: 'tops',
      name: 'アンサンブル',
    },
    {
      id: 'jersey',
      parent_id: 'tops',
      name: 'ジャージ',
    },
    {
      id: 'tank-tops',
      parent_id: 'tops',
      name: 'タンクトップ',
    },
    {
      id: 'camisole',
      parent_id: 'tops',
      name: 'キャミソール',
    },
    {
      id: 'tube-top',
      name: 'チューブトップ',
    },
    {
      id: 'other-tops',
      parent_id: 'tops',
      name: 'その他トップス',
    },
  ]

  return Response.json(categories)
}
