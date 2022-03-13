declare module '@mdx-js/mdx'
declare module 'asciinema-player'

declare namespace JSX {
  interface IntrinsicElements {
    // Oh the things you'll do for email.
    center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }
}
