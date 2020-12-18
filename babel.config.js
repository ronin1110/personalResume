module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "transform-es2015-arrow-functions",
      {
        "spec": true
      }
    ],
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]

  ]
}