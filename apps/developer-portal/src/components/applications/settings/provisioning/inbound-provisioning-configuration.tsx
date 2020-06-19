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

import { getUserStoreList } from "@wso2is/core/api";
import { hasRequiredScopes } from "@wso2is/core/helpers";
import { AlertLevels, SBACInterface, TestableComponentInterface } from "@wso2is/core/models";
import { addAlert } from "@wso2is/core/store";
import { FormState } from "@wso2is/forms";
import { Heading } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Divider, Grid } from "semantic-ui-react";
import { updateApplicationConfigurations } from "../../../../api";
import {
    FeatureConfigInterface,
    ProvisioningConfigurationInterface,
    SimpleUserStoreListItemInterface
} from "../../../../models";
import { AuthenticatorAccordion } from "../../../shared";
import { ProvisioningConfigurationsForm } from "../../forms";

/**
 *  Inbound Provisioning Configurations for the Application.
 */
interface InboundProvisioningConfigurationsPropsInterface extends SBACInterface<FeatureConfigInterface>,
    TestableComponentInterface {

    /**
     * Currently editing application id.
     */
    appId: string;
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
    /**
     * Make the form read only.
     */
    readOnly?: boolean;
}

/**
 * Inbound Provisioning configurations form component.
 *
 * @param {ProvisioningConfigurationFormPropsInterface} props - Props injected to the component.
 * @return {ReactElement}
 */
export const InboundProvisioningConfigurations: FunctionComponent<InboundProvisioningConfigurationsPropsInterface> = (
    props: InboundProvisioningConfigurationsPropsInterface
): ReactElement => {

    const {
        appId,
        provisioningConfigurations,
        onFormStateChange,
        onUpdate,
        featureConfig,
        [ "data-testid" ]: testId
    } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [userStore, setUserStore] = useState<SimpleUserStoreListItemInterface[]>([]);

    /**
     * Handles the provisioning config form submit action.
     *
     * @param values - Form values.
     */
    const handleProvisioningConfigFormSubmit = (values: any): void => {
        updateApplicationConfigurations(appId, values)
            .then(() => {
                dispatch(addAlert({
                    description: t("devPortal:components.applications.notifications" +
                        ".updateInboundProvisioningConfig.success.description"),
                    level: AlertLevels.SUCCESS,
                    message: t("devPortal:components.applications.notifications.updateInboundProvisioningConfig" +
                        ".success.message")
                }));

                onUpdate(appId);
            })
            .catch(() => {
                dispatch(addAlert({
                    description: t("devPortal:components.applications.notifications" +
                        ".updateInboundProvisioningConfig.genericError.description"),
                    level: AlertLevels.ERROR,
                    message: t("devPortal:components.applications.notifications.updateInboundProvisioningConfig" +
                        ".genericError.message")
                }));
            });
    };


    useEffect(() => {
        const userstore: SimpleUserStoreListItemInterface[] = [];
        userstore.push({
            id: "PRIMARY",
            name: "PRIMARY"
        });
        getUserStoreList().then((response) => {
            userstore.push(...response.data);
            setUserStore(userstore);
        }).catch(() => {
            setUserStore(userstore);
        });
    }, []);

    return (
        <>
            <Heading as="h4">
                { t("devPortal:components.applications.edit.sections.provisioning.inbound.heading") }
                <Heading subHeading as="h6">
                    { t("devPortal:components.applications.edit.sections.provisioning.inbound.subHeading") }
                </Heading>
            </Heading>
            <Divider hidden/>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <AuthenticatorAccordion
                            globalActions={ [] }
                            authenticators={
                                [
                                    {
                                        content: (
                                            <ProvisioningConfigurationsForm
                                                config={ provisioningConfigurations }
                                                onFormStateChange={ onFormStateChange }
                                                onSubmit={ handleProvisioningConfigFormSubmit }
                                                useStoreList={ userStore }
                                                readOnly={
                                                    !hasRequiredScopes(featureConfig?.applications,
                                                        featureConfig?.applications?.scopes?.update)
                                                }
                                                data-testid={ `${ testId }-form` }
                                            />
                                        ),
                                        id: "scim",
                                        title: "SCIM"
                                    }
                                ]
                            }
                            data-testid={ `${ testId }-inbound-connector-accordion` }
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </>
    )
};

/**
 * Default props for the application inbound provisioning configurations component.
 */
InboundProvisioningConfigurations.defaultProps = {
    "data-testid": "application-inbound-provisioning-configurations"
};
