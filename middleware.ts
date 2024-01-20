import { NextResponse } from 'next/server'
export default function middleware(req,ev) {
  const { pathname,search } = req.nextUrl
  const referer = req.headers.get('referer')
  if(referer!=undefined){
      if(referer.includes('facebook')){
          return NextResponse.redirect(process.env.WORDPRESS_API_URL+pathname+search)
      }           
  }
  return NextResponse.next()
}