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

import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { Section, SectionProps } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import ConsentIcon from "./components/icons/consent-icon";

export type SelfcareUserSessionsOverviewWidgetProps = IdentifiableComponentInterface &
    Partial<SectionProps>;

/**
 * User sessions display widget to be shown in the overview page of the selfcare portal.
 *
 * @param props - Properties of the component of type {@link SelfcareUserSessionsOverviewWidgetProps}
 * @returns Selfcare user sessions overview widget as a React component.
 */
const SelfcareUserSessionsOverviewWidget: FunctionComponent<SelfcareUserSessionsOverviewWidgetProps> = (
    props: SelfcareUserSessionsOverviewWidgetProps
): ReactElement => {
    const {
        ["data-componentid"]: componentId,
        ...rest
    } = props;

    const { t } = useTranslation();

    return (
        <div className="widget account-security" data-componentid={ componentId }>
            <Section
                className="overview"
                data-componentid={ `${componentId}-settings-section` }
                header={ t("myAccount:components.overview.widgets.consentManagement.header") }
                description={ t("myAccount:components.overview.widgets.consentManagement.description") }
                primaryAction={ t("myAccount:components.overview.widgets.consentManagement.actionTitles.manage") }
                icon={ ConsentIcon }
                iconOptions={ {
                    floated: "right"
                } }
                { ...rest }
            />
        </div>
    );
};

SelfcareUserSessionsOverviewWidget.defaultProps = {
    "data-componentid": "user-sessions-overview-widget"
};

export default SelfcareUserSessionsOverviewWidget;
