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

import DecoratedVisualFlow from "@wso2is/admin.flow-builder-core.v1/components/decorated-visual-flow";
import { Payload } from "@wso2is/admin.flow-builder-core.v1/models/api";
import AuthenticationFlowBuilderCoreProvider from
    "@wso2is/admin.flow-builder-core.v1/providers/authentication-flow-builder-core-provider";
import { AlertLevels, IdentifiableComponentInterface } from "@wso2is/core/models";
import { addAlert } from "@wso2is/core/store";
import React, { FunctionComponent, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import ElementProperties from "./element-property-panel/element-properties";
import ComponentFactory from "./elements/components/component-factory";
import configureRegistrationFlow from "../api/configure-registration-flow";
import useGetRegistrationFlowBuilderElements from "../api/use-get-registration-flow-builder-elements";
import RegistrationFlowBuilderProvider from "../providers/registration-flow-builder-provider";

/**
 * Props interface of {@link RegistrationFlowBuilder}
 */
export type RegistrationFlowBuilderPropsInterface = IdentifiableComponentInterface;

/**
 * Entry point for the registration flow builder.
 *
 * @param props - Props injected to the component.
 * @returns Entry point component for the registration flow builder.
 */
const RegistrationFlowBuilder: FunctionComponent<RegistrationFlowBuilderPropsInterface> = ({
    "data-componentid": componentId = "authentication-flow-builder",
    ...rest
}: RegistrationFlowBuilderPropsInterface): ReactElement => {
    const { data: elements } = useGetRegistrationFlowBuilderElements();

    const dispatch: Dispatch = useDispatch();

    const handleFlowSubmit = (payload: Payload) => {
        configureRegistrationFlow(payload)
            .then(() => {
                dispatch(addAlert({
                    description: "Registration flow updated successfully.",
                    level: AlertLevels.SUCCESS,
                    message: "Flow Updated Successfully"
                }));
            })
            .catch(() => {
                dispatch(addAlert({
                    description: "Failed to update the registration flow.",
                    level: AlertLevels.ERROR,
                    message: "Flow Updated Failure"
                }));
            });
    };

    return (
        <AuthenticationFlowBuilderCoreProvider
            ComponentFactory={ ComponentFactory }
            ElementProperties={ ElementProperties }
        >
            <RegistrationFlowBuilderProvider>
                <DecoratedVisualFlow
                    elements={ elements }
                    data-componentid={ componentId }
                    onFlowSubmit={ handleFlowSubmit }
                    { ...rest }
                />
            </RegistrationFlowBuilderProvider>
        </AuthenticationFlowBuilderCoreProvider>
    );
};

export default RegistrationFlowBuilder;
