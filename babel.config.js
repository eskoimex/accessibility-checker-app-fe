module.exports = {
    presets: [
      '@babel/preset-env', // Ensures compatibility with modern JavaScript
      '@babel/preset-react', // For JSX (React)
    ],
    plugins: ['@babel/plugin-transform-modules-commonjs'], // Transforms ES modules to CommonJS
  };
  