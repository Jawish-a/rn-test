const moduleResolverAlias = require('./alias').babelModuleResolverAlias;

module.exports = {
    // plugins run first
    plugins: [
        ['module-resolver', { alias: moduleResolverAlias }],
        'react-native-reanimated/plugin', // has to be listed last according to the documentation. https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#babel-plugin
    ],
    // presets run after
    presets: [
        [
            'module:metro-react-native-babel-preset',
            { useTransformReactJSXExperimental: true }, // this is so `import React from "react"` is not needed.
        ],
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }], // this is so `import React from "react"` is not needed.
    ],
};
