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

import { FunctionComponent, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { RouteComponentProps } from "react-router";
import { AppState, history, AppConstants, ConfigReducerStateInterface } from "../../core";
import { handleSignIn } from "../store";

/**
 * Virtual component used to handle Sign in action.
 *
 * @param props - Props injected to the component.
 * @return {React.ReactElement}
 */
const SignIn: FunctionComponent<RouteComponentProps> = (
    props: RouteComponentProps
): ReactElement => {

    const { location }  = props;

    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state: AppState) => state.auth.isAuthenticated);
    const config: ConfigReducerStateInterface = useSelector((state: AppState) => state.config);

    const error = new URLSearchParams(location.search).get("error_description");

    const getAuthenticationCallbackUrl = () => {
        return window.sessionStorage.getItem("auth_callback_url");
    };

    const loginSuccessRedirect = () => {
        const AuthenticationCallbackUrl = getAuthenticationCallbackUrl();
        const location =
            !AuthenticationCallbackUrl
            || AuthenticationCallbackUrl === config.deployment.appLoginPath
                ? config.deployment.appHomePath
                : AuthenticationCallbackUrl;

        history.push(location);
    };

    useEffect(() => {
        if (!isAuthenticated && !error) {
            dispatch(handleSignIn());
            return;
        }

        if (error === AppConstants.USER_DENIED_CONSENT_SERVER_ERROR) {
            history.push({
                pathname: AppConstants.PATHS.get("UNAUTHORIZED"),
                search: "?error=" + AppConstants.LOGIN_ERRORS.get("USER_DENIED_CONSENT")
            });

            return;
        }

        loginSuccessRedirect();
    }, [ isAuthenticated ]);

    return null;
};

/**
 * A default export was added to support React.lazy.
 * TODO: Change this to a named export once react starts supporting named exports for code splitting.
 * @see {@link https://reactjs.org/docs/code-splitting.html#reactlazy}
 */
export default SignIn;
