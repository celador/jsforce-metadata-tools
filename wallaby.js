module.exports = function () {
    return {
        files: [
            './lib/**/*.js*'
        ],
        tests: [
            'test/**' 
        ],
        'testFramework': 'mocha',
        env: {
            type: 'node'
        }
    }
}
