/**
 * Copyright (c) 2020, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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

const { execSync } = require("child_process");

// eslint-disable-next-line no-console
const log = console.log;

log("Pre build script started.....");

// Run the clean script.
execSync("pnpm clean:build");

// Run theme content copying to source script.
execSync("pnpm copy:themes:src");

// Copy plugins to distribution.
execSync("node scripts/plugin-manager.js");

log("\nFinishing up the pre build script.....");
