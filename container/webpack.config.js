const htmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFerderationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {

    mode:'development',
    devServer: {
        port: 8085
    },
    plugins:[
        new ModuleFerderationPlugin({
           name: 'container',
            remotes: {
                productsApp: 'products@http://localhost:8081/remoteEntry.js',
                cartApp:'cart@http://localhost:8082/remoteEntry.js'
            }
        }),
        new htmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}