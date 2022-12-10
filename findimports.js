import findImports from 'find-imports';

const files = [
    // glob pattern
    'src/**/*.{js,jsx}',

    // use negative glob pattern to exclude files
    '!src/**/*.spec.js'
];

const imports = findImports(files, {
    absoluteImports: true,
    relativeImports: true,
    packageImports: false
});

console.log(imports)