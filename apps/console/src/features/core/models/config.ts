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

import {
    CommonConfigInterface,
    CommonDeploymentConfigInterface,
    CommonUIConfigInterface,
    FeatureAccessConfigInterface
} from "@wso2is/core/models";
import { I18nModuleOptionsInterface } from "@wso2is/i18n";
import { ApplicationsResourceEndpointsInterface } from "../../applications";
import { AttributesResourceEndpointsInterface } from "../../attributes";
import { CertificatesResourceEndpointsInterface } from "../../certificates";
import { IDPResourceEndpointsInterface } from "../../identity-providers";
import { RolesResourceEndpointsInterface } from "../../roles";
import { ServerConfigurationsResourceEndpointsInterface } from "../../server-configurations";
import { UsersResourceEndpointsInterface } from "../../users";
import { UserstoreResourceEndpointsInterface } from "../../userstores";

export type ConfigInterface = CommonConfigInterface<
    CommonDeploymentConfigInterface,
    ServiceResourceEndpointsInterface,
    FeatureConfigInterface,
    I18nModuleOptionsInterface,
    UIConfigInterface>;

/**
 * Application configuration interface.
 */
export interface FeatureConfigInterface {
    /**
     * Attribute dialects(Claim dialects) feature.
     */
    attributeDialects?: FeatureAccessConfigInterface;
    /**
     * Certificates configurations feature.
     */
    certificates?: FeatureAccessConfigInterface;
    /**
     * Email templates feature.
     */
    emailTemplates?: FeatureAccessConfigInterface;
    /**
     * General Configuration settings feature.
     */
    generalConfigurations?: FeatureAccessConfigInterface;
    /**
     * Groups feature.
     */
    groups?: FeatureAccessConfigInterface;
    /**
     * Role management feature.
     */
    roles?: FeatureAccessConfigInterface;
    /**
     * User store configurations feature.
     */
    userStores?: FeatureAccessConfigInterface;
    /**
     * User management feature.
     */
    users?: FeatureAccessConfigInterface;
}

/**
 * Portal Deployment config interface inheriting the common configs from core module.
 */
export interface DeploymentConfigInterface extends CommonDeploymentConfigInterface {
    /**
     * Configs of the user portal app.
     */
    accountApp: ExternalAppConfigInterface;
    /**
     * Configs of the developer portal app.
     */
    developerApp: ExternalAppConfigInterface;
}

/**
 * Interface for defining settings and configs of an external app.
 */
interface ExternalAppConfigInterface {
    path: string;
}

/**
 * Portal UI config interface inheriting the common configs from core module.
 */
export interface UIConfigInterface extends CommonUIConfigInterface {
    /**
     * Application(SPs) that shouldn't be allowed to delete.
     */
    doNotDeleteApplications?: string[];
    /**
     * Application(SPs) that shouldn't be allowed to delete.
     */
    doNotDeleteIdentityProviders?: string[];
}

/**
 * Service resource endpoints config.
 */
export interface ServiceResourceEndpointsInterface extends AttributesResourceEndpointsInterface,
    CertificatesResourceEndpointsInterface,
    ServerConfigurationsResourceEndpointsInterface,
    UsersResourceEndpointsInterface,
    UserstoreResourceEndpointsInterface,
    RolesResourceEndpointsInterface,
    ApplicationsResourceEndpointsInterface,
    IDPResourceEndpointsInterface {

    // TODO: Remove this endpoint and use ID token to get the details
    me: string;
    saml2Meta: string;
    wellKnown: string;
}
