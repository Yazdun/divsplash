import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div tw="flex flex-col justify-center">
            <h2 tw="flex flex-col w-md text-[4rem] font-black tracking-tight text-gray-900 text-left">
              <span>DivSplash</span>
            </h2>
            <h2 tw="text-3xl w-[500px] text-gray-700">
              Download some fantastic doodles for your websites, apps or
              designs.
            </h2>
          </div>
          <div tw="flex p-10 shadow-2xl rounded-2xl ml-10">
            <img
              src="https://www.divsplash.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoomscroll.f699363b.png&w=384&q=75"
              tw="w-[350px] h-[350px]"
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
