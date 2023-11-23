export async function GET() {
  const categories = [
    {
      id: '1',
      title: 'タイトル1',
      description: 'ディスクリプション1',
      image: {
        url: '/images/home/ilgmyzin-KILylfMiuVY-unsplash.jpg',
        height: 1080,
        width: 1920,
      },
      linkUrl: '/',
    },
    {
      id: '2',
      title: 'タイトル2',
      description: 'ディスクリプション2',
      image: {
        url: '/images/home/dada_design-RpP6NZcdhUY-unsplash.jpg',
        height: 1252,
        width: 1920,
      },
      linkUrl: '/',
    },
    {
      id: '3',
      title: 'タイトル3',
      description: 'ディスクリプション3',
      image: {
        url: '/images/home/niklas-liniger-7TTM2d94GoE-unsplash.jpg',
        height: 1080,
        width: 1920,
      },
      linkUrl: '/',
    },
    {
      id: '4',
      title: 'タイトル4',
      description: 'ディスクリプション4',
      image: {
        url: '/images/home/denis-geomodule-cdkNCCWmEic-unsplash.jpg',
        height: 1109,
        width: 1920,
      },
      linkUrl: '/',
    },
    {
      id: '5',
      title: 'タイトル5',
      description: 'ディスクリプション5',
      image: {
        url: '/images/home/ilgmyzin-aHodrSBMYZA-unsplash.jpg',
        height: 1080,
        width: 1920,
      },
      linkUrl: '/',
    },
    {
      id: '6',
      title: 'タイトル6',
      description: 'ディスクリプション6',
      image: {
        url: '/images/home/anton-filatov-nDCFpdWDc9c-unsplash.jpg',
        height: 1080,
        width: 1920,
      },
      linkUrl: '/',
    },
    {
      id: '7',
      title: 'タイトル7',
      description: 'ディスクリプション7',
      image: {
        url: '/images/home/andy-spark-WdO8GRSUm6U-unsplash.jpg',
        height: 1282,
        width: 1920,
      },
      linkUrl: '/',
    },
    {
      id: '8',
      title: 'タイトル8',
      description: 'ディスクリプション8',
      image: {
        url: '/images/home/javier-miranda-vJdHsE83T0c-unsplash.jpg',
        height: 1080,
        width: 1920,
      },
      linkUrl: '/',
    },
  ]

  return Response.json(categories)
}
