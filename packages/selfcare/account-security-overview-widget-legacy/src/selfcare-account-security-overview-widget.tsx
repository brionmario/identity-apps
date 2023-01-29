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

import {
    IdentifiableComponentInterface,
    TestableComponentInterface
} from "@wso2is/core/models";
import { Section, SectionProps } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
// import { getWidgetIcons } from "../../../configs";
// import { AppConstants, CommonConstants } from "../../../constants";
// import { history } from "../../../helpers";
// eslint-disable-next-line no-restricted-imports
import PadlockIcon from "./components/icons/padlock-icon";

export type SelfcareAccountSecurityWidgetProps = TestableComponentInterface &
    IdentifiableComponentInterface &
    Partial<SectionProps>;

/**
 * Account security widget.
 * Also see {@link AccountSecurityWidget.defaultProps}
 *
 * @return {JSX.Element}
 */
const SelfcareAccountSecurityWidget: FunctionComponent<SelfcareAccountSecurityWidgetProps> = (
    props: SelfcareAccountSecurityWidgetProps
): ReactElement => {
    const {
        ["data-testid"]: testId,
        ["data-componentid"]: componentId,
        header,
        ...rest
    } = props;
    const { t } = useTranslation();

    return (
        <div className="widget account-security">
            <Section
                className="overview"
                data-testid="account-security-overview-widget-settings-section"
                data-componentid="account-security-overview-widget-settings-section"
                header={ header ?? t(
                    "myAccount:components.overview.widgets.accountSecurity.header"
                ) }
                description={ t(
                    "myAccount:components.overview.widgets.accountSecurity.description"
                ) }
                primaryAction={ t(
                    "myAccount:components.overview.widgets.accountSecurity.actionTitles.update"
                ) }
                icon={ PadlockIcon }
                iconOptions={ {
                    floated: "right"
                } }
                { ...rest }
            />
        </div>
    );
};

/**
 * Default properties of {@link AccountSecurityWidget}
 *
 * {@link AccountSecurityWidget} has no component specific properties to
 * be defined in a typed interface so instead it directly uses
 * {@link TestableComponentInterface} as its prop type definition.
 *
 * Example to extend if {@link AccountSecurityWidget} has custom props: -
 *
 * ```
 * interface AccountSecurityWidgetProps extends TestableComponentInterface { prop: type }
 *
 * // Wrap props interface with {@link React.PropsWithChildren} if has child widgets.
 * export const AccountSecurityWidget: FunctionComponent<AccountSecurityWidgetProps> = (
 *      props: AccountSecurityWidgetProps
 * ): JSX.Element => { ... }
 * ```
 */
SelfcareAccountSecurityWidget.defaultProps = {
    "data-testid": "account-security-overview-widget"
};

export default SelfcareAccountSecurityWidget;
