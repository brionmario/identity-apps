/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
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

import { hasRequiredScopes } from "@wso2is/core/helpers";
import { SBACInterface, TestableComponentInterface } from "@wso2is/core/models";
import { FormState } from "@wso2is/forms";
import React, { FunctionComponent, ReactElement } from "react";
import { Divider } from "semantic-ui-react";
import { InboundProvisioningConfigurations } from "./inbound-provisioning-configuration";
import { OutboundProvisioningConfiguration } from "./outbound-provisioning-configuration";
import {
    ApplicationInterface,
    FeatureConfigInterface,
    ProvisioningConfigurationInterface
} from "../../../../models";

/**
 * Proptypes for the provision settings component.
 */
interface ProvisioningSettingsPropsInterface extends SBACInterface<FeatureConfigInterface>,
    TestableComponentInterface {

    /**
     * Editing application.
     */
    application: ApplicationInterface;
    /**
     * Current advanced configurations.
     */
    provisioningConfigurations: ProvisioningConfigurationInterface;
    /**
     * Callback for form state change.
     * @param {FormState} state - From state.
     */
    onFormStateChange?: (state: FormState) => void;
    /**
     * Callback to update the application details.
     */
    onUpdate: (id: string) => void;
}

/**
 *  Provisioning component.
 *
 * @param {ProvisioningSettingsPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ProvisioningSettings: FunctionComponent<ProvisioningSettingsPropsInterface> = (
    props: ProvisioningSettingsPropsInterface
): ReactElement => {

    const {
        application,
        featureConfig,
        provisioningConfigurations,
        onFormStateChange,
        onUpdate,
        [ "data-testid" ]: testId
    } = props;

    return (
        <>
            <InboundProvisioningConfigurations
                appId={ application.id }
                provisioningConfigurations={ provisioningConfigurations }
                onFormStateChange={ onFormStateChange }
                onUpdate={ onUpdate }
                readOnly={
                    !hasRequiredScopes(featureConfig?.applications, featureConfig?.applications?.scopes?.update)
                }
                data-testid={ `${ testId }-inbound-configuration` }
            />
            <Divider hidden/>
            <Divider/>
            <Divider hidden/>
            <OutboundProvisioningConfiguration
                application={ application }
                provisioningConfigurations={ provisioningConfigurations }
                onFormStateChange={ onFormStateChange }
                onUpdate={ onUpdate }
                data-testid={ `${ testId }-outbound-configuration` }
            />
        </>
    );
};

/**
 * Default props for the application provisioning settings component.
 */
ProvisioningSettings.defaultProps = {
    "data-testid": "provisioning-settings"
};
