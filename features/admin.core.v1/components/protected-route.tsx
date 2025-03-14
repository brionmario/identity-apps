/**
 * Copyright (c) 2020, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
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

import { AppConstants as AppConstantsCore } from "@wso2is/core/constants";
import { AuthenticateUtils } from "@wso2is/core/utils";
import React, { FunctionComponent, ReactElement } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { AppConstants } from "../constants/app-constants";
import { AppState } from "../store";

/**
 * Protected route component.
 *
 * @param props - Props injected to the component.
 * @returns ProtectedRoute component.
 */
export const ProtectedRoute: FunctionComponent<RouteProps> = (props: RouteProps): ReactElement => {

    const {
        component: Component,
        ...rest
    } = props;

    const isAuthenticated: boolean = useSelector((state: AppState) => state.auth.isAuthenticated);

    /**
     * Update existing location path in the state to recall upon page refresh or authentication callback.
     * The login path and the login error path have been skipped.
     */
    if ((window.location.pathname === AppConstants.getAppLoginPath())
        || (window.location.pathname === AppConstants.getPaths().get("UNAUTHORIZED"))
        || (window.location.pathname === AppConstants.getPaths().get("PAGE_NOT_FOUND")
            || (window.location.pathname === AppConstants.getPaths().get("STORING_DATA_DISABLED")))) {
        AuthenticateUtils.updateAuthenticationCallbackUrl(AppConstantsCore.CONSOLE_APP, AppConstants.getAppHomePath());
    } else {
        const authCallbackUrl: string = window.location.pathname + window.location.hash;

        AuthenticateUtils.updateAuthenticationCallbackUrl(AppConstantsCore.CONSOLE_APP, authCallbackUrl);
    }

    return (
        <Route
            render={ (renderProps: RouteComponentProps<any>) =>
                isAuthenticated
                    ? Component
                        ? <Component { ...renderProps } />
                        : null
                    : <Redirect to={ AppConstants.getAppLoginPath() } />
            }
            { ...rest }
        />
    );
};

