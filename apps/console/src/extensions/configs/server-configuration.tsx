/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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

import React, { ReactElement } from "react";
import { ExtendedDynamicConnector } from "../components/governance-connectors";
import { GovernanceConnectorInterface, ServerConfigurationsConstants } from "../../features/server-configurations";
import { ServerConfigurationConfig } from "./models/server-configuration";

export const serverConfigurationConfig: ServerConfigurationConfig = {
    autoEnableConnectorToggleProperty: true,
    connectorPropertiesToShow: [
        "Recovery.ReCaptcha.Password.Enable",
        "Recovery.NotifySuccess",
        "Recovery.ExpiryTime",
    ],
    connectorToggleName: {
        "account-recovery": ServerConfigurationsConstants.PASSWORD_RECOVERY_NOTIFICATION_BASED_ENABLE,
        "account.lock.handler": ServerConfigurationsConstants.ACCOUNT_LOCK_ENABLE,
        "self-sign-up": ServerConfigurationsConstants.SELF_REGISTRATION_ENABLE,
        "sso.login.recaptcha": ServerConfigurationsConstants.RE_CAPTCHA_ALWAYS_ENABLE
    },
    connectorsToShow: [
        "account-recovery",
        "account.lock.handler",
        "self-sign-up",
        "sso.login.recaptcha"
    ],
    intendSettings: false,
    renderConnector: (connector: GovernanceConnectorInterface,
        connectorForm: ReactElement,
        connectorIllustration: string,
        connectorSubHeading: string): ReactElement => {
        return (
            <ExtendedDynamicConnector
                connector={ connector }
                connectorForm={ connectorForm }
                connectorIllustration={ connectorIllustration }
                connectorSubHeading={ connectorSubHeading }
                connectorToggleName={ serverConfigurationConfig.connectorToggleName[ connector.name ] }
                data-testid="governance-connector-password-recovery"
            />
        );
    },
    renderConnectorWithinEmphasizedSegment: false,
    showConnectorsOnTheSidePanel: false,
    showGovernanceConnectorCategories: false,
    showPageHeading: false
};
