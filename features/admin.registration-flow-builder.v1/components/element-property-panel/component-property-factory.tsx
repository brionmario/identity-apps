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

import CommonComponentPropertyFactory, {
    CommonComponentPropertyFactoryPropsInterface
// eslint-disable-next-line max-len
} from "@wso2is/admin.flow-builder-core.v1/components/element-property-panel/common-component-property-factory";
import React, { FunctionComponent, ReactElement } from "react";

/**
 * Props interface of {@link ComponentPropertyFactory}
 */
export type ComponentPropertyFactoryPropsInterface = CommonComponentPropertyFactoryPropsInterface;

const PROPERTIES_TO_IGNORE: string[] = [ "type", "name" ];

/**
 * Factory to generate the property configurator for the given component.
 *
 * @param props - Props injected to the component.
 * @returns The ComponentPropertyConfiguratorFactory component.
 */
const ComponentPropertyFactory: FunctionComponent<ComponentPropertyFactoryPropsInterface> = ({
    element,
    propertyKey,
    propertyValue,
    onChange
}: ComponentPropertyFactoryPropsInterface): ReactElement | null => {
    if (PROPERTIES_TO_IGNORE.includes(propertyKey)) {
        return null;
    }

    return (
        <CommonComponentPropertyFactory
            element={ element }
            propertyKey={ propertyKey }
            propertyValue={ propertyValue }
            onChange={ onChange }
        />
    );
};

export default ComponentPropertyFactory;
