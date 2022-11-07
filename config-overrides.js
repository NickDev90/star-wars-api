const {alias} = require('react-app-rewire-alias');



module.exports = function override(config, env) {
    //do stuff with the webpack config...
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@hoc-helpers': 'src/hoc-helpers',
        '@constants': 'src/constants',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@hooks': 'src/hooks',
        '@pages': 'src/pages',
        '@styles': 'src/styles',
        '@images': 'src/assets/images',
        '@store' : 'src/store',
        '@context' : 'src/context',
    })(config)
    
    return config;
  }