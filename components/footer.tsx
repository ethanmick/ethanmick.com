import React from 'react'

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
)

const LinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
)

export const Footer = () => (
  <footer className="grid grid-cols-1 py-12 px-4 text-gray-600 md:grid-cols-3">
    <div className="row-start-2 row-end-2 flex items-center justify-center py-12 text-center md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-1 md:py-0">
      &#169; Ethan Mick {new Date().getFullYear()}
    </div>
    <div className="col-start-1 col-end-1 flex flex-col items-center md:col-start-3 md:col-end-3 md:items-end">
      <div className="mb-4">
        <a
          className="flex items-center"
          href="https://twitter.com/intent/follow?screen_name=ethan_mick"
        >
          <Twitter className="mr-4 h-8 w-8 fill-[#1DA1F2]" /> @Ethan_Mick
        </a>
      </div>
      <div>
        <a
          className="flex items-center"
          href="www.linkedin.com/in/ethan-mick-28264731"
        >
          <LinkedIn className="mr-4 h-8 w-8 fill-[#0077B5]" /> Ethan Mick
        </a>
      </div>
    </div>
  </footer>
)
