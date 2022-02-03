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

import { CommonConfigReducerStateInterface } from "@wso2is/core/models";
import { I18nModuleOptionsInterface } from "@wso2is/i18n";
import {
    DeploymentConfigInterface,
    FeatureConfigInterface,
    ServiceResourceEndpointsInterface,
    UIConfigInterface
} from "../../models";
import {
    AnnouncementBannerInterface, AppThemeConfigInterface,
    DocumentationInterface,
    DocumentationProviders,
    DocumentationStructureFileTypes, GithubDocumentationOptionsInterface, GravatarConfig, I18nConfigsInterface,
    IdpConfigInterface, PrivacyPolicyConfigsInterface, ProductVersionConfigInterface
} from "@wso2is/core/dist/src/models";
import { ApplicationTemplateLoadingStrategies } from "../../../applications";
import { IdentityProviderTemplateLoadingStrategies } from "../../../identity-providers";

/**
 * Initial state for the common config reducer.
 */
export const commonConfigReducerInitialState: CommonConfigReducerStateInterface<
    DeploymentConfigInterface,
    ServiceResourceEndpointsInterface,
    FeatureConfigInterface,
    I18nModuleOptionsInterface,
    UIConfigInterface> = {

        deployment: {
            appBaseName: "",
            appBaseNameWithoutTenant: "",
            appHomePath: "",
            appLoginPath: "",
            appLogoutPath: "",
            clientHost: "",
            clientID: "",
            clientOrigin: "",
            documentation: null,
            idpConfigs: null,
            loginCallbackUrl: "",
            serverHost: "",
            serverOrigin: "",
            superTenant: "",
            tenant: "",
            tenantPath: "",
            tenantPrefix: "",
            adminApp: null,
            accountApp: null,
            developerApp: null,
            extensions: null,
            helpCenterURL: "",
            docSiteURL: "",
            allowMultipleAppProtocols: undefined
        },
        endpoints: {
            claims: "",
            externalClaims: "",
            localClaims: "",
            certificates: "",
            clientCertificates: "",
            publicCertificates: "",
            groups: "",
            accountDisabling: "",
            accountLocking: "",
            accountRecovery: "",
            captchaForSSOLogin: "",
            governanceConnectorCategories: "",
            loginPolicies: "",
            multiFactorAuthenticators: "",
            passwordHistory: "",
            passwordPolicies: "",
            passwordPolicy: "",
            selfSignUp: "",
            serverConfigurations: "",
            serverSupportedSchemas: "",
            bulk: "",
            userSessions: "",
            userStores: "",
            users: "",
            roles: "",
            permission: "",
            applications: "",
            requestPathAuthenticators: "",
            authenticators: "",
            authenticatorTags: "",
            identityProviders: "",
            localAuthenticators: "",
            oidcScopes: "",
            createSecretType: "",
            updateSecretType: "",
            getSecretType: "",
            deleteSecretType: "",
            createSecret: "",
            updateSecret: "",
            getSecret: "",
            deleteSecret: "",
            getSecretList: "",
            CORSOrigins: "",
            me: "",
            saml2Meta: "",
            wellKnown: ""
        },
        features: {
            applications: null,
            approvals: null,
            attributeDialects: null,
            certificates: null,
            emailTemplates: null,
            governanceConnectors: null,
            groups: null,
            guestUser: null,
            identityProviders: null,
            oidcScopes: null,
            remoteFetchConfig: null,
            roles: null,
            userStores: null,
            users: null,
            secretsManagement: null
        },
        i18n: null,
        ui: {
            announcements: [],
            appCopyright: "",
            appName: "",
            appTitle: "",
            gravatarConfig: null,
            features: {
                applications: null,
                approvals: null,
                attributeDialects: null,
                certificates: null,
                emailTemplates: null,
                governanceConnectors: null,
                groups: null,
                guestUser: null,
                identityProviders: null,
                oidcScopes: null,
                remoteFetchConfig: null,
                roles: null,
                userStores: null,
                users: null,
                secretsManagement: null
            },
            i18nConfigs: null,
            isCookieConsentBannerEnabled: undefined,
            isHeaderAvatarLabelAllowed: undefined,
            isLeftNavigationCategorized: undefined,
            privacyPolicyConfigs: null,
            productName: "",
            productVersionConfig: null,
            theme: null,
            applicationTemplateLoadingStrategy: undefined,
            hiddenAuthenticators: [],
            identityProviderTemplates: null,
            identityProviderTemplateLoadingStrategy: null,
            isDefaultDialectEditingEnabled: undefined,
            isDialectAddingEnabled: undefined,
            isClientSecretHashEnabled: undefined,
            isGroupAndRoleSeparationEnabled: undefined,
            isRequestPathAuthenticationEnabled: undefined,
            listAllAttributeDialects: undefined,
            isSignatureValidationCertificateAliasEnabled: undefined,
            selfAppIdentifier: "",
            systemAppsIdentifiers: [],
            showAppSwitchButton: undefined,
            hiddenUserStores: []
        }
    };
