/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the License); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { LinkInterface } from "@wso2is/core/models";
import {
    OIDCDataInterface,
    PassiveStsConfigurationInterface,
    SAML2ConfigurationInterface,
    WSTrustConfigurationInterface
} from "./application-inbound";

/**
 *  Captures the basic details in the applications.
 */
export interface ApplicationBasicInterface {
    id?: string;
    name: string;
    description?: string;
    accessUrl?: string;
}

/**
 *  Application list item model.
 */
export interface ApplicationListItemInterface extends ApplicationBasicInterface {
    image?: string;
    self?: string;
}

/**
 *  Main application interface.
 */
export interface ApplicationInterface extends ApplicationBasicInterface {
    imageUrl?: string;
    claimConfiguration?: ClaimConfigurationInterface;
    advancedConfigurations?: AdvancedConfigurationsInterface;
    inboundProtocols?: InboundProtocolListItemInterface[];
    authenticationSequence?: AuthenticationSequenceInterface;
    provisioningConfigurations?: ProvisioningConfigurationInterface;
}

/**
 * Interface for the inbound protocol in the application response.
 */
export interface InboundProtocolListItemInterface {
    type: string;
    name?: string;
    self: string;
}

/**
 *  Application Basic details for add wizard.
 */
export interface ApplicationBasicWizard extends ApplicationBasicInterface {
    imageUrl?: string;
    discoverableByEndUsers?: boolean;
}

/**
 *  Captures inbound protocols.
 */
export interface InboundProtocolsInterface {
    oidc?: OIDCDataInterface;
    saml?: SAML2ConfigurationInterface;
    wsTrust?: WSTrustConfigurationInterface;
    passiveSts?: PassiveStsConfigurationInterface;
}

/**
 *  Application interface for Post request.
 */
export interface MainApplicationInterface  extends ApplicationInterface {
    inboundProtocolConfiguration?: InboundProtocolsInterface;
}

/**
 *  Captures application list properties.
 */
export interface ApplicationListInterface {
    /**
     * Number of results that match the listing operation.
     */
    totalResults?: number;
    /**
     * Index of the first element of the page, which will be equal to offset + 1.
     */
    startIndex?: number;
    /**
     * Number of elements in the returned page.
     */
    count?: number;
    /**
     * Set of applications.
     */
    applications?: ApplicationListItemInterface[];
    /**
     * Useful links for pagination.
     */
    links?: LinkInterface[];
}

export interface AppClaimInterface {
    id?: string;
    uri: string;
    displayName?: string;
}

export interface ClaimMappingInterface {
    applicationClaim: string;
    localClaim: AppClaimInterface;
}

interface SubjectInterface {
    claim: AppClaimInterface[];
    includeUserDomain: boolean;
    includeTenantDomain: boolean;
    useMappedLocalSubject: boolean;
}

interface RoleInterface {
    claim: AppClaimInterface[];
    includeUserDomain: boolean;
}

export interface RoleMappingInterface {
    localRole: string;
    applicationRole: string;
}

export interface RoleConfigInterface {
    mappings: RoleMappingInterface[];
    includeUserDomain: boolean;
    claim: AppClaimInterface;
}

export interface RequestedClaimConfigurationInterface {
    claim: AppClaimInterface;
    mandatory: boolean;
}

export interface SubjectConfigInterface {
    claim?: AppClaimInterface;
    includeUserDomain?: boolean;
    includeTenantDomain?: boolean;
    useMappedLocalSubject?: boolean;
}

/**
 *  Captures main claim features.
 */
export interface ClaimConfigurationInterface {
    dialect: string;
    claimMappings: ClaimMappingInterface[];
    requestedClaims: RequestedClaimConfigurationInterface[];
    subject: SubjectConfigInterface;
    role: RoleConfigInterface;
}

/**
 *  Acceptable certificate types.
 */
export enum CertificateTypeInterface {
    JWKS = "JWKS",
    PEM = "PEM"
}

export interface CertificateInterface {
    value?: string;
    type?: CertificateTypeInterface; // TODO  Check for upload option.
}

/**
 *  Captures application related configuration.
 */
export interface AdvancedConfigurationsInterface {
    saas?: boolean;
    discoverableByEndUsers?: boolean;
    certificate?: CertificateInterface;
    skipLoginConsent?: boolean;
    skipLogoutConsent?: boolean;
    returnAuthenticatedIdpList?: boolean;
    enableAuthorization?: boolean;
}

export enum AuthenticationSequenceType {
    DEFAULT = "DEFAULT",
    USER_DEFINED = "USER_DEFINED"
}

export interface AuthenticatorInterface {
    idp: string;
    authenticator: string;
}

export interface AuthenticationStepInterface {
    id: number;
    options: AuthenticatorInterface[];
}

/**
 * Authentication Sequence model.
 */
export interface AuthenticationSequenceInterface  {
    type?: AuthenticationSequenceType;
    steps?: AuthenticationStepInterface[];
    requestPathAuthenticators?: string[];
    script?: string;
    subjectStepId?: number;
    attributeStepId?: number;
}

/**
 *  Application template list item interface.
 */
export interface ApplicationTemplateListItemInterface {
    id: string;
    name: string;
    description?: string;
    image: string;
    authenticationProtocol: string;
    types?: any[];
    category?: string;
    displayOrder?: number;
    self?: string;
}

/**
 *  Application template list interface.
 */
