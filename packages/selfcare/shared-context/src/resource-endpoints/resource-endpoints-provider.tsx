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

import React, { PropsWithChildren, ReactElement } from "react";
import { ResourceEndpointsContext } from "./resource-endpoints-context";

export interface ResourceEndpointsProviderPropsInterface {
    /**
     * Set of Endpoints.
     */
    endpoints: Record<string, string>;
}

/**
 * Configuration Provider.
 *
 * @param props - Props injected to the component.
 * @returns
 */
const ResourceEndpointsProvider = (props: PropsWithChildren<ResourceEndpointsProviderPropsInterface>): ReactElement => {

    const { endpoints, children } = props;

    return (
        <ResourceEndpointsContext.Provider
            value={ {
                endpoints: endpoints
            } }
        >
            { children }
        </ResourceEndpointsContext.Provider>
    );
};

export default ResourceEndpointsProvider;
