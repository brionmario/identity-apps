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

import CommonComponentFactory, {
    CommonComponentFactoryPropsInterface
} from "@wso2is/admin.flow-builder-core.v1/components/elements/components/common-component-factory";
import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { Node } from "@xyflow/react";
import React, { FunctionComponent, ReactElement } from "react";

/**
 * Props interface of {@link ComponentFactory}
 */
export type ComponentFactoryPropsInterface = CommonComponentFactoryPropsInterface & IdentifiableComponentInterface;

/**
 * Factory for creating components.
 *
 * @param props - Props injected to the component.
 * @returns The ComponentFactory component.
 */
export const ComponentFactory: FunctionComponent<ComponentFactoryPropsInterface> = ({
    node,
    nodeId
}: ComponentFactoryPropsInterface & Node): ReactElement => {
    return <CommonComponentFactory node={ node } nodeId={ nodeId } />;
};

export default ComponentFactory;
