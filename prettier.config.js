module.exports = {
  singleQuote: true,
  arrowParens: 'avoid',
  printWidth: 100,
  overrides: [
    {
      // note 解忧:
      // 和 cshtml 一起写 .(cshtml|html) 无效, 只好分开写多一个了
      files: '**/*.html',
      options: {
        // note issue:
        // https://github.com/prettier/prettier/issues/10918#issuecomment-851049185
        // https://github.com/heybourn/headwind/issues/127
        // 暂时关掉, 等 issue
        printWidth: Number.MAX_VALUE,
      },
    },
    {
      files: '**/*.cshtml',
      options: {
        // note issue:
        // https://github.com/prettier/prettier/issues/10918#issuecomment-851049185
        // https://github.com/heybourn/headwind/issues/127
        // 暂时关掉, 等 issue
        printWidth: Number.MAX_VALUE,
      },
    },
  ],
};
