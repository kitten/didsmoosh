module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  exportPathMap: () => ({
    '/': { page: '/' },
    '/donate': { page: '/donate' },
    '/kiosk': { page: '/kiosk' },
    '/coc': { page: '/coc' }
  })
}
