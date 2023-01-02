/* eslint-disable */
const { src, dest } = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const inlineCss = require('gulp-inline-css');

function spriteSvgIconTask() {
  return src('src/icons/*.svg')
    .pipe(
      svgSprite({
        mode: {
          symbol: true,
        },
      })
    )
    .pipe(dest('src/icons/svg-icon-sprite'));
}

function emailTemplateInlineCssTask() {
  return src('./EmailTemplate/**/Index.cshtml')
    .pipe(
      inlineCss({
        removeHtmlSelectors: true,
        codeBlocks: {
          EJS: { start: '<%', end: '%>' },
          HBS: { start: '{{', end: '}}' },
          Razor: { start: '@{', end: '}' },
        },
      })
    )
    .pipe(dest('./EmailTemplate'));
}

exports.spriteSvgIcon = spriteSvgIconTask;
exports.emailTemplateInlineCss = emailTemplateInlineCssTask;
