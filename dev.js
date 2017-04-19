var fs = require('fs');
var chokidar = require('chokidar');
var sass = require('node-sass');
var browserSync = require('browser-sync').create();

var watcher = chokidar.watch('**/*.scss');

watcher.on('change', processStyle);

browserSync.init({
    proxy: "https://www.reddit.com/",
    startPath: "/r/DanganRoleplay",
    serveStatic: ["build"],
    files: "build/*.css",
    snippetOptions: {
        rule: {
            match: /<link rel="stylesheet" href="[^"]+" ref="applied_subreddit_stylesheet"[^>]+>/i,
            fn: function (snippet, match) {
                return '<link rel="stylesheet" type="text/css" href="/dev.css"/>' + snippet;
            }
        }
    }
});

function processStyle() {
    // console.log('Writing CSS files...');

    sass.render({
        file: 'styles/dev.scss',
        outFile: 'build/dev.css',
        // indentedSyntax: true,
        outputStyle: 'compact',
        sourceMap: true,
    }, writeFiles);

    function writeFiles(error, result) {
        if (error) {
            console.error(error.file, '-', error.line, ':', error.column);
            console.error(error.message);
            return;
        }

        fs.writeFileSync('build/dev.css', result.css);
        fs.writeFileSync('build/dev.map', result.map);
        // console.log('Files written.');
    }
}
