const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
module.exports = withPlugins([optimizedImages, withSass])
