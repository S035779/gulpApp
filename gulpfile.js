'use strict'
var gulp = require('gulp');
 
//watchタスク定義
gulp.task('watch', function () {
    //ファイルが変更されたらメッセージ表示
    gulp.watch('*', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
                 
//デフォルトタスクとしてwatch実行
gulp.task('default', function () {
    gulp.run('watch');
});
