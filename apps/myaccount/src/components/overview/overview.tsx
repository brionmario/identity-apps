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

import { hasRequiredScopes, isFeatureEnabled } from "@wso2is/core/helpers";
import { TestableComponentInterface } from "@wso2is/core/models";
import React, { FunctionComponent, LazyExoticComponent, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Divider, Grid, SemanticWIDTHS } from "semantic-ui-react";
import { AccountStatusWidget, ConsentManagementWidget, UserSessionsWidget } from "./widgets";
import { ProfileWidget } from "./widgets/profile-widget";
import { AppConstants, CommonConstants } from "../../constants";
import { commonConfig } from "../../extensions";
import { history } from "../../helpers";
import { FeatureConfigInterface } from "../../models";
import { AppState } from "../../store";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SelfcareAccountSecurityOverviewWidget: LazyExoticComponent = React.lazy(() =>import("selfcare_account_security_overview_widget/SelfcareAccountSecurityOverviewWidget"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SelfcareConsentManagementOverviewWidget: LazyExoticComponent = React.lazy(() =>import("selfcare_consent_management_overview_widget/SelfcareConsentManagementOverviewWidget"));

/**
 * Prop types for the overview edit component.
 */
interface OverviewPropsInterface extends TestableComponentInterface {
    userSource?: string;
    enableAlternateWidgetLayout?: boolean;
    userStore?: string
}

/**
 * Overview Component
 * @param props
 * @constructor
 */
export const Overview: FunctionComponent<OverviewPropsInterface> = (
    props: OverviewPropsInterface
): ReactElement => {

    const {
        userSource,
        enableAlternateWidgetLayout,
        userStore
    } = props;

    const accessConfig: FeatureConfigInterface = useSelector((state: AppState) => state?.config?.ui?.features);
    const allowedScopes: string = useSelector((state: AppState) => state?.authenticationInformation?.scope);

    /**
     * Profile status widget with link to profile.
     * @param {SemanticWIDTHS} widthComputer - Width for the computer screens.
     * @param widthMobile
     */
    const profileStatus = (widthComputer, widthMobile): React.ReactElement => {
        return (
            <>
                {
                    hasRequiredScopes(accessConfig?.overview, accessConfig?.overview?.scopes?.read, allowedScopes)
                    && isFeatureEnabled(accessConfig?.overview,
                        AppConstants.FEATURE_DICTIONARY.get("OVERVIEW_ACCOUNT_STATUS"))
                    && (
                        <Grid.Column computer={ widthComputer } mobile={ widthMobile }>
                            <ProfileWidget
                                userSource={ userSource }
                            />
                        </Grid.Column>
                    )
                }
            </>
        );
    };

    /**
     * Account Security Widget
     * @param widthComputer
     * @param widthMobile
     */
    const accountSecurity = (widthComputer: SemanticWIDTHS, widthMobile: SemanticWIDTHS): React.ReactElement => {
        return (
            <>
                {
                    hasRequiredScopes(accessConfig?.overview, accessConfig?.overview?.scopes?.read, allowedScopes)
                    && isFeatureEnabled(accessConfig?.overview,
                        AppConstants.FEATURE_DICTIONARY.get("OVERVIEW_ACCOUNT_SECURITY"))
                    && (
                        <Grid.Column computer={ widthComputer } mobile={ widthMobile }>
                            <SelfcareAccountSecurityOverviewWidget
                                onPrimaryActionClick={ () => history.push(
                                    AppConstants.getPaths().get("SECURITY") + "#" + CommonConstants.ACCOUNT_SECURITY
                                ) }
                            />
                        </Grid.Column>
                    )
                }
            </>
        );
    };

    /**
     * Account Status widget with shield (Currently not displayed).
     * @param widthComputer
     * @param widthMobile
     */
    const accountStatus = (widthComputer: SemanticWIDTHS, widthMobile: SemanticWIDTHS): React.ReactElement => {
        return (
            <>
                {
                    hasRequiredScopes(accessConfig?.overview, accessConfig?.overview?.scopes?.read, allowedScopes)
                    && isFeatureEnabled(accessConfig?.overview,
                        AppConstants.FEATURE_DICTIONARY.get("OVERVIEW_ACCOUNT_STATUS"))
                    && (
                        <Grid.Column computer={ widthComputer } mobile={ widthMobile }>
                            <AccountStatusWidget/>
                        </Grid.Column>
                    )
                }
            </>
        );
    };

    /**
     * Session Management Widget (Currently not displayed).
     * @param widthComputer
     * @param widthMobile
     */
    const accountActivity = (widthComputer: SemanticWIDTHS, widthMobile: SemanticWIDTHS): React.ReactElement => {
        return (
            <>
                {
                    hasRequiredScopes(accessConfig?.overview, accessConfig?.overview?.scopes?.read, allowedScopes)
                    && isFeatureEnabled(accessConfig?.overview,
                        AppConstants.FEATURE_DICTIONARY.get("OVERVIEW_ACCOUNT_ACTIVITY"))
                    && (
                        <Grid.Column computer={ widthComputer } mobile={ widthMobile }>
                            <UserSessionsWidget/>
                        </Grid.Column>
                    )
                }
            </>
        );
    };

    /**
     * Consent Management Widget (Currently not displayed).
     * @param widthComputer
     * @param widthMobile
     */
    const consents = (widthComputer: SemanticWIDTHS, widthMobile: SemanticWIDTHS): React.ReactElement => {
        return (
            <>
                {
                    hasRequiredScopes(accessConfig?.overview, accessConfig?.overview?.scopes?.read, allowedScopes)
                    && isFeatureEnabled(accessConfig?.overview,
                        AppConstants.FEATURE_DICTIONARY.get("OVERVIEW_CONSENTS"))
                    && (
                        <Grid.Column computer={ widthComputer } mobile={ widthMobile }>
                            <SelfcareConsentManagementOverviewWidget
                                onPrimaryActionClick={ () => history.push(
                                    AppConstants.getPaths().get("SECURITY") + "#" + CommonConstants.CONSENTS_CONTROL
                                ) }
                            />
                        </Grid.Column>
                    )
                }
            </>
        );
    };

    return (
        <Grid className="overview-page">
            <Divider hidden />
            <Grid.Row>
                { !enableAlternateWidgetLayout
                    ?
                        <>
                            { accountStatus(9, 16) }
                            { accountActivity(7, 16) }
                            { accountSecurity(8, 16) }
                            { consents(8, 16) }
                        </>
                    : !commonConfig.utils.isShowAdditionalWidgetAllowed(userStore)
                        ?
                            <>
                                { profileStatus(8, 16) }
                                { accountSecurity(8, 16) }
                            </>
                        : <Grid>
                            <Grid.Row>
                                { profileStatus(8, 16) }
                                { accountSecurity(8, 16) }
                            </Grid.Row>
                            <Grid.Row>
                                { accountActivity(8, 16) }
                                { consents(8, 16) }
                            </Grid.Row>
                        </Grid>
                }
            </Grid.Row>
        </Grid>
    );
};

