import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  const { device } = userAgent(request)
  const viewport = device.type === 'mobile' ? 'sp' : 'pc'

  // console.log(device.type)

  const headers = new Headers(request.headers)
  headers.set('viewport', viewport)

  const response = NextResponse.next({
    request: {
      headers,
    },
  })

  return response
}
