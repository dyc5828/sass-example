/**
 * gulpfile.js
 * 
 * uses laravel-elixir, docs https://laravel.com/docs/5.3/elixir
 */
const elixir = require('laravel-elixir')

elixir(mix => {
	mix.sass('./src/main.scss', 'dist/main.min.css')
})

// const gulp = require('gulp')
// const sass = require('gulp-sass')

// gulp.task('default', () => {
// 	return gulp.src('./src/main.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest('./dist'))
// })
// 
// gulp.task('watch', () => {
// 	return gulp.watch('./src', ['default'])
// })