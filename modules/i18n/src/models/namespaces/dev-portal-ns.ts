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
    Confirmation,
    DangerZone,
    EditPage,
    FormAttributes,
    HelpPanelInterface,
    Notification,
    Page,
    Placeholder,
    TransferList
} from "../common";

/**
 * Model for the dev portal namespace
 */
export interface DevPortalNS {
    components: {
        advancedSearch: {
            form: {
                inputs: {
                    filterAttribute: {
                        label: string;
                        placeholder: string;
                        validations: {
                            empty: string;
                        };
                    };
                    filterCondition: {
                        label: string;
                        placeholder: string;
                        validations: {
                            empty: string;
                        };
                    };
                    filterValue: {
                        label: string;
                        placeholder: string;
                        validations: {
                            empty: string;
                        };
                    };
                };
            };
            hints: {
                querySearch: {
                    actionKeys: string;
                    label: string;
                };
            };
            options: {
                header: string;
            };
            placeholder: string;
            popups: {
                clear: string;
                dropdown: string;
            };
            resultsIndicator: string;
        };
        applications: {
            addWizard: {
                steps: {
                    generalSettings: {
                        heading: string;
                    };
                    protocolConfig: {
                        heading: string;
                    };
                    protocolSelection: {
                        heading: string;
                    };
                    summary: {
                        heading: string;
                        sections: {
                            accessURL: {
                                heading: string;
                            };
                            applicationQualifier: {
                                heading: string;
                            };
                            assertionURLs: {
                                heading: string;
                            };
                            audience: {
                                heading: string;
                            };
                            callbackURLs: {
                                heading: string;
                            };
                            certificateAlias: {
                                heading: string;
                            };
                            discoverable: {
                                heading: string;
                            };
                            grantType: {
                                heading: string;
                            };
                            issuer: {
                                heading: string;
                            };
                            metaFile: {
                                heading: string;
                            };
                            metadataURL: {
                                heading: string;
                            };
                            public: {
                                heading: string;
                            };
                            realm: {
                                heading: string;
                            };
                            renewRefreshToken: {
                                heading: string;
                            };
                            replyTo: {
                                heading: string;
                            };
                        };
                    };
                };
            };
            advancedSearch: {
                form: {
                    inputs: {
                        filterAttribute: {
                            placeholder: string;
                        };
                        filterCondition: {
                            placeholder: string;
                        };
                        filterValue: {
                            placeholder: string;
                        };
                    };
                };
                placeholder: string;
            };
            confirmations: {
                deleteApplication: Confirmation;
                deleteOutboundProvisioningIDP: Confirmation;
                deleteProtocol: Confirmation;
                regenerateSecret: Confirmation;
                revokeApplication: Confirmation;
            };
            dangerZoneGroup: {
                header: string;
                deleteApplication: DangerZone;
            };
            edit: {
                sections: {
                    access: {
                        addProtocolWizard: {
                            heading: string;
                            subHeading: string;
                            steps: {
                                protocolSelection: {
                                    manualSetup: {
                                        emptyPlaceholder: Placeholder;
                                        heading: string;
                                        subHeading: string;
                                    };
                                    quickSetup: {
                                        emptyPlaceholder: Placeholder;
                                        heading: string;
                                        subHeading: string;
                                    };
                                };
                            };
                        };
                        tabName: string;
                    };
                    advanced: {
                        tabName: string;
                    };
                    attributes: {
                        forms: {
                            fields: {
                                dynamic: {
                                    localRole: FormAttributes;
                                    applicationRole: FormAttributes;
                                };
                            };
                        };
                        selection: {
                            addWizard: {
                                header: string;
                                subHeading: string;
                                steps: {
                                    select: {
                                        transfer: TransferList;
                                    };
                                };
                            };
                            heading: string;
                            mappingTable: {
                                actions: {
                                    enable: string;
                                };
                                columns: {
                                    appAttribute: string;
                                    attribute: string;
                                    mandatory: string;
                                    requested: string;
                                };
                                listItem: {
                                    actions: {
                                        makeMandatory: string;
                                        makeRequested: string;
                                        removeMandatory: string;
                                        removeRequested: string;
                                    };
                                    fields: {
                                        claim: FormAttributes;
                                    };
                                };
                                searchPlaceholder: string;
                            };
                        };
                        roleMapping: {
                            heading: string;
                        };
                        tabName: string;
                    };
                    general: {
                        tabName: string;
                    };
                    provisioning: {
                        tabName: string;
                        inbound: {
                            heading: string;
                            subHeading: string;
                        };
                        outbound: {
                            actions: {
                                addIdp: string;
                            };
                            addIdpWizard: {
                                heading: string;
                                subHeading: string;
                                steps: {
                                    details: string;
                                };
                            };
                            heading: string;
                            subHeading: string;
                        };
                    };
                    signOnMethod: {
                        tabName: string;
                        sections: {
                            authenticationFlow: {
                                heading: string;
                                sections: {
                                    scriptBased: {
                                        heading: string;
                                        hint: string;
                                        editor: {
                                            templates: {
                                                heading: string;
                                                darkMode: string;
                                            };
                                        };
                                    };
                                    stepBased: {
                                        actions: {
                                            addStep: string;
                                            selectAuthenticator: string;
                                        };
                                        heading: string;
                                        hint: string;
                                        forms: {
                                            fields: {
                                                attributesFrom: FormAttributes;
                                                subjectIdentifierFrom: FormAttributes;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            forms: {
                advancedAttributeSettings: {
                    sections: {
                        subject: {
                            fields: {
                                subjectAttribute: FormAttributes;
                                subjectIncludeTenantDomain: FormAttributes;
                                subjectIncludeUserDomain: FormAttributes;
                                subjectUseMappedLocalSubject: FormAttributes;
                            };
                            heading: string;
                        };
                        role: {
                            heading: string;
                            fields: {
                                roleAttribute: FormAttributes;
                                role: FormAttributes;
                            };
                        };
                    };
                };
                advancedConfig: {
                    fields: {
                        enableAuthorization: FormAttributes;
                        returnAuthenticatedIdpList: FormAttributes;
                        saas: FormAttributes;
                        skipConsentLogin: FormAttributes;
                        skipConsentLogout: FormAttributes;
                    };
                    sections: {
                        certificate: {
                            heading: string;
                            fields: {
                                jwksValue: FormAttributes;
                                pemValue: FormAttributes;
                                type: FormAttributes;
                            };
                        };
                    };
                };
                generalDetails: {
                    fields: {
                        name: FormAttributes;
                        description: FormAttributes;
                        imageUrl: FormAttributes;
                        discoverable: FormAttributes;
                        accessUrl: FormAttributes;
                    };
                };
                inboundCustom: {
                    fields: {
                        checkbox: FormAttributes;
                        dropdown: FormAttributes;
                        generic: FormAttributes;
                        password: FormAttributes;
                    };
                };
                inboundOIDC: {
                    fields: {
                        callBackUrls: FormAttributes;
                        clientID: FormAttributes;
                        clientSecret: FormAttributes;
                        grant: FormAttributes;
                        public: FormAttributes;
                    };
                    sections: {
                        accessToken: {
                            heading: string;
                            hint: string;
                            fields: {
                                expiry: FormAttributes;
                                type: FormAttributes;
                            };
                        };
                        idToken: {
                            heading: string;
                            fields: {
                                expiry: FormAttributes;
                                algorithm: FormAttributes;
                                audience: FormAttributes;
                                encryption: FormAttributes;
                                method: FormAttributes;
                            };
                        };
                        logoutURLs: {
                            heading: string;
                            fields: {
                                back: FormAttributes;
                                front: FormAttributes;
                                signatureValidation: FormAttributes;
                            };
                        };
                        pkce: {
                            heading: string;
                            hint: string;
                            fields: {
                                pkce: FormAttributes;
                            };
                        };
                        refreshToken: {
                            heading: string;
                            fields: {
                                expiry: FormAttributes;
                                renew: FormAttributes;
                            };
                        };
                        scopeValidators: {
                            heading: string;
                            fields: {
                                validator: FormAttributes;
                            };
                        };
                    };
                };
                inboundSAML: {
                    fields: {
                        assertionURLs: FormAttributes;
                        defaultAssertionURL: FormAttributes;
                        idpEntityIdAlias: FormAttributes;
                        issuer: FormAttributes;
                        metaURL: FormAttributes;
                        mode: FormAttributes;
                        qualifier: FormAttributes;
                    };
                    sections: {
                        assertion: {
                            heading: string;
                            fields: {
                                audience: FormAttributes;
                                nameIdFormat: FormAttributes;
                                recipients: FormAttributes;
                            };
                        };
                        attributeProfile: {
                            heading: string;
                            fields: {
                                enable: FormAttributes;
                                includeAttributesInResponse: FormAttributes;
                                serviceIndex: FormAttributes;
                            };
                        };
                        encryption: {
                            heading: string;
                            fields: {
                                assertionEncryption: FormAttributes;
                                assertionEncryptionAlgorithm: FormAttributes;
                                keyEncryptionAlgorithm: FormAttributes;
                            };
                        };
                        idpInitiatedSLO: {
                            heading: string;
                            fields: {
                                enable: FormAttributes;
                                returnToURLs: FormAttributes;
                            };
                        };
                        responseSigning: {
                            heading: string;
                            fields: {
                                digestAlgorithm: FormAttributes;
                                responseSigning: FormAttributes;
                                signingAlgorithm: FormAttributes;
                            };
                        };
                        requestProfile: {
                            heading: string;
                            fields: {
                                enable: FormAttributes;
                            };
                        };
                        requestValidation: {
                            heading: string;
                            fields: {
                                signatureValidation: FormAttributes;
                                signatureValidationCertAlias: FormAttributes;
                            };
                        };
                        sloProfile: {
                            heading: string;
                            fields: {
                                enable: FormAttributes;
                                logoutMethod: FormAttributes;
                                requestURL: FormAttributes;
                                responseURL: FormAttributes;
                            };
                        };
                        ssoProfile: {
                            heading: string;
                            fields: {
                                artifactBinding: FormAttributes;
                                bindings: FormAttributes;
                                idpInitiatedSSO: FormAttributes;
                            };
                        };
                    };
                };
                inboundSTS: {
                    fields: {
                        realm: FormAttributes;
                        replyTo: FormAttributes;
                    };
                };
                inboundWSTrust: {
                    fields: {
                        audience: FormAttributes;
                        certificateAlias: FormAttributes;
                    };
                };
                outboundProvisioning: {
                    fields: {
                        blocking: FormAttributes;
                        connector: FormAttributes;
                        idp: FormAttributes;
                        jit: FormAttributes;
                        rules: FormAttributes;
                    };
                };
                provisioningConfig: {
                    fields: {
                        proxyMode: FormAttributes;
                        userstoreDomain: FormAttributes;
                    };
                };
            };
            helpPanel: HelpPanelInterface;
            list: {
                actions: {
                    add: string;
                };
            };
            notifications: {
                addApplication: Notification;
                authenticationStepMin: Notification;
                deleteApplication: Notification;
                deleteProtocolConfig: Notification;
                duplicateAuthenticationStep: Notification;
                emptyAuthenticationStep: Notification;
                fetchApplication: Notification;
                fetchApplications: Notification;
                fetchCustomInboundProtocols: Notification;
                fetchInboundProtocols: Notification;
                fetchProtocolMeta: Notification;
                fetchSAMLIDPConfigs: Notification;
                fetchOIDCIDPConfigs: Notification;
                fetchTemplate: Notification;
                fetchTemplates: Notification;
                getInboundProtocolConfig: Notification;
                regenerateSecret: Notification;
                revokeApplication: Notification;
                updateAdvancedConfig: Notification;
                updateApplication: Notification;
                updateAuthenticationFlow: Notification;
                updateClaimConfig: Notification;
                updateInboundProtocolConfig: Notification;
                updateInboundProvisioningConfig: Notification;
                updateOutboundProvisioning: Notification;
                updateProtocol: Notification;
            };
            placeholders: {
                emptyAttributesList: Placeholder;
                emptyAuthenticatorStep: Placeholder;
                emptyAuthenticatorsList: Placeholder;
                emptyOutboundProvisioningIDPs: Placeholder;
                emptyList: Placeholder;
                emptyProtocolList: Placeholder;
            };
            templates: {
                manualSetup: {
                    heading: string;
                    subHeading: string;
                };
                quickSetup: {
                    heading: string;
                    subHeading: string;
                };
            };
        };
        footer: {
            copyright: string;
        };
        helpPanel: {
            notifications: {
                pin: Notification;
            };
        };
        idp: {
            advancedSearch: {
                form: {
                    inputs: {
                        filterAttribute: {
                            placeholder: string;
                        };
                        filterCondition: {
                            placeholder: string;
                        };
                        filterValue: {
                            placeholder: string;
                        };
                    };
                };
                placeholder: string;
            };
            buttons: {
                addIDP: string;
                addAuthenticator: string;
                addConnector: string;
                addAttribute: string;
                addCertificate: string;
            };
            confirmations: {
                deleteIDP: Confirmation;
                deleteAuthenticator: Confirmation;
                deleteConnector: Confirmation;
            };
            dangerZoneGroup: {
                header: string;
                disableIDP: DangerZone;
                deleteIDP: DangerZone;
            };
            forms: {
                advancedConfigs: {
                    federationHub: FormAttributes;
                    homeRealmIdentifier: FormAttributes;
                    alias: FormAttributes;
                    certificateType: {
                        label: string;
                        hint: string;
                        certificatePEM: FormAttributes;
                        certificateJWKS: FormAttributes;
                    };
                };
                attributeSettings: {
                    attributeMapping: {
                        attributeColumnHeader: string;
                        attributeMapColumnHeader: string;
                        attributeMapInputPlaceholderPrefix: string;
                        componentHeading: string;
                        hint: string;
                    };
                    attributeProvisioning: {
                        attributeColumnHeader: {
                            0: string;
                            1: string;
                        };
                        attributeMapColumnHeader: string;
                        attributeMapInputPlaceholderPrefix: string;
                        componentHeading: string;
                        hint: string;
                    };
                    attributeListItem: {
                        validation: {
                            empty: string;
                        };
                    };
                    attributeSelection: {
                        searchAttributes: {
                            placeHolder: string;
                        };
                    };
                };
                authenticatorAccordion: {
                    default: {
                        0: string;
                        1: string;
                    };
                    enable: {
                        0: string;
                        1: string;
                    };
                };
                outboundConnectorAccordion: {
                    default: string;
                    enable: string;
                };
                common: {
                    requiredErrorMessage: string;
                    invalidURLErrorMessage: string;
                    invalidQueryParamErrorMessage: string;
                };
                generalDetails: {
                    name: FormAttributes;
                    description: FormAttributes;
                    image: FormAttributes;
                };
                jitProvisioning: {
                    enableJITProvisioning: FormAttributes;
                    provisioningUserStoreDomain: FormAttributes;
                    provisioningScheme: {
                        hint: string;
                        label: string;
                        children: {
                            0: string;
                            1: string;
                            2: string;
                            3: string;
                        };
                    };
                };
                roleMapping: {
                    heading: string;
                    keyName: string;
                    valueName: string;
                    validation: {
                        keyRequiredMessage: string;
                        valueRequiredErrorMessage: string;
                        duplicateKeyErrorMsg: string;
                    };
                    hint: string;
                };
                uriAttributeSettings: {
                    subject: {
                        heading: string;
                        hint: string;
                        placeHolder: string;
                        label: string;
                        validation: {
                            empty: string;
                        };
                    };
                    role: {
                        heading: string;
                        hint: string;
                        placeHolder: string;
                        label: string;
                        validation: {
                            empty: string;
                        };
                    };
                };
                outboundProvisioningRoles: {
                    heading: string;
                    hint: string;
                    placeHolder: string;
                    label: string;
                    popup: {
                        content: string;
                    };
                };
            };
            helpPanel: HelpPanelInterface;
            templates: {
                manualSetup: {
                    heading: string;
                    subHeading: string;
                };
                quickSetup: {
                    heading: string;
                    subHeading: string;
                };
            };
            modals: {
                addAuthenticator: {
                    title: string;
                    subTitle: string;
                };
                addCertificate: {
                    title: string;
                    subTitle: string;
                };
                addProvisioningConnector: {
                    title: string;
                    subTitle: string;
                };
                attributeSelection: {
                    title: string;
                    subTitle: string;
                    content: {
                        searchPlaceholder: string;
                    };
                };
            };
            notifications: {
                addFederatedAuthenticator: Notification;
                addIDP: Notification;
                changeCertType: {
                    pem: {
                       description: string;
                       message: string;
                    };
                    jwks: {
                        description: string;
                        message: string;
                    };
                };
                deleteIDP: Notification;
                disableAuthenticator: Notification;
                disableOutboundProvisioningConnector: Notification;
                duplicateCertificateUpload: Notification;
                getIDP: Notification;
                getIDPList: Notification;
                getIDPTemplate: Notification;
                getIDPTemplateList: Notification;
                getFederatedAuthenticator: Notification;
                getFederatedAuthenticatorsList: Notification;
                getFederatedAuthenticatorMetadata: Notification;
                getOutboundProvisioningConnector: Notification;
                getOutboundProvisioningConnectorsList: Notification;
                getOutboundProvisioningConnectorMetadata: Notification;
                getAllLocalClaims: Notification;
                getRolesList: Notification;
                submitAttributeSettings: Notification;
                deleteDefaultAuthenticator: Notification;
                deleteDefaultConnector: Notification;
                updateClaimsConfigs: Notification;
                updateFederatedAuthenticator: Notification;
                updateFederatedAuthenticators: Notification;
                updateIDP: Notification;
                updateIDPCertificate: Notification;
                updateIDPRoleMappings: Notification;
                updateJITProvisioning: Notification;
                updateOutboundProvisioningConnectors: Notification;
                updateOutboundProvisioningConnector: Notification;
            };
            placeHolders: {
                emptyCertificateList: Placeholder;
                emptyIDPList: Placeholder;
                emptyIDPSearchResults: Placeholder;
                emptyAuthenticatorList: Placeholder;
                emptyConnectorList: Placeholder;
                noAttributes: Placeholder;
            };
            wizards: {
                addAuthenticator: {
                    header: string;
                    steps: {
                        authenticatorSelection: {
                            title: string;
                            quickSetup: {
                                title: string;
                                subTitle: string;
                            };
                            manualSetup: {
                                title: string;
                                subTitle: string;
                            };
                        };
                        authenticatorConfiguration: {
                            title: string;
                        };
                        summary: {
                            title: string;
                        };
                    };
                };
                addIDP: {
                    header: string;
                    steps: {
                        generalSettings: {
                            title: string;
                        };
                        authenticatorConfiguration: {
                            title: string;
                        };
                        provisioningConfiguration: {
                            title: string;
                        };
                        summary: {
                            title: string;
                        };
                    };
                };
                addProvisioningConnector: {
                    header: string;
                    steps: {
                        connectorSelection: {
                            title: string;
                            defaultSetup: {
                                title: string;
                                subTitle: string;
                            };
                        };
                        connectorConfiguration: {
                            title: string;
                        };
                        summary: {
                            title: string;
                        };
                    };
                };
                buttons: {
                    next: string;
                    finish: string;
                    previous: string;

                };
            };
        };
        overview: {
            widgets: {
                insights: {
                    applications: {
                        heading: string;
                        subHeading: string;
                    };
                    idp: {
                        heading: string;
                        subHeading: string;
                    };
                };
                overview: {
                    cards: {
                        applications: {
                            heading: string;
                        };
                        idp: {
                            heading: string;
                        };
                        userstores: {
                            heading: string;
                        };
                    };
                    heading: string;
                    subHeading: string;
                };
                quickLinks: {
                    cards: {
                        certificates: {
                            heading: string;
                            subHeading: string;
                        };
                        dialects: {
                            heading: string;
                            subHeading: string;
                        };
                        emailTemplates: {
                            heading: string;
                            subHeading: string;
                        };
                        generalConfigs: {
                            heading: string;
                            subHeading: string;
                        };
                        groups: {
                            heading: string;
                            subHeading: string;
                        };
                        roles: {
                            heading: string;
                            subHeading: string;
                        };
                    };
                    heading: string;
                    subHeading: string;
                };
            };
        };
        privacy: {
            about: {
                description: string;
                heading: string;
            };
            privacyPolicy: {
                collectionOfPersonalInfo: {
                    description: {
                        list1: {
                            0: string;
                            1: string;
                            2: string;
                        };
                        para1: string;
                    };
                    heading: string;
                    trackingTechnologies: {
                        description: {
                            list1: {
                                0: string;
                                1: string;
                                2: string;
                                3: string;
                            };
                            para1: string;
                        };
                        heading: string;
                    };
                };
                description: {
                    para1: string;
                    para2: string;
                    para3: string;
                };
                disclaimer: {
                    description: {
                        list1: {
                            0: string;
                            1: string;
                        };
                    };
                    heading: string;
                };
                disclosureOfPersonalInfo: {
                    description: string;
                    heading: string;
                    legalProcess: {
                        description: string;
                        heading: string;
                    };
                };
                heading: string;
                moreInfo: {
                    changesToPolicy: {
                        description: {
                            para1: string;
                            para2: string;
                        };
                        heading: string;
                    };
                    contactUs: {
                        description: {
                            para1: string;
                        };
                        heading: string;
                    };
                    heading: string;
                    yourChoices: {
                        description: {
                            para1: string;
                            para2: string;
                        };
                        heading: string;
                    };
                };
                storageOfPersonalInfo: {
                    heading: string;
                    howLong: {
                        description: {
                            list1: {
                                0: string;
                                1: string;
                            };
                            para1: string;
                            para2: string;
                        };
                        heading: string;
                    };
                    requestRemoval: {
                        description: {
                            para1: string;
                            para2: string;
                        };
                        heading: string;
                    };
                    where: {
                        description: {
                            para1: string;
                            para2: string;
                        };
                        heading: string;
                    };
                };
                useOfPersonalInfo: {
                    description: {
                        list1: {
                            0: string;
                            1: string;
                            2: string;
                        };
                        para1: string;
                        para2: string;
                        subList1: {
                            heading: string;
                            list: {
                                0: string;
                                1: string;
                                2: string;
                            };
                        };
                        subList2: {
                            heading: string;
                            list: {
                                0: string;
                                1: string;
                            };
                        };
                    };
                    heading: string;
                };
                whatIsPersonalInfo: {
                    description: {
                        list1: {
                            0: string;
                            1: string;
                            2: string;
                            3: string;
                        };
                        list2: {
                            0: string;
                            1: string;
                            2: string;
                            3: string;
                        };
                        para1: string;
                        para2: string;
                    };
                    heading: string;
                };
            };
        };
        templates: {
            emptyPlaceholder: Placeholder;
        };
        transferList: {
            searchPlaceholder: string;
            list: {
                headers: {
                    0: string;
                    1: string;
                };
                emptyPlaceholders: {
                    default: string;
                    users: {
                        roles: {
                            unselected: string;
                            selected: string;
                        };
                    };
                };
            };
        };
    };
    confirmations: {
        resourceEditTabNav: Confirmation;
    };
    notifications: {
        endSession: Notification;
        getProfileInfo: Notification;
        getProfileSchema: Notification;
    };
    pages: {
        applicationTemplate: EditPage;
        applications: Page;
        applicationsEdit: EditPage;
        idp: Page;
        idpTemplate: {
            title: string;
            subTitle: string;
            backButton: string;
            supportServices: {
                authenticationDisplayName: string;
                provisioningDisplayName: string;
            };
        };
        overview: Page;
    };
    placeholders: {
        404: Placeholder;
        accessDenied: Placeholder;
        consentDenied: Placeholder;
        emptySearchResult: Placeholder;
        genericError: Placeholder;
        loginError: Placeholder;
        unauthorized: Placeholder;
        underConstruction: Placeholder;
    };
}
