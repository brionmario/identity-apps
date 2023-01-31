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

import { useContext } from "react";
import { ResourceEndpointsContext, ResourceEndpointsContextInterface } from "./resource-endpoints-context";

/**
 * Hook to access the application config.
 */
export const useResourceEndpoints = (): any => {

    const context: ResourceEndpointsContextInterface = useContext(ResourceEndpointsContext);

    if (context === undefined) {
        throw new Error("useResourceEndpoints must be used within a ResourceEndpointsProvider");
    }

    return {
        endpoints: context.endpoints
    };
};
