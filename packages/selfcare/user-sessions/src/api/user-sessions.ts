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

import { AsgardeoSPAClient } from "@asgardeo/auth-react";
import { UserSessions } from "../models";


/**
 * Get an axios instance.
 *
 * @type {AxiosHttpClientInstance}
 */
const httpClient = AsgardeoSPAClient.getInstance().httpRequest.bind(AsgardeoSPAClient.getInstance());

/**
 * Fetches the list of user sessions from the API.
 *
 * @return {Promise<any>} A promise containing the response.
 */
export const fetchUserSessions = (url: string): Promise<any> => {
    const requestConfig = {
        headers: {
            Accept: "application/json"
        },
        method: "GET",
        url: url
    };

    return httpClient(requestConfig)
        .then((response) => {
            return response.data as UserSessions;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};

/**
 * Terminates a user session.
 *
 * @param {string} id - Session ID.
 * @return {Promise<any>} A promise containing the response.
 */
export const terminateUserSession = (url: string, id: string): Promise<any> => {
    const requestConfig = {
        headers: {
            Accept: "application/json"
        },
        method: "DELETE",
        url: url.replace(":id", id)
    };

    return httpClient(requestConfig)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};

/**
 * Terminates all user sessions.
 *
 * @return {Promise<any>} A promise containing the response.
 */
export const terminateAllUserSessions = (url: string): Promise<any> => {
    const requestConfig = {
        headers: {
            Accept: "application/json"
        },
        method: "DELETE",
        url: url
    };

    return httpClient(requestConfig)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
};
