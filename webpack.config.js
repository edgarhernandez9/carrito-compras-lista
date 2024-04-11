const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => {

    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: 'http://localhost:3000/'
        },


        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
          },
      
        devServer: {
            port: 3000,
            historyApiFallback: true,
        },
      
        module: {
            rules: [
                {
                    type: "javascript/auto",
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false,
                    },
                },
                {
                    use: ["style-loader", "css-loader", "postcss-loader"],
                    test: /\.(css|s[ac]ss)$/i,
                },
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use:  {
                        loader: "babel-loader"
                    }
                },
                {
                    type: 'asset',
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                },
            ],
        },

        plugins: [
            new ModuleFederationPlugin({
                name: 'carrito_compras',
                filename: "remoteEntry.js",
                remotes: {
                    'componentsViews': `carrito_compras_views@http://localhost:3001/remoteEntry.js`
                },
                exposes: {
                    "./NavBar": "./src/components/NavBar/NavBar.jsx"
                },
                shared: {
                    ...deps,
                    react: {
                        eager: true,
                        singleton: false,
                        requiredVersion: deps.react,
                    },
                    "react-dom": {
                        singleton: true,
                        requiredVersion: deps["react-dom"],
                    },
                },
            }),
            new HtmlWebPackPlugin({
              template: "./public/index.html",
            }),
            new Dotenv(),
        ],
    }

}