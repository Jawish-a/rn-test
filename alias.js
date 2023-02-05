const list = [
    'api',
    'assets',
    'components',
    'constants',
    'hooks',
    'screens',
    'stacks',
    'utils',
];

// babel module resolver just needs `*`
const babelModuleResolverAlias = list.reduce((acc, name) => {
    acc[name] = `./src/${name}`;
    acc[`${name}/*`] = `./src/${name}/*`;
    return acc;
}, {});

// // jest allows for regex
// const jestModuleNameMap = list.reduce((acc, name) => {
//     acc[`^${name}$`] = `<rootDir>/src/${name}`;
//     acc[`^${name}/(.*)`] = `<rootDir>/src/${name}/$1`;
//     return acc;
// }, {});
// jestModuleNameMap['^images/(.*)'] = '<rootDir>/images/$1';

module.exports = {
    babelModuleResolverAlias,
    // jestModuleNameMap,
};
