module.exports = {
  //能够编译es6的语法
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: "3",
          proposals: true,
        },
      },
    ],
  ],
};
