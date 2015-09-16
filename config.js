System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "horcrux-core": "github:hor-crux/horcrux-core@master",
    "observejs": "github:polymer/observe-js@0.5.6",
    "github:hor-crux/horcrux-core@master": {
      "html": "github:hor-crux/html@master",
      "observejs": "github:polymer/observe-js@0.5.6",
      "webcomponents": "github:webcomponents/webcomponentsjs@0.7.12"
    }
  }
});
