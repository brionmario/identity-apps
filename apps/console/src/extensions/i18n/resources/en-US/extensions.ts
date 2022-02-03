/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { Extensions } from "../../models";

export const extensions: Extensions = {
    common: {
        community: "Community",
        help: {
            docSiteLink: "Go to Documentation",
            helpCenterLink: "Contact Support"
        },
        learnMore: "Learn More",
        quickStart: {
            greeting: {
                heading: "Welcome, {{username}}!",
                subHeading: "Here’s how you can get started"
            },
            sections: {
                addSocialLogin: {
                    actions: {
                        setup: "Set Up Social Connections",
                        view: "View Social Connections"
                    },
                    description: "Let your users log in to your applications with an Identity Provider of " +
                        "their choice.",
                    heading: "Add social login"
                },
                integrateApps: {
                    actions: {
                        create: "Register Application",
                        manage: "Explore Applications",
                        view: "View Applications"
                    },
                    capabilities: {
                        sso: "SSO",
                        mfa: "MFA",
                        social: "Social Login"
                    },
                    description: "Register your app and design the user login experience you want by configuring " +
                        "SSO, MFA, social login, and various flexible authentication rules.",
                    heading: "Add login to your apps"
                },
                learn: {
                    actions: {
                        view: "View Docs"
                    },
                    description: "Get started using Asgardeo. Implement authentication for any kind of application " +
                        "in minutes.",
                    heading: "Learn"
                },
                manageUsers: {
                    actions: {
                        create: "Add Users",
                        manage: "Manage Users",
                        view: "View Users"
                    },
                    capabilities: {
                        collaborators: "Collaborators",
                        customers: "Customers",
                        groups: "User Groups"
                    },
                    description: "Create user accounts for customers and invite collaborators to your organization. " +
                        "Allow your users to securely self-manage their profiles.",
                    heading: "Manage users and groups"
                }
            }
        }
    },
    console: {
        application: {
            quickStart: {
                addUserOption:{
                    description: "You need a <1>customer account</1> to login to the application.",
                    hint: "If you don’t already have a customer account, click the below button to create one. " +
                        "Alternatively, go to <1>users</1><3></3> and create customers.",
                    message: "If you do not already have a customer user account, contact your organization " +
                        "administrator."
                },
                technologySelectionWrapper: {
                    subHeading: "<0>Don’t see your preferred technology?</0> You can use the <2>server endpoint " +
                        "details</2> and start integrating your own app or read through our <4>documentation</4> " +
                        "to learn  more."
                }
            }
        }
    },
    develop: {
        applications: {
            edit: {
                sections: {
                    signInMethod: {
                        sections: {
                            authenticationFlow: {
                                sections: {
                                    stepBased: {
                                        secondFactorDisabled: "Second factor authenticators can only be used if " +
                                            "<1>Username & Password</1> or a <3>Social Login</3> is present in a " +
                                            "previous step."
                                    }
                                }
                            }
                        }
                    }
                }
            },
            quickstart: {
                spa: {
                    common: {
                        addTestUser: {
                            title: "Try Out!"
                        },
                        prerequisites: {
                            angular: "<0>Note: </0>The SDK currently doesn't support Angular 11 applications " +
                                "in the <2>Strict Mode</2>. We are working on making the SDK compatible.",
                            node: "You will need to have <1>Node.js</1> and <3>npm</3> installed on your " +
                                "environment to try out the SDK. To download the Long Term Support (LTS) version " +
                                "of <5>Node.js</5> (which includes <7>npm</7>), navigate to the official " +
                                "<9>downloads</9> page."
                        }
                    },
                    integrate: {
                        common: {
                            sdkConfigs: {
                                clientId: {
                                    hint: "The OAuth 2.0 Client Identifier valid at the authorization server."
                                },
                                scope: {
                                    hint: "These are the set of scopes that are used to request " +
                                        "user attributes.<1></1>" +
                                        "If you need to to add more scopes other than <3>openid</3> & <5>profile</5>" +
                                        ", you can append them to the array.<7></7>" +
                                        "Read through our <9>documentation</9> to learn  more."
                                },
                                serverOrigin: {
                                    hint: "The origin of the Identity Provider."
                                },
                                signInRedirectURL: {
                                    hint: {
                                        content: "The URL that determines where the authorization code is sent to " +
                                            "upon user authentication.<1></1>" +
                                            "If your application is hosted on a different URL, go to the " +
                                            "<3>protocol</3> tab and configure the correct URL from the " +
                                            "<5>Authorized redirect URLs</5> field.",
                                        multipleWarning: "You have configured multiple valid callback URLs for " +
                                            "your application. Please verify that the correct URL is selected."
                                    }
                                },
                                signOutRedirectURL: {
                                    hint: {
                                        content: "The URL that determines where the user is redirected to upon " +
                                            "logout.<1></1>" +
                                            "If your application is hosted on a different URL, go to the " +
                                            "<3>protocol</3> tab and configure the correct URL from the " +
                                            "<5>Authorized redirect URLs</5> field.",
                                        multipleWarning: "You have configured multiple valid callback URLs for " +
                                            "your application. Please verify that the correct URL is selected."
                                    }
                                }
                            }
                        }
                    },
                    samples: {
                        exploreMoreSamples: "Explore <1>more samples <1></1></1> like this."
                    }
                },
                twa: {
                    setup: {
                        skipURIs: "Note the <1>skipURIs</1> property. This property defines the web pages in your " +
                            "application that should not be secured, and do not require authentication. Multiple " +
                            "URIs can be set using <3>comma separated</3> values."
                    }
                }
            }
        },
        branding: {
            confirmations: {
                revertBranding: {
                    assertionHint: "Please confirm your action.",
                    content: "This action is irreversible and will permanently revert your branding preferences.",
                    header: "Are you sure?",
                    message: "If you revert the branding preferences, your customers will start to see " +
                        "{{ productName }} branding on the login flows. Please proceed with caution."
                }
            },
            dangerZoneGroup: {
                header: "Danger Zone",
                revertBranding: {
                    actionTitle: "Revert",
                    header: "Revert to default",
                    subheader: "Once the branding preferences are reverted, they can't be recovered and your " +
                        "customers will see {{ productName }} default branding."
                }
            },
            forms: {
                advance: {
                    links: {
                        fields: {
                            cookiePolicyURL: {
                                hint: "Link to a document or a webpage with detailed information on all cookies " +
                                    "used by your applications and the purpose of each of them.",
                                label: "Cookie Policy",
                                placeholder: "https://asgardeo.io/cookie-policy"
                            },
                            privacyPolicyURL: {
                                hint: "Link to a statement or a legal document that states how your organization " +
                                    "collects, handles, and processes the data of your customers and visitors.",
                                label: "Privacy Policy",
                                placeholder: "https://asgardeo.io/privacy-policy"
                            },
                            termsOfUseURL: {
                                hint: "Link to an agreement that your customers must agree to and abide by in " +
                                    "order to use your organization's applications or other services.",
                                label: "Terms of Service",
                                placeholder: "https://asgardeo.io/terms-of-service"
                            }
                        },
                        heading: "Links"
                    }
                },
                design: {
                    colors: {
                        fields: {
                            primaryColor: {
                                hint: "The main color that is shown in primary action buttons, links, etc.",
                                label: "Primary Color",
                                placeholder: "Select a Primary Color"
                            }
                        },
                        heading: "Colors"
                    },
                    images: {
                        favicon: {
                            fields: {
                                url: {
                                    hint: "Use an image with a square aspect ratio that’s at least " +
                                        "<1>16x16 pixels</1> in size for better results.. If not set, " +
                                        "{{ productName }} defaults are used.",
                                    label: "Favicon URL",
                                    placeholder: "https://asgardeo.io/favicon.ico"
                                }
                            },
                            heading: "Favicon"
                        },
                        heading: "Images",
                        logo: {
                            fields: {
                                alt: {
                                    hint: "Add a short description of the logo image to display when the image " +
                                        "does not load and also for SEO and accessibility. If not set, " +
                                        "{{ productName }} defaults are used.",
                                    label: "Logo Alt Text",
                                    placeholder: "Enter an Alt Text for logo"
                                },
                                url: {
                                    hint: "Use an image that’s at least <1>600x600 pixels</1> and less than " +
                                        "<3>1mb</3> in size for better performance. If not set, {{ productName }} " +
                                        "defaults are used.",
                                    label: "Logo URL",
                                    placeholder: "https://asgardeo.io/logo.png"
                                }
                            },
                            heading: "Logo"
                        }
                    }
                },
                general: {
                    fields: {
                        copyrightText: {
                            hint: "Text that appears at the footer of the login screens. If not set, " +
                                "{{ productName }} defaults are used.",
                            label: "Copyright Text",
                            placeholder: "Enter a copyright text"
                        },
                        siteTitle: {
                            hint: "The site title may appear in browser tabs, search engine results, social shares, " +
                                "etc. If not set, {{ productName }} defaults are used..",
                            label: "Site Title",
                            placeholder: "Enter a site title"
                        },
                        supportEmail: {
                            hint: "The email address that appears on error pages and other pages where " +
                                "customers would require support. If not set, {{ productName }} defaults are used.",
                            label: "Contact Email",
                            placeholder: "Enter a contact email"
                        }
                    }
                }
            },
            notifications: {
                delete: {
                    genericError: {
                        description: "An error occurred while reverting the Branding preferences for {{ tenant }}.",
                        message: "Couldn't revert branding preferences"
                    },
                    invalidStatus: {
                        description: "Something went wrong while reverting branding preferences for {{ tenant }}.",
                        message: "Couldn't revert branding preferences"
                    },
                    notConfigured: {
                        description: "No Branding preferences found for {{ tenant }}.",
                        message: "Nothing to revert"
                    },
                    success: {
                        description: "Successfully reverted Branding preferences for {{ tenant }}.",
                        message: "Revert successful"
                    }
                },
                fetch: {
                    genericError: {
                        description: "An error occurred while getting the Branding preferences for {{ tenant }}.",
                        message: "Couldn't get branding preferences"
                    },
                    invalidStatus: {
                        description: "Something went wrong while getting branding preferences for {{ tenant }}.",
                        message: "Couldn't get branding preferences"
                    },
                    tenantMismatch: {
                        description: "Something went wrong while getting branding preferences for {{ tenant }}.",
                        message: "Couldn't get branding preferences"
                    }
                },
                update: {
                    genericError: {
                        description: "An error occurred while updating the Branding preferences for {{ tenant }}.",
                        message: "Update Error"
                    },
                    invalidStatus: {
                        description: "Something went wrong while updating branding preferences for {{ tenant }}.",
                        message: "Update Error"
                    },
                    success: {
                        description: "Branding preference updated successfully for {{ tenant }}.",
                        message: "Update Successful"
                    },
                    tenantMismatch: {
                        description: "Something went wrong while updating branding preferences for {{ tenant }}.",
                        message: "Update Error"
                    }
                }
            },
            pageHeader: {
                description: "Customize consumer-facing user interfaces of applications in your organization.",
                title: "Branding"
            },
            publishToggle: {
                hint: "When turned on, your preferences are live in application login flows.",
                label: "Publish Changes"
            },
            tabs: {
                advance: {
                    label: "Advance"
                },
                design: {
                    label: "Design"
                },
                general: {
                    customRequest: {
                        description: "If you require further customizations, please reach to us at " +
                            "<1>{{ supportEmail }}</>",
                        heading: "Need more customizations?"
                    },
                    label: "General"
                },
                preview: {
                    disclaimer: "Once these preferences are published, they are applied to the user registration " +
                        "flows and all login flows (including multi-factor login) of your apps.",
                    label: "Preview"
                }
            }
        },
        identityProviders: {
            emailOTP: {
                quickStart: {
                    addLoginModal: {
                        heading: "Add Email OTP",
                        subHeading: "Select an application to set up Email OTP login."
                    },
                    connectApp: {
                        description: "Add <1>Email OTP</1> to <3>Step 2</3> on the <5>Sign-in Method" +
                            "</5> section of your <7>application</7>."
                    },
                    heading: "Email OTP Set Up Guide",
                    subHeading: "Follow the instructions given below to set up Email OTP as a factor in your login " +
                        "flow.",
                    steps: {
                        customizeFlow: {
                            content: "Continue to configure the login flow as required.",
                            heading: "Customize the flow"
                        },
                        selectApplication: {
                            content: "Choose the <1>application</1> for which you want to set up Email OTP login.",
                            heading: "Select Application"
                        },
                        selectDefaultConfig: {
                            content: "Go to <1>Sign-in Method</1> tab and click on <3>Start with default " +
                                "configuration</3>.",
                            heading: "Select <1>Start with default configuration</1>"
                        }
                    },
                }
            },
            facebook: {
                quickStart: {
                    addLoginModal: {
                        heading: "Add Facebook Login",
                        subHeading: "Select an application to set up Facebook login."
                    },
                    connectApp: {
                        description: "Add <1>Facebook</1> authenticator to <3>Step 1</3> on the <5>Sign-in Method" +
                            "</5> section of your <7>application</7>."
                    },
                    heading: "Add Facebook Login",
                    subHeading: "Facebook is now ready to be used as a login option for your " +
                        "applications.",
                    steps: {
                        customizeFlow: {
                            content: "Continue to configure the login flow as required.",
                            heading: "Customize the flow"
                        },
                        selectApplication: {
                            content: "Choose the <1>application</1> for which you want to set up Facebook login.",
                            heading: "Select Application"
                        },
                        selectDefaultConfig: {
                            content: "Go to <1>Sign-in Method</1> tab and click on <3>Start with default " +
                                "configuration</3>.",
                            heading: "Select <1>Start with default configuration</1>"
                        }
                    },
                }
            },
            github: {
                quickStart: {
                    addLoginModal: {
                        heading: "Add GitHub Login",
                        subHeading: "Select an application to set up GitHub login."
                    },
                    connectApp: {
                        description: "Add <1>GitHub</1> authenticator to <3>Step 1</3> on the <5>Sign-in Method" +
                            "</5> section of your <7>application</7>."
                    },
                    heading: "Add GitHub Login",
                    subHeading: "GitHub is now ready to be used as a login option for your " +
                        "applications.",
                    steps: {
                        customizeFlow: {
                            content: "Continue to configure the login flow as required.",
                            heading: "Customize the flow"
                        },
                        selectApplication: {
                            content: "Choose the <1>application</1> for which you want to set up Github login.",
                            heading: "Select Application"
                        },
                        selectDefaultConfig: {
                            content: "Go to <1>Sign-in Method</1> tab and click on <3>Start with default " +
                                "configuration</3>.",
                            heading: "Select <1>Start with default configuration</1>"
                        }
                    },
                }
            },
            google: {
                quickStart: {
                    addLoginModal: {
                        heading: "Add Google Login",
                        subHeading: "Select an application to set up Google login."
                    },
                    connectApp: {
                        description: "Add <1>Google</1> authenticator to <3>Step 1</3> on the <5>Sign-in Method" +
                            "</5> section of your <7>application</7>."
                    },
                    heading: "Add Google Login",
                    subHeading: "Google is now ready to be used as a login option for your " +
                        "applications.",
                    steps: {
                        customizeFlow: {
                            content: "Continue to configure the login flow as required.",
                            heading: "Customize the flow"
                        },
                        selectApplication: {
                            content: "Choose the <1>application</1> for which you want to set up Google login.",
                            heading: "Select Application"
                        },
                        selectDefaultConfig: {
                            content: "Go to <1>Sign-in Method</1> tab and click on <3>Add Google login</3> to " +
                                "configure a Google login flow.",
                            heading: "Select <1>Add Google login</1>"
                        }
                    },
                }
            },
            totp: {
                quickStart: {
                    addLoginModal: {
                        heading: "Add TOTP",
                        subHeading: "Select an application to set up TOTP login."
                    },
                    heading: "TOTP Set Up Guide",
                    steps: {
                        customizeFlow: {
                            content: "Continue to configure the login flow as required.",
                            heading: "Customize the flow"
                        },
                        selectApplication: {
                            content: "Choose the <1>application</1> for which you want to set up TOTP login.",
                            heading: "Select Application"
                        },
                        selectTOTP: {
                            content: "Go to <1>Sign-in Method</1> tab and click on <3>Add OTP as a second " +
                                "factor</3> to configure a basic TOTP flow.",
                            heading: "Select <1>Add TOTP as a second factor</1>"
                        }
                    },
                    subHeading: "Follow the instructions given below to set up TOTP as a factor in your login flow."
                }
            }
        },
        sidePanel: {
            branding: "Branding",
            categories: {
                branding: "Branding"
            }
        }
    },
    manage: {
        attributes: {
            attributes: {
                description: "View and manage user attributes in the organization."
            },
            displayNameHint: "The display name will be used in the user profile to recognize the attribute, "
            +"hence be mindful on selecting it.",
            generatedAttributeMapping: {
                title: "Protocol Mappings",
                OIDCProtocol: "OpenID Connect",
                SCIMProtocol: "SCIM 2.0",
                description: "We are simplifying the process for you and adding the required mappings for "
                    +"the following protocols.",
            }
        },
        features: {
            tenant: {
                header: {
                    tenantSwitchHeader: "Switch Organization",
                    tenantAddHeader: "New Organization",
                    tenantDefaultButton: "Default",
                    tenantMakeDefaultButton: "Make default",
                    backButton: "Go back",
                    tenantSearch: {
                        placeholder: "Search organization",
                        emptyResultMessage: "No organizations found"
                    }
                },
                wizards: {
                    addTenant: {
                        heading: "Add New Organization",
                        forms: {
                            fields: {
                                tenantName: {
                                    label: "Organization Name",
                                    placeholder: "Organization name (E.g., myorg)",
                                    validations: {
                                        empty: "This is a required field.",
                                        duplicate: "An organization with the name {{ tenantName }} already exists." +
                                            " Please try a different name.",
                                        invalid: "The name you entered contains disallowed characters. It can" +
                                            " contain up to {{ characterLimit }} characters, can only consist of" +
                                            " lowercase alphanumerics and it must always begin with an alphabet" +
                                            " character.",
                                        invalidLength: "The name you entered is less than {{ characterLowerLimit }}" +
                                            " characters. It can contain up to {{ characterLimit }} characters," +
                                            " can only consist of lowercase alphanumerics and it must always begin" +
                                            " with an alphabet character."
                                    }
                                }
                            },
                            loaderMessages: {
                                duplicateCheck: "Validating new organization name...",
                                tenantCreate: "Creating the new organization...",
                                tenantSwitch: "Please wait while we redirect you to the new organization..."
                            },
                            messages: {
                                info: "Think of a good, unique organization name for your new Asgardeo workspace" +
                                    " because you won’t be able to change it later!"
                            }
                        },
                        tooltips: {
                            message: "You will use this URL to access the new organization."
                        }
                    }
                },
                tenantCreationPrompt: {
                    heading: "Create New Organization",
                    subHeading1: "Your account is not linked to any organizations.",
                    subHeading2: "To continue, create a new organization."
                },
                notifications: {
                    addTenant: {
                        error: {
                            description: "{{ description }}",
                            message: "Error Creating Organization"
                        },
                        genericError: {
                            description: "An error occurred while creating the organization.",
                            message: "Error Creating Organization"
                        },
                        limitReachError: {
                            description: "Maximum number of allowed organizations have been reached.",
                            message: "Error Creating Organization"
                        },
                        success: {
                            description: "Successfully created organization {{ tenantName }}.",
                            message: "Organization Created"
                        }
                    },
                    defaultTenant: {
                        genericError: {
                            description: "An error occurred while updating your default organization.",
                            message: "Error Updating Organization"
                        },
                        success: {
                            description: "Successfully set {{ tenantName }} as your default organization.",
                            message: "Updated Default Organization"
                        }
                    },
                    missingClaims: {
                        message: "Some personal info is missing",
                        description: "Please visit the MyAccount application and make sure that your first name," +
                            " last name and primary email have been set in the Personal Info section."
                    },
                    getTenants: {
                        message: "Unable to fetch your organizations",
                        description: "An error occurred while fetching your organizations."
                    }
                }
            },
            user: {
                addUser: {
                    inviteUserTooltip: "An email with a confirmation link will be sent to the " + 
                                    "provided email address for the user to set their own password.",
                    validation: {
                        password: "Your password must contain a minimum of 8 characters including at " +
                        "least one uppercase letter, one lowercase letter, and one number."
                    }
                }
            }
        },
        groups: {
            heading: "Groups",
            subHeading: "User groups within your organization are listed here. You can create new groups and assign users.",
            edit: {
                users: {
                    heading: "Users in the Group",
                    description: "Add or remove users belonging to this group."
                }
            }
        },
        serverConfigurations: {
            accountManagement: {
                accountRecovery: {
                    heading: "Password Recovery",
                    subHeading: "Configure settings for self-service password recovery to let users " +
                        "reset their password using an email.",
                    toggleName: "Enable password recovery"
                }
            },
            accountRecovery: {
                backButton: "Go back to Account Recovery",
                heading: "Account Recovery",
                passwordRecovery: {
                    form: {
                        fields: {
                            enable: {
                                hint: "Enabling this will let the customers reset their password using an email.",
                                label: "Enable"
                            },
                            expiryTime: {
                                hint: "Password recovery link expiry time in minutes.",
                                label: "Recovery link expiry time",
                                placeholder: "Enter expiry time",
                                validations: {
                                    invalid: "Recovery link expiry time should be an integer.",
                                    empty: "Recovery link expiry time cannot be empty.",
                                    range: "Recovery link expiry time should be between 1 minute & 10080 minutes " +
                                        "(7 days).",
                                    maxLengthReached: "Recovery link expiry time should be a number with 5 or less " +
                                        "digits."
                                }
                            },
                            notifySuccess: {
                                hint: "This specifies whether to notify the user via an email when password " +
                                    "recovery is successful.",
                                label: "Notify on successful recovery"
                            }
                        }
                    },
                    connectorDescription: "Enable self-service password recovery for customers " +
                        "on the login page.",
                    heading: "Password Recovery",
                    notification: {
                        error: {
                            description: "Error updating the password recovery configuration.",
                            message: "Error updating configuration"
                        },
                        success: {
                            description: "Successfully updated the password recovery configuration.",
                            message: "Update successful"
                        }
                    },
                    subHeading: "Enable self-service password recovery for customers " +
                        "on the login page.\nThe user will receive a password reset link via email upon request."
                },
                subHeading: "Account Recovery related settings."
            },
            accountSecurity: {
                backButton: "Go back to Account Security",
                heading: "Account Security",
                botDetection: {
                    form: {
                        fields: {
                            enable: {
                                hint: "Enabling this will enforce reCaptcha for both login and recovery.",
                                label: "Enable"
                            }
                        }
                    },
                    info: {
                        heading: "This will enforce reCAPTCHA validation in respective UIs of the following flows.",
                        subSection1: "Login to business applications",
                        subSection2: "Recover the password of a customer account",
                        subSection3: "Self registration for customer accounts"
                    },
                    connectorDescription: "Enable reCAPTCHA for the organization.",
                    heading: "Bot Detection",
                    notification: {
                        error: {
                            description: "Error updating the bot detection configuration.",
                            message: "Error updating configuration"
                        },
                        success: {
                            description: "Successfully updated the bot detection configuration.",
                            message: "Update successful"
                        }
                    },
                    subHeading: "Enable reCAPTCHA for the organization."
                },
                loginAttemptSecurity: {
                    form: {
                        fields: {
                            accountLockIncrementFactor: {
                                hint: "This specifies the factor by which the account lock duration should " +
                                    "be incremented on further failed login attempts after the account is locked.",
                                label: "Account lock duration increment factor",
                                placeholder: "Enter lock duration increment factor",
                                validations: {
                                    invalid: "Account lock duration increment factor should be an integer.",
                                    range: "Account lock duration increment factor should be between 1 & 10.",
                                    maxLengthReached: "Account lock duration increment factor should be a number " +
                                        "with 1 or 2 digits."
                                }
                            },
                            accountLockTime: {
                                hint: "This specifies the initial duration that the account will be locked for. " +
                                    "The account will be automatically unlocked after this time period.",
                                label: "Account lock duration",
                                placeholder: "Enter lock duration",
                                validations: {
                                    invalid: "Account lock duration should be an integer.",
                                    required: "Account lock duration is a required field.",
                                    range: "Account lock duration should be between 1 minute & 1440 minutes (1 day).",
                                    maxLengthReached: "Account lock duration should be a number with 4 or less digits."
                                }
                            },
                            enable: {
                                hint: "Account locking will result in sending a mail to the user indicating " +
                                    "that the account has been locked.",
                                label: "Enable"
                            },
                            maxFailedAttempts: {
                                hint: "This specifies the number of consecutive failed login attempts allowed " +
                                    "before the account is locked.",
                                label: "Number of consecutive failed login attempts",
                                placeholder: "Enter max failed attempts",
                                validations: {
                                    invalid: "Max failed attempts should be an integer.",
                                    required: "Max failed attempts is a required field.",
                                    range: "Max failed attempts should be between 1 & 10.",
                                    maxLengthReached: "Max failed attempts should be a number with 1 or 2 digits."
                                }
                            }
                        }
                    },
                    info: "Once the account is locked, the account owner will be informed via email. The account " +
                        "will be automatically activated after the account lock duration.",
                    connectorDescription: "Protect accounts from password brute-force attacks by locking the " +
                        "account on consecutive failed login attempts.",
                    heading: "Login Attempts",
                    notification: {
                        error: {
                            description: "Error updating the login attempts security configuration.",
                            message: "Error updating configuration"
                        },
                        success: {
                            description: "Successfully updated the login attempts security configuration.",
                            message: "Update successful"
                        }
                    },
                    subHeading: "Protect customer accounts from password brute-force attacks by locking " +  
                    "the account on consecutive failed login attempts.",
                    howItWorks: {
                        correctPassword: {
                            description: "If the user enters the correct password, the user can successfully log in."
                        },
                        example: {
                            description_plural: "That is, the account will be locked for {{ lockIncrementRatio }} x " +
                                " {{ lockDuration }} = {{ lockTotalDuration }} minutes.",
                            description_singular: "That is, the account will be locked for {{ lockIncrementRatio }} " +
                                "x {{ lockDuration }} = {{ lockTotalDuration }} minute."
                        },
                        incorrectPassword: {
                            description_plural: "If the user tries an incorrect password for another " +
                                "{{ maxAttempts }} consecutive attempts the account lock duration will be incremented" +
                                " by {{ lockIncrementRatio }} times the previous lock duration.",
                            description_singular: "If the user tries an incorrect password for another " +
                                "{{ maxAttempts }} consecutive attempt the account lock duration will be incremented " +
                                "by {{ lockIncrementRatio }} times the previous lock duration."
                        }
                    }
                },
                subHeading: "Configure security settings to protect user accounts."
            },
            additionalSettings: "Additional Settings",
            generalBackButton: "Go back",
            generalDisabledLabel: "Disabled",
            generalEnabledLabel: "Enabled",
            userOnboarding: {
                backButton: "Go back to Self Registration",
                heading: "Self Registration",
                selfRegistration: {
                    form: {
                        fields: {
                            enable: {
                                hint: "Allow consumer users to self sign-up for this organization. " +
                                    "When enabled, users will see a link to create an account at the login screen.",
                                label: "Enable"
                            },
                            expiryTime: {
                                hint: "The expiry time for the account verification link.",
                                label: "Account verification link expiry time",
                                placeholder: "Enter expiry time",
                                validations: {
                                    invalid: "Expiry time should be an integer.",
                                    empty: "Expiry time cannot be empty.",
                                    range: "Expiry time should be between 1 minute & 10080 minutes (7 days).",
                                    maxLengthReached: "Expiry time should be a number with 5 or less digits."
                                }
                            },
                            activateImmediately: {
                                msg: "If selected, the new account is activated immediately after registration " +
                                    "without waiting for account confirmation",
                                hint: "This will enable email verification at the self-registration.",
                                label: "Activate account immediately"
                            },
                            signUpConfirmation: {
                                recommendationMsg:"It is recommended to enable account verification for " +
                                    "self registration.",
                                botMsg: " If not at least enable bot detection.",
                                accountLockMsg: "Account Verification enables email verification at the " +
                                    "self registration. The new account is activated only after the user verifies " +
                                    "the email",
                                hint: "An email is sent to the self-registered user requesting account verification.",
                                label: "Account verification"
                            }
                        }
                    },
                    connectorDescription: "Enable self registration for customers of the organization.",
                    heading: "Self Registration",
                    notification: {
                        error: {
                            description: "Error updating the self registration configuration.",
                            message: "Error updating configuration"
                        },
                        success: {
                            description: "Successfully updated the self registration configuration.",
                            message: "Update successful"
                        }
                    },
                    subHeading: "When self registration is enabled, users can register via the " +
                        "<1>Create an account</1> link on the application’s login page. This creates a new " +
                        "<3>customer</3> account in the organization."
                },
                subHeading: "Self Registration related settings."
            }
        },
        users: {
            editUserProfile: {
                userId: "User ID",
                disclaimerMessage: "This user profile belongs to a collaborator or an organization owner. Only the" +
                    " account owner can manage the profile via the My Account app.",
                accountLock: {
                    title: "Lock user",
                    description: "Once you lock the account, the user can no longer sign in to the system. " +
                        "Please be certain."
                }
            },
            list: {
                columns: {
                    user: "User",
                    accountType: "Account Type",
                    idpType: "Managed By",
                    userStore: "User Store"
                },
                popups: {
                    content: {
                        AccountTypeContent: "The user's relation to this organization.",
                        idpTypeContent: "The entity that manages the user's identity and credentials.",
                        sourceContent: "The data store where the user information is stored."
                    }
                }
            },
            descriptions: {
                learnMore: "Learn More",
                allUser: "All the users within your organization are listed here.",
                consumerUser: "Users who can access applications within the organization are listed here." +
                    " Admins can onboard customers to the organization or the customers can sign up if self-registration is enabled.",
                guestUser: "Users who have access to your organization's administrative operations" + 
                    " (application onboarding, user management, etc.) are listed here." +
                    " Admins can invite users as collaborators to the organization and assign roles.", 
                consumerAppInfo: "Share this link with your customers to allow access to My Account and to manage their accounts."
            },
            notifications: {
                addUser: {
                    customerUser: {
                        limitReachError: {
                            description: "Maximum number of allowed customer users have been reached.",
                            message: "Error adding the new user"
                        }
                    }
                }
            }
        },
        invite: {
            notifications: {
                sendInvite: {
                    limitReachError: {
                        description: "Maximum number of allowed collaborator users have been reached.",
                        message: "Error while sending the invitation"
                    }
                }
            }
        },
        guest: {
            deleteUser: {
                confirmationModal: {
                    content: "However, the user's account is not permanently deleted from Asgardeo and " +
                        "they will still be able to access other organizations they are associated with.",
                    message: "This action is irreversible and will remove the user's association with " +
                        "this organization."
                }
            },
            editUser: {
                dangerZoneGroup: {
                    deleteUserZone: {
                        subheader: "This action will remove the user's association with this organization. " +
                            "Please be certain before you proceed."
                    }
                }
            }
        },
        sidePanel: {
            categories: {
                attributeManagement: "Attribute Management",
                AccountManagement: "Account Management",
                userManagement: "User Management"
            }
        }
    }
};
