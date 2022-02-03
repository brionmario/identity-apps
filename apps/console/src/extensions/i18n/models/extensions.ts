/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import {FormAttributes, Notification, NotificationItem} from "@wso2is/i18n";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Extensions {
    common: {
        community: string;
        help: {
            docSiteLink: string;
            helpCenterLink: string;
        };
        learnMore: string;
        quickStart: {
            greeting: {
                heading: string;
                subHeading: string;
            },
            sections: {
                addSocialLogin: {
                    actions: {
                        setup: string;
                        view: string;
                    };
                    description: string;
                    heading: string;
                };
                integrateApps: {
                    actions: {
                        create: string;
                        manage: string;
                        view: string;
                    },
                    capabilities: {
                        sso: string;
                        mfa: string;
                        social: string;
                    },
                    description: string;
                    heading: string;
                },
                learn: {
                    actions: {
                        view: string;
                    },
                    description: string;
                    heading: string;
                }
                manageUsers: {
                    actions: {
                        create: string;
                        manage: string;
                        view: string;
                    },
                    capabilities: {
                        collaborators: string;
                        customers: string;
                        groups: string;
                    },
                    description: string;
                    heading: string;
                }
            }
        }
    };
    console: {
        application: {
            quickStart: {
                technologySelectionWrapper: {
                    subHeading: string;
                };
                addUserOption: {
                    description: string;
                    hint: string;
                    message: string;
                };
            };
        };
    };
    develop: {
        applications: {
            edit: {
                sections: {
                    signInMethod: {
                        sections: {
                            authenticationFlow: {
                                sections: {
                                    stepBased: {
                                        secondFactorDisabled: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            quickstart: {
                spa: {
                    common: {
                        addTestUser: {
                            title: string;
                        };
                        prerequisites: {
                            angular: string;
                            node: string;
                        };
                    };
                    integrate: {
                        common: {
                            sdkConfigs: {
                                clientId: {
                                    hint: string;
                                };
                                scope: {
                                    hint: string;
                                };
                                serverOrigin: {
                                    hint: string;
                                };
                                signInRedirectURL: {
                                    hint: {
                                        content: string;
                                        multipleWarning: string;
                                    };
                                };
                                signOutRedirectURL: {
                                    hint: {
                                        content: string;
                                        multipleWarning: string;
                                    };
                                };
                            };
                        };
                    };
                    samples: {
                        exploreMoreSamples: string;
                    }
                },
                twa: {
                    setup: {
                        skipURIs: string;
                    }
                }
            }
        };
        branding: {
            confirmations: {
                revertBranding: {
                    assertionHint: string;
                    content: string;
                    header: string;
                    message: string;
                };
            };
            dangerZoneGroup: {
                header: string;
                revertBranding: {
                    actionTitle: string;
                    header: string;
                    subheader: string;
                };
            };
            forms: {
                advance: {
                    links: {
                        fields: {
                            cookiePolicyURL: {
                                hint: string;
                                label: string;
                                placeholder: string;
                            };
                            privacyPolicyURL: {
                                hint: string;
                                label: string;
                                placeholder: string;
                            };
                            termsOfUseURL: {
                                hint: string;
                                label: string;
                                placeholder: string;
                            };
                        };
                        heading: string;
                    };
                };
                design: {
                    colors: {
                        fields: {
                            primaryColor: {
                                hint: string;
                                label: string;
                                placeholder: string;
                            };
                        };
                        heading: string;
                    };
                    images: {
                        favicon: {
                            fields: {
                                url: {
                                    hint: string;
                                    label: string;
                                    placeholder: string;
                                };
                            };
                            heading: string;
                        };
                        heading: string;
                        logo: {
                            heading: string;
                            fields: {
                                alt: {
                                    hint: string;
                                    label: string;
                                    placeholder: string;
                                };
                                url: {
                                    hint: string;
                                    label: string;
                                    placeholder: string;
                                };
                            };
                        };
                    };
                };
                general: {
                    fields: {
                        copyrightText: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        siteTitle: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                        supportEmail: {
                            hint: string;
                            label: string;
                            placeholder: string;
                        };
                    };
                };
            };
            notifications: {
                delete: {
                    genericError: {
                        description: string;
                        message: string;
                    };
                    invalidStatus: {
                        description: string;
                        message: string;
                    };
                    notConfigured: {
                        description: string;
                        message: string;
                    };
                    success: {
                        description: string;
                        message: string;
                    };
                };
                fetch: {
                    genericError: {
                        description: string;
                        message: string;
                    };
                    invalidStatus: {
                        description: string;
                        message: string;
                    };
                    tenantMismatch: {
                        description: string;
                        message: string;
                    };
                };
                update: {
                    genericError: {
                        description: string;
                        message: string;
                    };
                    invalidStatus: {
                        description: string;
                        message: string;
                    };
                    success: {
                        description: string;
                        message: string;
                    };
                    tenantMismatch: {
                        description: string;
                        message: string;
                    };
                };
            };
            pageHeader: {
                description: string;
                title: string;
            };
            publishToggle: {
                hint: string;
                label: string;
            };
            tabs: {
                advance: {
                    label: string;
                };
                design: {
                    label: string;
                };
                general: {
                    customRequest: {
                        description: string;
                        heading: string;
                    };
                    label: string;
                };
                preview: {
                    disclaimer: string;
                    label: string;
                };
            };
        };
        identityProviders: {
            emailOTP: {
                quickStart: {
                    addLoginModal: {
                        heading: string;
                        subHeading: string;
                    };
                    connectApp: {
                        description: string;
                    };
                    heading: string;
                    subHeading: string;
                    steps: {
                        customizeFlow: {
                            content: string;
                            heading: string;
                        };
                        selectApplication: {
                            content: string;
                            heading: string;
                        };
                        selectDefaultConfig: {
                            content: string;
                            heading: string;
                        };
                    },
                };
            };
            facebook: {
                quickStart: {
                    addLoginModal: {
                        heading: string;
                        subHeading: string;
                    };
                    connectApp: {
                        description: string;
                    };
                    heading: string;
                    subHeading: string;
                    steps: {
                        customizeFlow: {
                            content: string;
                            heading: string;
                        };
                        selectApplication: {
                            content: string;
                            heading: string;
                        };
                        selectDefaultConfig: {
                            content: string;
                            heading: string;
                        };
                    },
                };
            };
            github: {
                quickStart: {
                    addLoginModal: {
                        heading: string;
                        subHeading: string;
                    };
                    connectApp: {
                        description: string;
                    };
                    heading: string;
                    subHeading: string;
                    steps: {
                        customizeFlow: {
                            content: string;
                            heading: string;
                        };
                        selectApplication: {
                            content: string;
                            heading: string;
                        };
                        selectDefaultConfig: {
                            content: string;
                            heading: string;
                        };
                    },
                };
            };
            google: {
                quickStart: {
                    addLoginModal: {
                        heading: string;
                        subHeading: string;
                    };
                    connectApp: {
                        description: string;
                    };
                    heading: string;
                    subHeading: string;
                    steps: {
                        customizeFlow: {
                            content: string;
                            heading: string;
                        };
                        selectApplication: {
                            content: string;
                            heading: string;
                        };
                        selectDefaultConfig: {
                            content: string;
                            heading: string;
                        };
                    },
                };
            };
            totp: {
                quickStart: {
                    addLoginModal: {
                        heading: string;
                        subHeading: string;
                    };
                    heading: string;
                    steps: {
                        customizeFlow: {
                            content: string;
                            heading: string;
                        };
                        selectApplication: {
                            content: string;
                            heading: string;
                        };
                        selectTOTP: {
                            content: string;
                            heading: string;
                        };
                    },
                    subHeading: string;
                };
            };
        };
        sidePanel: {
            branding: string;
            categories: {
                branding: string;
            };
        };
    };
    manage: {
        attributes: {
            attributes: {
                description: string;
            };
            generatedAttributeMapping: {
                title: string;
                description: string;
                OIDCProtocol: string;
                SCIMProtocol: string;
            },
            displayNameHint: string;
        };
        features: {
            tenant: {
                header: {
                    tenantSwitchHeader: string;
                    tenantAddHeader: string;
                    tenantDefaultButton: string;
                    tenantMakeDefaultButton: string;
                    backButton: string;
                    tenantSearch: {
                        placeholder: string;
                        emptyResultMessage: string;
                    };
                };
                wizards: {
                    addTenant: {
                        heading: string;
                        forms: {
                            fields: {
                                tenantName: {
                                    label: string;
                                    placeholder: string;
                                    validations: {
                                        empty: string;
                                        duplicate: string;
                                        invalid: string;
                                        invalidLength: string;
                                    };
                                };
                            };
                            loaderMessages: {
                                duplicateCheck: string;
                                tenantCreate: string;
                                tenantSwitch: string;
                            };
                            messages: {
                                info: string;
                            };
                        };
                        tooltips: {
                            message: string;
                        };
                    };
                };
                tenantCreationPrompt: {
                    heading: string;
                    subHeading1: string;
                    subHeading2: string;
                };
                notifications: {
                    addTenant: {
                        error: NotificationItem;
                        genericError: NotificationItem;
                        limitReachError: NotificationItem;
                        success: NotificationItem;
                    }
                    defaultTenant: Notification;
                    missingClaims: NotificationItem;
                    getTenants: NotificationItem;
                };
            };
            user: {
                addUser: {
                    inviteUserTooltip: string;
                    validation: {
                        password: string;
                    }
                }
            }
        };
        serverConfigurations: {
            accountManagement: {
                accountRecovery: {
                    heading: string;
                    subHeading: string;
                    toggleName: string;
                };
            };
            additionalSettings: string;
            accountRecovery: {
                heading: string;
                subHeading: string;
                backButton: string;
                passwordRecovery: {
                    form: {
                        fields: {
                            enable: FormAttributes;
                            expiryTime: FormAttributes;
                            notifySuccess: FormAttributes;
                        }
                    };
                    connectorDescription: string;
                    heading: string;
                    notification: {
                        error: NotificationItem;
                        success: NotificationItem;
                    }
                    subHeading: string;
                }
            },
            accountSecurity: {
                heading: string;
                subHeading: string;
                backButton: string;
                botDetection: {
                    form: {
                        fields: {
                            enable: FormAttributes;
                        }
                    };
                    info: {
                        heading: string;
                        subSection1: string;
                        subSection2: string;
                        subSection3: string;
                    },
                    connectorDescription: string;
                    heading: string;
                    notification: {
                        error: NotificationItem;
                        success: NotificationItem;
                    }
                    subHeading: string;
                }
                loginAttemptSecurity: {
                    form: {
                        fields: {
                            accountLockIncrementFactor: FormAttributes;
                            accountLockTime: FormAttributes;
                            enable: FormAttributes;
                            maxFailedAttempts: FormAttributes;
                        }
                    };
                    info: string;
                    connectorDescription: string;
                    heading: string;
                    notification: {
                        error: NotificationItem;
                        success: NotificationItem;
                    }
                    subHeading: string;
                    howItWorks: {
                        correctPassword: {
                            description: string;
                        },
                        incorrectPassword: {
                            description_plural: string;
                            description_singular: string;
                        },
                        example: {
                            description_plural: string;
                            description_singular: string;
                        }
                    }
                }
            },
            generalBackButton: string;
            generalEnabledLabel: string;
            generalDisabledLabel: string;
            userOnboarding: {
                heading: string;
                subHeading: string;
                backButton: string;
                selfRegistration: {
                    form: {
                        fields: {
                            expiryTime: FormAttributes;
                            signUpConfirmation: FormAttributes;
                            activateImmediately: FormAttributes;
                            enable: FormAttributes;
                        }
                    };
                    connectorDescription: string;
                    heading: string;
                    notification: {
                        error: NotificationItem;
                        success: NotificationItem;
                    }
                    subHeading: string;
                }
            }
        };
        groups: {
            heading: string;
            subHeading: string;
            edit: {
                users: {
                    heading: string;
                    description: string;
                };
            };
        };
        users: {
            editUserProfile: {
                userId: string;
                disclaimerMessage: string;
                accountLock: {
                    title: string;
                    description: string;
                }
            };
            list: {
                columns: {
                    user: string;
                    accountType: string;
                    idpType: string;
                    userStore: string;
                };
                popups: {
                    content: {
                        AccountTypeContent: string;
                        idpTypeContent: string;
                        sourceContent: string;
                    }
                }
            };
            descriptions: {
                learnMore: string;
                allUser: string;
                consumerUser: string;
                guestUser: string;
                consumerAppInfo: string;
            };
            notifications: {
                addUser: {
                    customerUser: {
                        limitReachError: NotificationItem;
                    }
                };
            };
        };
        invite: {
            notifications: {
                sendInvite: {
                    limitReachError: NotificationItem;
                }
            };
        };
        guest: {
            deleteUser: {
                confirmationModal: {
                    content: string;
                    message: string;
                }
            };
            editUser: {
                dangerZoneGroup: {
                    deleteUserZone: {
                        subheader: string;
                    }
                }
            };
        };
        sidePanel: {
            categories: {
                attributeManagement: string;
                AccountManagement: string;
                userManagement: string;
            };
        };
    };
}
