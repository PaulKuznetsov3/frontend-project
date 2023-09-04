import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import MiniCssExtracrPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths }: BuildOptions ): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtracrPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}