const webpack = require('webpack'),
          path = require('path'),
          htmlWebpackPlugin = require('html-webpack-plugin');



 module.exports = {
       entry : {
             app : path.resolve(__dirname,'src/index.js')
       },
       output:{
       	path:path.resolve(__dirname,'dist'),
       	filename:'bundle.js'
       },
       module:{
       	rules : [{
                         test : /\.js$/,
                          use : {
                            loader:'babel-loader',
                            options : {
                                presets : ['es2015']
                            }
                          }  
       	},{
       	       test : /\.css$/,
       	       use : [{
       	       	loader:'style-loader',
                          options:{
                            sourceMap:true
                          }
       	       },{
       	       	loader : 'css-loader',
       	       	options : {
                              sourceMap:true,
       	       	     importLoaders:1
       	       	}
       	       },{
       	       	loader:'postcss-loader',
       	       	options : {
                                 sourceMap:true,    
       	       	        syntax: 'sugarss',     	
       	       	        plugins:[require('autoprefixer')(),require('postcss-flexbugs-fixes')]	
       	       	}
       	       },{
                                    loader:'resolve-url-loader',
                                    options:{
                                          sourceMap:true
                                    }
                        }]  	
       	},{
                        test : /\.scss$/,
                        use : [{
                                loader:'style-loader',
                                options:{
                                   sourceMap:true
                                }
                        },{
                                loader:'css-loader',
                                options : {
                                     sourceMap:true,
                                     importLoaders:1
                                }   
                        },{
                                loader:'postcss-loader',
                                options : {
                                       sourceMap:true,  
                                       syntax: 'sugarss',    
                                        plugins:[require('autoprefixer')(),require('postcss-flexbugs-fixes')]  
                                 }
                        },{
                              loader:'resolve-url-loader',
                              options:{
                                    sourceMap:true
                              }
                        },{
                                 loader:'sass-loader',
                                 options:{
                                        sourceMap: true 
                                 }        
                        }]
                   },{
       	       test:/\.(png|jpg|gif)/,
       	       use:{ loader : 'url-loader'} 
       	},{    
                          test: /\.(woff2?|svg)$/, 
                          use: { 
                              loader: 'url-loader',
                              options:{
                                    limit:10000
                              }
                          }
                    }, { 
                            test: /\.(ttf|eot)$/, 
                            use:{
                                loader: 'file-loader' 
                          }
                    },{
                           test: /bootstrap\/dist\/js\/umd\//, 
                           use: {
                                loader:'imports-loader',
                                options:{
                                    jQuery : 'jquery'
                                }
                      }
            }]
       },
       devtool: '#cheap-module-eval-source-map',
       resolve: { extensions: ['*', '.js'] },
       plugins : [
            new webpack.HotModuleReplacementPlugin(),
            new htmlWebpackPlugin({
                  template: path.resolve(__dirname,'src/index.html')
            }),
            new webpack.ProvidePlugin({
                  $: "jquery",
                  jQuery: "jquery",
                  "window.jQuery": "jquery",
                  Tether: "tether",
                  "window.Tether": "tether",
                  Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
                  Button: "exports-loader?Button!bootstrap/js/dist/button",
                  Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
                  Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
                  Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
                  Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
                  Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
                  Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
                  Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
                  Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
                  Util: "exports-loader?Util!bootstrap/js/dist/util"
            })
    ]

 }