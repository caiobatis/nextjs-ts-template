module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['next/babel', '@babel/preset-typescript'],
    plugins: [
      [
        'transform-define',
        {
          'process.env.NODE_ENV': process.env.NODE_ENV
        }
      ],
      [
        'styled-components',
        {
          ssr: true,
          displayName: true,
          preprocess: false
        }
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.json', '.svg', '.png'],
          alias: {
            atoms: './src/components/atoms',
            molecules: './src/components/molecules',
            organisms: './src/components/organisms',
            templates: './src/components/templates',
          }
        }
      ]
    ]
  }
}

