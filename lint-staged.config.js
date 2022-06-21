module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings=1 --fix",
    "react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests",
    () => "tsc-files --noEmit",
  ],
};
