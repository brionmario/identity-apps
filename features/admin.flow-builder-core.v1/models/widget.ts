/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
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

import { Payload } from "./api";
import { Component } from "./component";

export type Widget = Component<WidgetExtendedConfig>;

export type SubFlow = Partial<Payload>;

/**
 * Interface for the properties of a widget.
 */
export interface WidgetExtendedConfig {
    /**
     * Version of the widget.
     */
    version?: string;
    /**
     * Sub flow to render for the widget.
     */
    flow?: SubFlow;
}

export enum WidgetTypes {}
