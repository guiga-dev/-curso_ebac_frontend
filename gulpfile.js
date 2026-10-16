const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
const { unzipSync } = require('fflate');

function styles() {
    return src('src/styles/main.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(dest('dist/css'));
}

function scripts() {
    return src('src/scripts/**/*.js')
        .pipe(terser())
        .pipe(dest('dist/js'));
}

// Sharp comprime as imagens originais dentro de uma tarefa assíncrona do Gulp.
// A Promise retornada permite ao Gulp aguardar e propagar erros da compressão.
async function images() {
    const target = 'dist/images';
    await fs.mkdir(target, { recursive: true });
    const archive = unzipSync(await fs.readFile('material-images.zip'));
    for (const [entry, bytes] of Object.entries(archive)) {
        if (!/\.(jpe?g|png)$/i.test(entry)) continue;
        const file = path.basename(entry);
        const input = Buffer.from(bytes);
        const image = sharp(input);
        const output = /\.png$/i.test(file)
            ? await image.png({ palette: true, quality: 80, compressionLevel: 9 }).toBuffer()
            : await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
        // Não aumenta arquivos que já estejam mais compactos que o resultado.
        await fs.writeFile(path.join(target, file), output.length < input.length ? output : input);
    }
}

function html() {
    return src('src/index.html').pipe(dest('dist'));
}

function observe() {
    watch('src/styles/**/*.scss', styles);
    watch('src/scripts/**/*.js', scripts);
    watch('material-images.zip', images);
    watch('src/index.html', html);
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = series(parallel(styles, scripts, images, html), observe);
exports.default = parallel(styles, scripts, images, html);
