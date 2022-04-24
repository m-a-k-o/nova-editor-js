const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss');

require('./mix')

mix
.setPublicPath('dist')
.js('resources/js/index.js', 'js/field.js')
.vue({ version: 3 })
.sass('resources/sass/field.scss', 'css')
.options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
})
.nova('m-a-k-o/nova-editor')

