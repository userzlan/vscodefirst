const path = require('path')
module.exports = {
    entry:'./public/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./build',
        host:'localhost',
        port:8080,
        open:true
    },
    module:{
        rules:[
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    }
}