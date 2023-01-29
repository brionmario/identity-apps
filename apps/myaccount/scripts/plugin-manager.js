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
const fs = require("fs-extra");

const PATHS = {
    appDist: path.join(__dirname, "..", "build", "myaccount"),
    appPlugins: path.join(__dirname, "..", "build", "myaccount", "plugins"),
    appPublic: path.join(__dirname, "..", "src", "public", "plugins"),
    nodeModules: path.join(__dirname, "..", "node_modules"),
    plugins: path.join(__dirname, "..", "node_modules", "@wso2"),
};

const plugins = fs.readdirSync(PATHS.plugins);

plugins.forEach((plugin) => {
    const pluginPath = path.join(PATHS.plugins, plugin);
    const pluginDist = path.join(pluginPath, "dist");
    const targetPluginDist = path.join(PATHS.appPublic, plugin);

    fs.copySync(pluginDist, targetPluginDist);
});
