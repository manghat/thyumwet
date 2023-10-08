# The basic framework of the portfolio is setup

## things to check out later

[ ] contentful using graphql instead of the traditional approach
[ ] Framer motion and other animation styles
[x] add projects
[ ] Loading states for the modal with image - refernece [this video](https://twitter.com/asidorenko_/status/1688633177403789314)
[ ] fancier modal with gallery?

## OG card generation

https://og-playground.vercel.app/

```
<div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    fontSize: 32,
    fontWeight: 600,
  }}
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="95">
  <path d="M6 3a3 3 0 00-3 3v1.5a.75.75 0 001.5 0V6A1.5 1.5 0 016 4.5h1.5a.75.75 0 000-1.5H6zM16.5 3a.75.75 0 000 1.5H18A1.5 1.5 0 0119.5 6v1.5a.75.75 0 001.5 0V6a3 3 0 00-3-3h-1.5zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM4.5 16.5a.75.75 0 00-1.5 0V18a3 3 0 003 3h1.5a.75.75 0 000-1.5H6A1.5 1.5 0 014.5 18v-1.5zM21 16.5a.75.75 0 00-1.5 0V18a1.5 1.5 0 01-1.5 1.5h-1.5a.75.75 0 000 1.5H18a3 3 0 003-3v-1.5z" />
</svg>

  <div style={{ marginTop: 40, color : '#fff' }}>Thy Umwelt | Photography</div>
</div>
```

[ ]
