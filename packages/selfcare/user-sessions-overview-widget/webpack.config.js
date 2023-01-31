/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const path = require("path");
const FederatedTypesPlugin = require("@module-federation/typescript");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const { dependencies } = require("./package.json");
const pluginConfig = require("./plugin.config");

module.exports = (context, options) => {
    const env = options.mode === "production" ? "production" : "development";

    return {
        devServer: {
            client: { overlay: { errors: true, warnings: false } },
            compress: false,
            devMiddleware: { publicPath: "/", stats: false },
            headers: { "Access-Control-Allow-Origin": "*" },
            historyApiFallback: {
                disableDotRule: true,
                htmlAcceptHeaders: [ "text/html", "application/xhtml+xml" ],
                index: "/index.html"
            },
            host: "localhost",
            hot: true,
            liveReload: false,
            open: false,
            port: 3003,
            server: { type: "https" },
            static: {
                directory: path.join(__dirname, "public")
            }
        },
        devtool: env === "development" ? "source-map" : false,
        entry: {
            main: [
                "./src/main.ts"
            ],
            polyfills: [
                "./src/polyfills.ts"
            ],
            styles: [
                "./src/styles.css"
            ]
        },
        mode: env,
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    },
                    test: /\.tsx?$/
                },
                {
                    test: /\.css$/i,
                    use: [ "style-loader", "css-loader" ]
                },
                {
                    test: /\.(png|jpg|cur|gif|eot|ttf|woff|woff2)$/,
                    type: "asset/resource"
                },
                {
                    test: /\.(png|jpg|cur|gif|eot|ttf|woff|woff2)$/,
                    type: "asset/resource"
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: "@svgr/webpack",
                            options: {
                                svgoConfig: {
                                    plugins: [
                                        { prefixIds: false },
                                        { cleanupIDs: false },
                                        { removeViewBox: false }
                                    ]
                                }
                            }
                        },
                        {
                            loader: "file-loader",
                            options: {
                                name: env === "production"
                                    ? "/[contenthash].[ext]"
                                    : "/[path][name].[ext]"
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            runtimeChunk: false
        },
        output: {
            chunkFilename: "[name].js",
            crossOriginLoading: false,
            filename: "[name].js",
            hashFunction: "xxhash64",
            path: path.join(__dirname, "dist"),
            pathinfo: false,
            publicPath: "auto",
            scriptType: "text/javascript",
            uniqueName: pluginConfig.name
        },
        plugins: [
            new ModuleFederationPlugin({
                name: "selfcare_account_security_overview_widget",
                filename: "remoteEntry.js",
                exposes: {
                    "./SelfcareAccountSecurityOverviewWidget":
                        "./src/selfcare-account-security-overview-widget.tsx"
                },
                // library: {
                //     type: 'module',
                // },
                shared: {
                    ...dependencies,
                    "@wso2is/core": {
                        eager: undefined,
                        requiredVersion: false
                    },
                    "@wso2is/forms": {
                        eager: undefined,
                        requiredVersion: false
                    },
                    "@wso2is/react-components": {
                        eager: undefined,
                        requiredVersion: false
                    },
                    react: {
                        eager: true,
                        import: env === "development" ? undefined : false,
                        singleton: true,
                        //requiredVersion: dependencies["react"]
                    },
                    "react-dom": {
                        eager: true,
                        import: env === "development" ? undefined : false,
                        singleton: true,
                        //requiredVersion: dependencies["react-dom"]
                    },
                    "react-i18next": {
                        requiredVersion: dependencies["react-i18next"]
                    }
                },
                ...pluginConfig
            }),
            // new webpack.NormalModuleReplacementPlugin(/./, (req) => {
            //     const pathMappings = [
            //         {
            //             name: '@wso2is/react-components',
            //             path: path.normalize(path.join('../../../modules/react-components/src/index.ts')),
            //         },
            //         {
            //             name: '@wso2is/forms',
            //             path: path.normalize(path.join('../../../modules/forms/src/index.ts')),
            //         }
            //     ]
            //     if (!req.request.startsWith('.')) {
            //       return;
            //     }

            //     const from = req.context;
            //     const to = path.normalize(path.join(req.context, req.request));

            //     for (const library of pathMappings) {
            //       const libFolder = path.normalize(path.dirname(library.path));
            //       if (!from.startsWith(libFolder) && to.startsWith(libFolder)) {
            //         req.request = library.name;
            //         console.log('req.request = library.name', req.request, library.name)
            //       }
            //     }
            //   }),
            new FederatedTypesPlugin(),
            new webpack.ProvidePlugin({
                process: "process/browser"
            }),
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            })
        ],
        // stats: {
        //     chunks: true,
        //     modules: false,
        //     chunkModules: true,
        //     chunkOrigins: true
        // },
        resolve: {
            alias: {
                react: path.resolve("node_modules/react"),
                "react-dom": path.resolve("node_modules/react-dom")
            },
            extensions: [ ".ts", ".tsx", ".mjs", ".js", ".jsx" ],
            fallback: {
                buffer: false,
                crypto: false,
                fs: false,
                path: false,
                stream: false
            },
            mainFields: [ "browser", "module", "main" ],
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: path.join("tsconfig.json"),
                    extensions: [ ".ts", ".tsx", ".mjs", ".js", ".jsx" ],
                    mainFields: [ "browser", "module", "main" ]
                })
            ],
            symlinks: true
        },
        // experiments: {
        //     outputModule: true
        // },
        target: "web"
    };
};