export interface ApplicationTemplateListInterface {
    templates: ApplicationTemplateListItemInterface[];
}

/**
 *  Contains Application template data.
 */
export interface ApplicationTemplateInterface extends ApplicationTemplateListItemInterface {
    application: MainApplicationInterface;
}

/**
 * Enum for supported application template categories.
 *
 * @readonly
 * @enum {string}
 */
export enum SupportedApplicationTemplateCategories {
    QUICK_START = "quick_start"
}

/**
 * Enum for application template categories.
 *
 * @readonly
 * @enum {string}
 */
export enum ApplicationTemplateCategories {
    DEFAULT = "DEFAULT",
    CUSTOM = "CUSTOM",
    DEFAULT_CUSTOM = "DEFAULT_CUSTOM"
}

/**
 *  Application template technology interface.
 */
export interface ApplicationTemplateTechnology {
    name: string;
    displayName: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    logo: any;
}

/**
 * Adaptive auth templates interface.
 */
export interface AdaptiveAuthTemplatesListInterface {
    /**
     * Templates as a JSON.
     */
    templatesJSON: AdaptiveAuthTemplateCategoryListItemInterface;
}

/**
 * Adaptive auth template category list item interface.
 * Category name will be the key.
 */
export interface AdaptiveAuthTemplateCategoryListItemInterface {
    [ key: string ]: AdaptiveAuthTemplateCategoryInterface;
}

/**
 * Adaptive auth template category interface.
 */
export interface AdaptiveAuthTemplateCategoryInterface {
    displayName: string;
    templates?: AdaptiveAuthTemplateInterface[];
    icon?: string;
    order: number;
}

/**
 * Adaptive auth template interface.
 */
export interface AdaptiveAuthTemplateInterface {
    summary: string;
    preRequisites: string[];
    helpLink: string;
    code: string[];
    defaultStepsDescription: AdaptiveAuthTemplateDefaultStepsDescriptionInterface;
    parametersDescription: AdaptiveAuthTemplateParametersDescriptionInterface;
    name: string;
    defaultAuthenticators: AdaptiveAuthTemplateDefaultAuthenticatorsListInterface;
    category: string;
    title: string;
    authenticationSteps: number;
}

/**
 * Adaptive auth template parameters description interface.
 */
interface AdaptiveAuthTemplateParametersDescriptionInterface {
    [ key: string ]: string;
}

/**
 * Adaptive auth template default steps description interface.
 */
interface AdaptiveAuthTemplateDefaultStepsDescriptionInterface {
    [ key: string ]: string;
}

/**
 * Adaptive auth template default authenticators list interface.
 */
interface AdaptiveAuthTemplateDefaultAuthenticatorsListInterface {
    [ key: string ]: AdaptiveAuthTemplateDefaultAuthenticatorInterface;
}

/**
 * Adaptive auth template default authenticator interface.
 */
interface AdaptiveAuthTemplateDefaultAuthenticatorInterface {
    federated: string[];
    local: string[];
}

export const emptyApplication = (): ApplicationInterface => ({
    accessUrl: "",
    advancedConfigurations: {
        certificate: {
            type: CertificateTypeInterface.JWKS,
            value: ""
        },
        discoverableByEndUsers: false,
        enableAuthorization: false,
        returnAuthenticatedIdpList: false,
        saas: false,
        skipLoginConsent: false,
        skipLogoutConsent: false
    },
    authenticationSequence: undefined,
    claimConfiguration: undefined,
    description: "",
    id: "",
    imageUrl: "",
    inboundProtocols: undefined,
    name: ""
});

/**
 * Inbound SCIM Provisioning configuration.
 */
export interface InboundSCIMProvisioningConfigurationInterface {
    proxyMode: boolean;
    provisioningUserstoreDomain?: string;
}

/**
 * Outbound Provisioning Configuration.
 */
export interface OutboundProvisioningConfigurationInterface {
    idp: string;
    connector: string;
    blocking?: boolean;
    rules?: boolean;
    jit?: boolean;
}

/**
 * Provisioning configuration for the application.
 */
export interface ProvisioningConfigurationInterface {
    inboundProvisioning?: InboundSCIMProvisioningConfigurationInterface;
    outboundProvisioningIdps?: OutboundProvisioningConfigurationInterface[];
}

/**
 * Captures name and id of the user store.
 */
export interface SimpleUserStoreListItemInterface {
    id?: string;
    name: string;
}

/**
 * Captures name and id of the user store.
 */
export interface SimpleUserStoreListItemInterface {
    id?: string;
    name: string;
}

/**
 * OIDC configurations for the application.
 */
export interface OIDCApplicationConfigurationInterface {
    authorizeEndpoint: string;
    introspectionEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    jwksEndpoint: string;
}

/**
 * SAML configurations for the application.
 */
export interface SAMLApplicationConfigurationInterface {
    issuer: string;
    ssoUrl: string;
    sloUrl: string;
    certificate: string;
    metadata: string;
}

export const emptyOIDCAppConfiguration = (): OIDCApplicationConfigurationInterface => ({
    authorizeEndpoint: "",
    introspectionEndpoint: "",
    jwksEndpoint: "",
    tokenEndpoint: "",
    userEndpoint: ""
});

export const emptySAMLAppConfiguration = (): SAMLApplicationConfigurationInterface => ({
    certificate: "",
    issuer: "",
    metadata: "",
    sloUrl: "",
    ssoUrl: ""
});
