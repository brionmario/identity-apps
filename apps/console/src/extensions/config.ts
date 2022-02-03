/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { UsersConstants } from "./components/users/constants";
import { ExtensionsConfigInterface } from "./models";
import { AppConstants, getSidePanelIcons } from "../features/core";
import { ServerConfigurationsConstants } from "../features/server-configurations";

export const ExtensionsConfig = (): ExtensionsConfigInterface => ({
    componentExtensions: [
        {
            component: "application",
            panes: [
                {
                    componentid: "quick-start",
                    path: "./components/component-extensions/application/quick-start-tab",
                    show: true,
                    title: "console:develop.componentExtensions.component.application.quickStart.title"
                }
            ],
            subComponent: "edit",
            type: "tab"
        }
    ],
    routes: {
        auth: [
            {
                component: "./components/tenants/pages/create-tenant",
                exact: true,
                icon: null,
                id: "createTenant",
                name: "createTenant",
                path: AppConstants.getPaths().get("CREATE_TENANT"),
                protected: true,
                showOnSidePanel: false
            }
        ],
        default: [
            {
                component: "./components/getting-started/getting-started",
                exact: false,
                icon: {
                    icon: import("./assets/images/icons/shuttle-icon.svg")
                },
                id: "gettingStarted",
                name: "Getting Started",
                order: 0,
                path: `${ AppConstants.getMainViewBasePath() }/getting-started`,
                protected: true,
                showOnSidePanel: true
            }
        ],
        develop: [
            {
                id: "secretsManagement",
                showOnSidePanel: false
            },
            {
                category: "extensions:develop.sidePanel.categories.branding",
                component: "./components/branding/pages/branding",
                exact: true,
                icon: {
                    icon: import("./assets/images/icons/paint-palette-and-brush-outline.svg")
                },
                id: "branding",
                name: "extensions:develop.sidePanel.branding",
                order: 3,
                path: `${ AppConstants.getDeveloperViewBasePath() }/branding`,
                protected: true,
                showOnSidePanel: true
            }
        ],
        fullscreen: [],
        manage: [
            {
                id: "userStores",
                showOnSidePanel: false
            },
            {
                id: "emailTemplates",
                showOnSidePanel: false
            },
            {
                id: "remoteFetchConfig",
                showOnSidePanel: false
            },
            {
                id: "approvals",
                showOnSidePanel: false
            },
            {
                id: "certificates",
                showOnSidePanel: false
            },
            {
                category: "extensions:manage.sidePanel.categories.userManagement",
                children: [
                    {
                        component: "./components/users/pages/consumer-user-edit",
                        exact: true,
                        icon: {
                            icon: import("./assets/images/icons/user-icon.svg")
                        },
                        id: "customer-user-edit",
                        name: "Customer Users Edit",
                        path: UsersConstants.getPaths().get("CUSTOMER_USER_EDIT_PATH"),
                        protected: true,
                        showOnSidePanel: false
                    },
                    {
                        component: "./components/users/pages/guest-user-edit",
                        exact: true,
                        icon: {
                            icon: import("./assets/images/icons/user-icon.svg")
                        },
                        id: "collaborator-user-edit",
                        name: "Collaborator Users Edit",
                        path: UsersConstants.getPaths().get("COLLABORATOR_USER_EDIT_PATH"),
                        protected: true,
                        showOnSidePanel: false
                    }
                ],
                component: "./components/users/pages/users",
                exact: true,
                icon: {
                    icon: import("./assets/images/icons/user-icon.svg")
                },
                id: "users",
                name: "Users",
                order: 1,
                path: UsersConstants.getPaths().get("USERS_PATH"),
                protected: true,
                showOnSidePanel: true
            },
            {
                category: "extensions:manage.sidePanel.categories.userManagement",
                children: [
                    {
                        component: "./components/users/pages/consumer-user-edit",
                        exact: true,
                        icon: {
                            icon: import("./assets/images/icons/user-icon.svg")
                        },
                        id: "customer-user-edit",
                        name: "Customer Users Edit",
                        path: UsersConstants.getPaths().get("CUSTOMER_USER_EDIT_PATH"),
                        protected: true,
                        showOnSidePanel: false
                    },
                    {
                        component: "./components/users/pages/guest-user-edit",
                        exact: true,
                        icon: {
                            icon: import("./assets/images/icons/user-icon.svg")
                        },
                        id: "collaborator-user-edit",
                        name: "Collaborator Users Edit",
                        path: UsersConstants.getPaths().get("COLLABORATOR_USER_EDIT_PATH"),
                        protected: true,
                        showOnSidePanel: false
                    }
                ],
                component: "./components/users/pages/users",
                exact: true,
                icon: {
                    icon: import("./assets/images/icons/user-icon.svg")
                },
                id: "users",
                name: "Users",
                order: 1,
                path: UsersConstants.getPaths().get("USERS_PATH"),
                protected: true,
                showOnSidePanel: true
            },
            {
                category: "extensions:manage.sidePanel.categories.userManagement",
                children: [
                    {
                        component: "./components/groups/pages/groups-edit",
                        exact: true,
                        icon: {
                            icon: getSidePanelIcons().childIcon
                        },
                        id: "groupsEdit",
                        name: "console:manage.features.sidePanel.editGroups",
                        path: AppConstants.getPaths().get("GROUP_EDIT"),
                        protected: true,
                        showOnSidePanel: false
                    }
                ],
                component: "./components/groups/pages/groups",
                exact: true,
                icon: {
                    icon: getSidePanelIcons().groups
                },
                id: "groups",
                name: "Groups",
                order: 2,
                path: AppConstants.getPaths().get("GROUPS"),
                protected: true,
                showOnSidePanel: true
            },
            {
                // Remove roles temporarily.
                /* category: "extensions:manage.sidePanel.categories.userManagement",
                children: [
                    {
                        component: "./components/roles/pages/role-edit",
                        exact: true,
                        icon: {
                            icon: getSidePanelIcons().childIcon
                        },
                        id: "rolesEdit",
                        name: "console:manage.features.sidePanel.editRoles",
                        path: AppConstants.getPaths().get("ROLE_EDIT"),
                        protected: true,
                        showOnSidePanel: false
                    }
                ],
                component: "./components/roles/pages/role",
                exact: true,
                icon: {
                    icon: getSidePanelIcons().roles
                },
                name: "console:manage.features.sidePanel.roles",
                order: 3,
                path: AppConstants.getPaths().get("ROLES"),
                protected: true, */
                id: "roles",
                showOnSidePanel: false
            },
            {
                category: "extensions:manage.sidePanel.categories.AccountManagement",
                component: "./components/governance-connectors/pages/connector-listing-page",
                exact: true,
                children: [
                    {
                        component: "./components/governance-connectors/pages/connector-edit-page",
                        exact: true,
                        icon: {
                            icon: getSidePanelIcons().childIcon
                        },
                        id: "password-recovery",
                        name: "Password Recovery",
                        path: AppConstants.getPaths()
                            .get("GOVERNANCE_CONNECTOR_EDIT")
                            .replace(":categoryId", ServerConfigurationsConstants.ACCOUNT_MANAGEMENT_CONNECTOR_CATEGORY_ID)
                            .replace(":connectorId", ServerConfigurationsConstants.ACCOUNT_RECOVERY_CONNECTOR_ID),
                        protected: true,
                        showOnSidePanel: false
                    }
                ],
                icon: {
                    icon: getSidePanelIcons().connectors[
                        ServerConfigurationsConstants.ACCOUNT_MANAGEMENT_CONNECTOR_CATEGORY_ID
                    ]
                },
                id: "accountRecovery",
                name: "Account Recovery",
                order: 4,
                path: AppConstants.getPaths()
                    .get("GOVERNANCE_CONNECTOR")
                    .replace(":id", ServerConfigurationsConstants.ACCOUNT_MANAGEMENT_CONNECTOR_CATEGORY_ID),
                protected: true,
                showOnSidePanel: true
            },
            {
                category: "extensions:manage.sidePanel.categories.AccountManagement",
                children: [
                    {
                        component: "./components/governance-connectors/pages/connector-edit-page",
                        exact: true,
                        icon: {
                            icon: getSidePanelIcons().childIcon
                        },
                        id: "self-registration-connector",
                        name: "Self Registration Connector",
                        path: AppConstants.getPaths()
                            .get("GOVERNANCE_CONNECTOR_EDIT")
                            .replace(":categoryId", ServerConfigurationsConstants.USER_ONBOARDING_CONNECTOR_ID)
                            .replace(":connectorId", ServerConfigurationsConstants.SELF_SIGN_UP_CONNECTOR_ID),
                        protected: true,
                        showOnSidePanel: false
                    },
                ],
                component: "./components/governance-connectors/pages/connector-listing-page",
                exact: true,
                icon: {
                    icon: getSidePanelIcons().connectors[
                        ServerConfigurationsConstants.USER_ONBOARDING_CONNECTOR_ID
                        ]
                },
                id: "userOnboarding",
                name: "Self Registration",
                order: 5,
                path: AppConstants.getPaths()
                    .get("GOVERNANCE_CONNECTOR")
                    .replace(":id", ServerConfigurationsConstants.USER_ONBOARDING_CONNECTOR_ID),
                protected: true,
                showOnSidePanel: true
            },
            {
                category: "extensions:manage.sidePanel.categories.AccountManagement",
                component: "./components/governance-connectors/pages/connector-listing-page",
                exact: true,
                children: [
                    {
                        component: "./components/governance-connectors/pages/connector-edit-page",
                        exact: true,
                        icon: {
                            icon: getSidePanelIcons().childIcon
                        },
                        id: "login-attempt-security",
                        name: "Login Attempts Security",
                        path: AppConstants.getPaths()
                            .get("GOVERNANCE_CONNECTOR_EDIT")
                            .replace(":categoryId", ServerConfigurationsConstants.LOGIN_ATTEMPT_SECURITY_CONNECTOR_CATEGORY_ID)
                            .replace(":connectorId", ServerConfigurationsConstants.ACCOUNT_LOCKING_CONNECTOR_ID),
                        protected: true,
                        showOnSidePanel: false
                    },
                    {
                        component: "./components/governance-connectors/pages/connector-edit-page",
                        exact: true,
                        icon: {
                            icon: getSidePanelIcons().childIcon
                        },
                        id: "bot-detection",
                        name: "Bot Detection",
                        path: AppConstants.getPaths()
                            .get("GOVERNANCE_CONNECTOR_EDIT")
                            .replace(":categoryId", ServerConfigurationsConstants.LOGIN_ATTEMPT_SECURITY_CONNECTOR_CATEGORY_ID)
                            .replace(":connectorId", ServerConfigurationsConstants.CAPTCHA_FOR_SSO_LOGIN_CONNECTOR_ID),
                        protected: true,
                        showOnSidePanel: false
                    }
                ],
                icon: {
                    icon: getSidePanelIcons().connectors[
                        ServerConfigurationsConstants.LOGIN_ATTEMPT_SECURITY_CONNECTOR_CATEGORY_ID
                        ]
                },
                id: "accountSecurity",
                name: "Account Security",
                order: 5,
                path: AppConstants.getPaths()
                    .get("GOVERNANCE_CONNECTOR")
                    .replace(":id", ServerConfigurationsConstants.LOGIN_ATTEMPT_SECURITY_CONNECTOR_CATEGORY_ID),
                protected: true,
                showOnSidePanel: true
            },
            {
                id: "oidcScopes",
                showOnSidePanel: true,
                category: "extensions:manage.sidePanel.categories.attributeManagement",
            },
            {
                id: "attributeDialects",
                showOnSidePanel: true,
                category: "extensions:manage.sidePanel.categories.attributeManagement",
            }
        ]
    },
    sections: {
        components: {
            // TODO: Temporarily disable feedback button.
            // "feedback-button": "./components/feedback/feedback.tsx"
            // TODO: Temporarily use help center in the place of feedback.
            "feedback-button": "./components/help-center/helpCenter.tsx",
            "tenant-dropdown": "./components/tenants/components/dropdown/tenant-dropdown.tsx"
        }
    },
    templateExtensions: {
        applications: {
            categories: [],
            groups: [
                {
                    id: "mobile",
                    enabled: true,
                    resource: "./application-templates/groups/mobile-application-template-group.json"
                },
                {
                    id: "web-application",
                    enabled: true,
                    resource: "./application-templates/groups/web-application-template-group.json"
                }
            ],
            templates: [
                {
                    content: {
                        quickStart: "./application-templates/templates/single-page-application/quick-start.tsx"
                    },
                    enabled: true,
                    id: "6a90e4b0-fbff-42d7-bfde-1efd98f07cd7",
                    resource: "./application-templates/templates/single-page-application/single-page-application.json"
                },
                {
                    content: {
                        quickStart: "./application-templates/templates/oidc-web-application/quick-start.tsx"
                    },
                    enabled: true,
                    id: "b9c5e11e-fc78-484b-9bec-015d247561b8",
                    resource: "./application-templates/templates/oidc-web-application/oidc-web-application.json"
                },
                {
                    content: {
                        quickStart: "./application-templates/templates/saml-web-application/quick-start.tsx"
                    },
                    enabled: true,
                    id: "776a73da-fd8e-490b-84ff-93009f8ede85",
                    resource: "./application-templates/templates/saml-web-application/saml-web-application.json"
                },
                {
                    enabled: false,
                    id: "df929521-6768-44f5-8586-624126ec3f8b"
                },
                {
                    enabled: true,
                    id: "44a2d9d9-bc0c-4b54-85df-1cf08f4002ec"
                },
                {
                    content: {
                        quickStart: "./application-templates/templates/oidc-web-application/quick-start.tsx"
                    },
                    enabled: true,
                    id: "custom-application"
                }
            ]
        },
        identityProviders: {
            categories: [],
            templates: [
                {
                    content: {
                        quickStart: "./identity-provider-templates/templates/google/quick-start.tsx"
                    },
                    enabled: true,
                    id: "8ea23303-49c0-4253-b81f-82c0fe6fb4a0",
                    resource: "./identity-provider-templates/templates/google/google.json"
                },
                {
                    content: {
                        quickStart: "./identity-provider-templates/templates/github/quick-start.tsx"
                    },
                    enabled: true,
                    id: "github-idp",
                    resource: "./identity-provider-templates/templates/github/github.json"
                },
                {
                    content: {
                        quickStart: "./identity-provider-templates/templates/facebook/quick-start.tsx"
                    },
                    enabled: true,
                    id: "facebook-idp",
                    resource: "./identity-provider-templates/templates/facebook/facebook.json"
                },
                {
                    content: {},
                    enabled: true,
                    id: "oidc-idp",
                    resource: "./identity-provider-templates/templates/oidc/oidc.json"
                },
                {
                    content: {},
                    enabled: true,
                    id: "saml-idp",
                    resource: "./identity-provider-templates/templates/saml/saml.json"
                },
                {
                    content: {},
                    enabled: true,
                    id: "microsoft-azure-idp",
                    resource: "./identity-provider-templates/templates/microft-azure/microsoft-azure.json"
                },
                {
                    content: {},
                    enabled: true,
                    id: "linkedin-idp",
                    resource: "./identity-provider-templates/templates/linkedin/linkedin.json"
                },
                {
                    content: {},
                    enabled: true,
                    id: "apple-idp",
                    resource: "./identity-provider-templates/templates/apple/apple.json"
                },
                {
                    content: {},
                    enabled: true,
                    id: "sms-otp",
                    resource: "./identity-provider-templates/templates/sms-otp/sms-otp.json"
                },
                {
                    content: {},
                    enabled: true,
                    id: "fido",
                    resource: "./identity-provider-templates/templates/fido/fido.json"
                }
            ]
        }
    }
});
