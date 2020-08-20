// module.exports = {
//   transformIgnorePatterns: ['/node_modules/']
// };
module.exports = {
  // moduleFileExtensions: ["js", "jsx", "json", "vue"],
  // transform: {
  //   "^.+\\.vue$": "vue-jest",
  //   ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
  //     "jest-transform-stub",
  //   "^.+\\.(js|jsx)?$": "babel-jest"
  // },
preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  // snapshotSerializers: ["jest-serializer-vue"],
  // testMatch: [
  //   "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"
  // ],
  // testURL: "http://localhost/",
  // transformIgnorePatterns: ["<rootDir>/node_modules/"]
};