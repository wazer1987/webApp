const { override, fixBabelImports ,addWebpackAlias} = require('customize-cra');
const path  = require('path')
module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
       addWebpackAlias({ //路径别名
        '@': path.resolve(__dirname, 'src'),
      }),
     );