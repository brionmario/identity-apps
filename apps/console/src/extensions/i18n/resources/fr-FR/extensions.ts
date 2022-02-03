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
        community: "Communauté",
        help: {
            docSiteLink: "Aller à la documentation",
            helpCenterLink: "Contactez le support"
        },
        learnMore: "Apprendre encore plus",
        quickStart: {
            greeting: {
                heading: "Bienvenue, {{username}}",
                subHeading: "Voici quelques étapes faciles pour démarrer avec {{productName}}"
            },
            sections: {
                addSocialLogin: {
                    actions: {
                        setup: "Configurer les connexions sociales",
                        view: "Afficher les connexions sociales"
                    },
                    description: "Permettez à vos utilisateurs de se connecter à vos applications avec un " +
                        "fournisseur d'identité de leur choix.",
                    heading: "Ajouter une connexion sociale"
                },
                integrateApps: {
                    actions: {
                        create: "Enregistrer la demande",
                        manage: "Gérer des applications",
                        view: "Afficher les candidatures"
                    },
                    capabilities: {
                        sso: "SSO",
                        mfa: "MFA",
                        social: "Connexion sociale"
                    },
                    description: "Enregistrez votre application et concevez l'expérience de connexion " +
                        "utilisateur que vous souhaitez en configurant SSO, MFA, connexion sociale et diverses " +
                        "règles d'authentification flexibles.",
                    heading: "Intégrez la connexion à vos applications"
                },
                learn: {
                    actions: {
                        view: "Afficher les documents"
                    },
                    description: "Commencez à utiliser Asgardeo. Implémentez l'authentification pour tout type " +
                        "d'application en quelques minutes.",
                    heading: "Apprendre"
                },
                manageUsers: {
                    actions: {
                        create: "Ajouter un client",
                        manage: "gérer les utilisateurs",
                        view: "Afficher les utilisateurs"
                    },
                    capabilities: {
                        collaborators: "Collaborateurs",
                        customers: "Les clients",
                        groups: "Groupes d'utilisateurs"
                    },
                    description: "Créez des comptes d'utilisateurs pour les clients et invitez des " +
                        "collaborateurs dans votre organisation. Permettez à vos utilisateurs de gérer eux-mêmes " +
                        "leurs profils en toute sécurité.",
                    heading: "Gérer les utilisateurs et les groupes"
                }
            }
        }
    },
    console: {
        application: {
            quickStart: {
                addUserOption:{
                    description: "Vous avez besoin d'un compte <1>compte client</1> pour vous connecter à " +
                        "l'application.",
                    hint: "Si vous n'avez pas encore de compte client, cliquez sur le bouton ci-dessous pour en " +
                        "créer un. Sinon, accédez à <1>utilisateurs</1><3></3> et créez des clients.",
                    message: "Si vous n'avez pas encore de compte d'utilisateur client, contactez l'administrateur " +
                        "de votre organisation."
                },
                technologySelectionWrapper: {
                    subHeading: "<0>Vous ne voyez pas votre technologie préférée?</0> Vous pouvez utiliser les " +
                        "<2>détails du point de terminaison du serveur</2> et commencer à intégrer votre propre " +
                        "application ou lire notre <4>documentation</4> pour en savoir plus ."
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
                                        secondFactorDisabled: "Les authentificateurs de deuxième facteur ne peuvent " +
                                            "être utilisés que si <1>Nom d'utilisateur et mot de passe</1> ou un " +
                                            "<3>Connexion sociale</3> est présent lors d'une étape précédente."
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
                            title: "Expérimenter!"
                        },
                        prerequisites: {
                            angular: "<0>Remarque: </0>Le SDK ne prend actuellement pas en charge les applications " +
                                "Angular 11 en <2>Mode Strict</2>. Nous travaillons à rendre le SDK compatible.",
                            node: "Vous devrez avoir installé <1>Node.js</1> et <3>npm</3> sur votre environnement " +
                                "pour essayer le SDK. Pour télécharger la version Long Term Support (LTS) de " +
                                "<5>Node .js</5> (qui inclut <7>npm</7>), accédez à la page officielle de " +
                                "<9>téléchargements</9>."
                        }
                    },
                    integrate: {
                        common: {
                            sdkConfigs: {
                                clientId: {
                                    hint: "L'identifiant client OAuth 2.0 valide sur le serveur d'autorisation."
                                },
                                scope: {
                                    hint: "Ce sont l'ensemble des étendues qui sont utilisées pour demander des " +
                                        "attributs utilisateur.<1></1> Si vous devez ajouter d'autres étendues " +
                                        "que <3>openid</3> & <5>profile</5>, vous pouvez les ajouter au tableau." +
                                        "<7></7>Lisez notre <9>documentation</9> pour en savoir plus."
                                },
                                serverOrigin: {
                                    hint: "L'origine du fournisseur d'identité."
                                },
                                signInRedirectURL: {
                                    hint: {
                                        content: "L'URL qui détermine où le code d'autorisation est envoyé lors " +
                                            "de l'authentification de l'utilisateur.<1></1> Si votre application " +
                                            "est hébergée sur une URL différente, allez dans l'onglet <3>protocole" +
                                            "</3> et configurez la bonne URL dans le champ <5>URL de redirection " +
                                            "autorisées</5>.",
                                        multipleWarning: "Vous avez configuré plusieurs URL de rappel valides pour " +
                                            "votre application. Veuillez vérifier que la bonne URL est sélectionnée."
                                    }
                                },
                                signOutRedirectURL: {
                                    hint: {
                                        content: "L'URL qui détermine vers où l'utilisateur est redirigé lors de " +
                                            "la déconnexion.<1></1> Si votre application est hébergée sur une URL " +
                                            "différente, allez dans l'onglet <3>protocole</3> et configurez l'URL " +
                                            "correcte à partir du Champ <5>URL de redirection autorisées</5>.",
                                        multipleWarning: "Vous avez configuré plusieurs URL de rappel valides pour " +
                                            "votre application. Veuillez vérifier que la bonne URL est sélectionnée."
                                    }
                                }
                            }
                        }
                    },
                    samples: {
                        exploreMoreSamples: "Explorez <1>plus d'échantillons <1></1></1> comme celui-ci."
                    }
                },
                twa: {
                    setup: {
                        skipURIs: "Notez la propriété <1>skipURIs</1>. Cette propriété définit les pages Web " +
                            "de votre application qui ne doivent pas être sécurisées et ne nécessitent pas " +
                            "d'authentification. Plusieurs URI peuvent être définis à l'aide de valeurs <3>" +
                            "séparées par des virgules</3>."
                    }
                }
            }
        },
        branding: {
            confirmations: {
                revertBranding: {
                    assertionHint: "Veuillez confirmer votre action.",
                    content: "Cette action est irréversible et annulera définitivement vos préférences de marque.",
                    header: "Es-tu sûr?",
                    message: "Si vous rétablissez les préférences de marque, vos clients commenceront à voir " +
                        "la marque {{ productName }} sur les flux de connexion. Veuillez procéder avec prudence."
                }
            },
            dangerZoneGroup: {
                header: "Zone dangereuse",
                revertBranding: {
                    actionTitle: "Revenir",
                    header: "Revenir à la valeur par défaut",
                    subheader: "Une fois les préférences de marque rétablies, elles ne peuvent pas être récupérées " +
                        "et vos clients verront la marque par défaut de {{ productName }}."
                }
            },
            forms: {
                advance: {
                    links: {
                        fields: {
                            cookiePolicyURL: {
                                hint: "Lien vers un document ou une page contenant tous les cookies utilisés par " +
                                    "vos applications avec des informations détaillées sur la finalité de chacun " +
                                    "d'entre eux. S'il n'est pas défini, les valeurs par défaut de " +
                                    "{{ productName }} seront utilisées.",
                                label: "Politique relative aux cookies",
                                placeholder: "https://asgardeo.io/cookie-policy"
                            },
                            privacyPolicyURL: {
                                hint: "Lien vers un accord que l'utilisateur de votre client doit accepter et " +
                                    "respecter afin d'utiliser les applications ou d'autres services de votre " +
                                    "organisation. S'il n'est pas défini, les valeurs par défaut de " +
                                    "{{ productName }} seront utilisées.",
                                label: "Politique de confidentialité",
                                placeholder: "https://asgardeo.io/privacy-policy"
                            },
                            termsOfUseURL: {
                                hint: "Lien vers une déclaration ou un document juridique qui indique " +
                                    "comment votre organisation collecte, gère et traite les données de " +
                                    "vos clients et visiteurs. S'il n'est pas défini, les valeurs par défaut " +
                                    "de {{ productName }} seront utilisées.",
                                label: "Conditions d'utilisation",
                                placeholder: "https://asgardeo.io/terms-of-service"
                            }
                        },
                        heading: "Liens"
                    }
                },
                design: {
                    colors: {
                        fields: {
                            primaryColor: {
                                hint: "La couleur principale qui est affichée dans les boutons d'action principaux, " +
                                    "les liens, etc.",
                                label: "Couleur primaire",
                                placeholder: "Sélectionnez une couleur primaire"
                            }
                        },
                        heading: "Couleurs"
                    },
                    images: {
                        favicon: {
                            fields: {
                                url: {
                                    hint: "Utilisez une image d'au moins <1>16x16 pixels</1> ou plus avec un " +
                                        "rapport hauteur/largeur de pixels carrés pour de meilleurs résultats. " +
                                        "S'il n'est pas défini, les valeurs par défaut de {{ productName }} " +
                                        "seront utilisées.",
                                    label: "URL de l'icône de favori",
                                    placeholder: "https://asgardeo.io/favicon.ico"
                                }
                            },
                            heading: "Icône de favori"
                        },
                        heading: "Images",
                        logo: {
                            fields: {
                                alt: {
                                    hint: "Ajoutez une brève description écrite de l'image du logo à utiliser " +
                                        "lorsque l'image ne se charge pas et également pour le référencement " +
                                        "et l'accessibilité. S'il n'est pas défini, les valeurs par défaut " +
                                        "de {{ productName }} seront utilisées.",
                                    label: "Texte alternatif",
                                    placeholder: "Entrez un texte alternatif"
                                },
                                url: {
                                    hint: "Utilisez une image d'au moins <1>600x600 pixels</1> et d'une " +
                                        "taille inférieure à <3>1mb</3> pour de meilleures performances. " +
                                        "S'il n'est pas défini, les valeurs par défaut de {{ productName }} " +
                                        "seront utilisées.",
                                    label: "URL du logo",
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
                            hint: "Texte qui apparaît en pied de page des écrans de connexion. S'il n'est pas " +
                                "défini, les valeurs par défaut de {{ productName }} seront utilisées.",
                            label: "Texte du droit d'auteur",
                            placeholder: "Saisissez un texte de copyright"
                        },
                        siteTitle: {
                            hint: "Le titre du site peut apparaître dans les onglets du navigateur, " +
                                "les résultats des moteurs de recherche, les partages sociaux, etc. " +
                                "S'il n'est pas défini, les valeurs par défaut {{ productName }} seront utilisées.",
                            label: "Titre du site",
                            placeholder: "Entrez un titre de site"
                        },
                        supportEmail: {
                            hint: "TEmail qui apparaît sur les pages d'erreur et dans les endroits où une " +
                                "assistance serait requise pour les clients. S'il n'est pas défini, " +
                                "les valeurs par défaut de {{ productName }} seront utilisées.",
                            label: "Email du contact",
                            placeholder: "Entrez une adresse e-mail de contact"
                        }
                    }
                }
            },
            notifications: {
                delete: {
                    genericError: {
                        description: "Une erreur s'est produite lors de la suppression des préférences de marque " +
                            "pour {{ tenant }}.",
                        message: "Impossible de supprimer les préférences de marque"
                    },
                    invalidStatus: {
                        description: "Une erreur s'est produite lors de la suppression des préférences de marque " +
                            "pour {{ tenant }}.",
                        message: "Impossible de supprimer les préférences de marque"
                    },
                    notConfigured: {
                        description: "Aucune préférence de marque trouvée pour {{ tenant }}.",
                        message: "Impossible de supprimer les préférences de marque"
                    },
                    success: {
                        description: "Les préférences de marque ont été rétablies avec succès pour {{ tenant }}.",
                        message: "Rétablissement réussi"
                    }
                },
                fetch: {
                    genericError: {
                        description: "Une erreur s'est produite lors de l'obtention des préférences de marque " +
                            "pour {{ tenant }}.",
                        message: "Impossible d'obtenir les préférences de marque"
                    },
                    invalidStatus: {
                        description: "Une erreur s'est produite lors de l'obtention des préférences de marque " +
                            "pour {{ tenant }}.",
                        message: "Impossible d'obtenir les préférences de marque"
                    },
                    tenantMismatch: {
                        description: "Une erreur s'est produite lors de l'obtention des préférences de marque pour " +
                            "{{ tenant }}.",
                        message: "Impossible d'obtenir les préférences de marque"
                    }
                },
                update: {
                    genericError: {
                        description: "Une erreur s'est produite lors de la mise à jour des préférences de marque " +
                            "pour {{ tenant }}.",
                        message: "Erreur de mise à jour"
                    },
                    invalidStatus: {
                        description: "Une erreur s'est produite lors de la mise à jour des préférences de" +
                            " marque pour {{ tenant }}.",
                        message: "Erreur de mise à jour"
                    },
                    success: {
                        description: "Préférence de marque mise à jour avec succès pour {{ tenant }}.",
                        message: "Mise à jour réussie"
                    },
                    tenantMismatch: {
                        description: "Une erreur s'est produite lors de la mise à jour des préférences de " +
                            "marque pour {{ tenant }}.",
                        message: "Erreur de mise à jour"
                    }
                }
            },
            pageHeader: {
                description: "Personnalisez les interfaces utilisateur destinées aux consommateurs dans " +
                    "les applications de votre organisation.",
                title: "l'image de marque"
            },
            publishToggle: {
                hint: "Activer/Désactiver les modifications",
                label: "Publier les modifications"
            },
            tabs: {
                advance: {
                    label: "Avance"
                },
                design: {
                    label: "Conception"
                },
                general: {
                    customRequest: {
                        description: "Si vous avez besoin de personnalisations supplémentaires, veuillez nous " +
                            "contacter à <1>{{ supportEmail }}</>",
                        heading: "Besoin de plus de personnalisations ?"
                    },
                    label: "Général"
                },
                preview: {
                    disclaimer: "Une fois ces personnalisations enregistrées, elles seront reflétées sur les " +
                        "écrans de connexion, les flux d'enregistrement et de connexion multifacteur.",
                    label: "Aperçu"
                }
            }
        },
        identityProviders: {
            emailOTP: {
                quickStart: {
                    addLoginModal: {
                        heading: "Ajouter un e-mail OTP",
                        subHeading: "Sélectionnez une application pour configurer la connexion OTP par e-mail."
                    },
                    connectApp: {
                        description: "Ajoutez l'<1>Email OTP</1> à l'<3>Étape 2</3> dans la section <5>Méthode de " +
                            "connexion </5> de votre <7>application</7>."
                    },
                    heading: "Guide de configuration de l'OTP par e-mail",
                    subHeading: "Suivez les instructions ci-dessous pour configurer Email OTP en tant que facteur " +
                        "dans votre flux de connexion.",
                    steps: {
                        customizeFlow: {
                            content: "Continuez à configurer le flux de connexion selon vos besoins.",
                            heading: "Personnaliser le flux"
                        },
                        selectApplication: {
                            content: "Choisissez l'<1>application</1> pour laquelle vous souhaitez configurer la " +
                                "connexion OTP par e-mail.",
                            heading: "Sélectionnez l'application"
                        },
                        selectDefaultConfig: {
                            content: "Allez dans l'onglet <1>Méthode de connexion</1> et cliquez sur <3>Démarrer " +
                                "avec la configuration par défaut</3>.",
                            heading: "Sélectionnez <1>Démarrer avec la configuration par défaut</1>"
                        }
                    },
                }
            },
            facebook: {
                quickStart: {
                    addLoginModal: {
                        heading: "Ajouter une connexion Facebook",
                        subHeading: "Sélectionnez une application pour configurer la connexion Facebook."
                    },
                    connectApp: {
                        description: "Ajouter l'authentificateur <1>Facebook</1> à l'<3>Étape 1</3> de la <5>" +
                            "Méthode de connexion</5> section de votre <7>candidature</7>."
                    },
                    heading: "Ajouter une connexion Facebook",
                    subHeading: "Facebook est maintenant prêt à être utilisé comme " +
                        "option de connexion pour votre applications.",
                    steps: {
                        customizeFlow: {
                            content: "Continuez à configurer le flux de connexion selon vos besoins.",
                            heading: "Personnaliser le flux"
                        },
                        selectApplication: {
                            content: "Choisissez l'<1>application</1> pour laquelle vous souhaitez configurer la " +
                                "connexion Facebook.",
                            heading: "Sélectionnez l'application"
                        },
                        selectDefaultConfig: {
                            content: "Allez dans l'onglet <1>Méthode de connexion</1> et cliquez sur <3>Démarrer " +
                                "avec la configuration par défaut</3>.",
                            heading: "Sélectionnez <1>Démarrer avec la configuration par défaut</1>"
                        }
                    },
                }
            },
            github: {
                quickStart: {
                    addLoginModal: {
                        heading: "Ajouter une connexion GitHub",
                        subHeading: "Sélectionnez une application pour configurer la connexion GitHub."
                    },
                    connectApp: {
                        description: "Ajouter l'authentificateur <1>GitHub</1> à l'<3>Étape 1</3> de la <5>" +
                            "Méthode de connexion</5> section de votre <7>candidature</7>."
                    },
                    heading: "Ajouter une connexion GitHub",
                    subHeading: "Github est maintenant prêt à être utilisé comme " +
                        "option de connexion pour votre applications.",
                    steps: {
                        customizeFlow: {
                            content: "Continuez à configurer le flux de connexion selon vos besoins.",
                            heading: "Personnaliser le flux"
                        },
                        selectApplication: {
                            content: "Choisissez l'<1>application</1> pour laquelle vous souhaitez configurer la connexion Github.",
                            heading: "Sélectionnez l'application"
                        },
                        selectDefaultConfig: {
                            content: "Allez dans l'onglet <1>Méthode de connexion</1> et cliquez sur <3>Démarrer " +
                                "avec la configuration par défaut</3>.",
                            heading: "Sélectionnez <1>Démarrer avec la configuration par défaut</1>"
                        }
                    },
                }
            },
            google: {
                quickStart: {
                    addLoginModal: {
                        heading: "Ajouter une connexion Google",
                        subHeading: "Sélectionnez une application pour configurer la connexion Google."
                    },
                    connectApp: {
                        description: "Ajouter l'authentificateur <1>Google</1> à l'<3>Étape 1</3> de la <5>" +
                            "Méthode de connexion</5> section de votre <7>candidature</7>."
                    },
                    heading: "Ajouter une connexion Google",
                    subHeading: "Google est maintenant prêt à être utilisé comme " +
                        "option de connexion pour votre applications.",
                    steps: {
                        customizeFlow: {
                            content: "Continuez à configurer le flux de connexion selon vos besoins.",
                            heading: "Personnaliser le flux"
                        },
                        selectApplication: {
                            content: "Choisissez l'<1>application</1> pour laquelle vous souhaitez configurer la connexion Google.",
                            heading: "Sélectionnez l'application"
                        },
                        selectDefaultConfig: {
                            content: "Accédez à l'onglet <1>Méthode de connexion</1> et cliquez sur <3>Ajouter une " +
                                "connexion Google</3> pour configurer un flux de connexion Google.",
                            heading: "Sélectionnez <1>Ajouter une connexion Google</1>"
                        }
                    },
                }
            },
            totp: {
                quickStart: {
                    addLoginModal: {
                        heading: "Ajouter TOTP",
                        subHeading: "Sélectionnez une application pour configurer la connexion TOTP."
                    },
                    heading: "Guide de configuration TOTP",
                    steps: {
                        customizeFlow: {
                            content: "Continuer à configurer le flux de connexion selon les besoins.",
                            heading: "Personnaliser le flux"
                        },
                        selectApplication: {
                            content: "Choisissez l'<1>application</1> pour laquelle vous souhaitez configurer " +
                                "la connexion TOTP.",
                            heading: "Sélectionner l'application"
                        },
                        selectTOTP: {
                            content: "Accédez à l'onglet <1>Méthode de connexion</1> et cliquez sur <3>Ajouter OTP " +
                                "comme deuxième facteur</3> pour configurer un flux TOTP de base.",
                            heading: "Sélectionnez <1>Ajouter TOTP comme deuxième facteur</1>"
                        }
                    },
                    subHeading: "Suivez les instructions ci-dessous pour configurer TOTP en tant que facteur " +
                        "dans votre flux de connexion."
                }
            },
        },
        sidePanel: {
            branding: "l'image de marque",
            categories: {
                branding: "l'image de marque",
            }
        }
    },
    manage: {
        attributes: {
            attributes: {
                description: "Afficher et gérer les attributs"
            },
            displayNameHint: "Le nom d'affichage sera utilisé dans le profil de l'utilisateur pour reconnaître "
                +"l'attribut, donc soyez prudent lors de sa sélection.",
            generatedAttributeMapping: {
                title: "Mappages de protocoles",
                OIDCProtocol: "OpenID Connect",
                SCIMProtocol: "SCIM 2.0",
                description: "Nous simplifions le processus pour vous et ajoutons les mappages requis pour "
                    +"les protocoles suivants."
            }
        },
        features: {
            tenant: {
                header: {
                    tenantSwitchHeader: "Changer d'organisation",
                    tenantAddHeader: "Nouvelle organisation",
                    tenantDefaultButton: "Défaut",
                    tenantMakeDefaultButton: "Faire défaut",
                    backButton: "Retourner",
                    tenantSearch: {
                        placeholder: "Rechercher une organisation",
                        emptyResultMessage: "Aucune organisation trouvée"
                    }
                },
                wizards: {
                    addTenant: {
                        heading: "Ajouter une nouvelle organisation",
                        forms: {
                            fields: {
                                tenantName: {
                                    label: "Nom de l'organisation",
                                    placeholder: "Nom de l'organisation (E.g., myorg)",
                                    validations: {
                                        empty: "Ceci est un champ obligatoire.",
                                        duplicate:
                                            "Une organisation portant le nom {{ tenantName }} existe déjà." +
                                            " Veuillez essayer un autre nom.",
                                        invalid:
                                            "Le nom que vous avez entré contient des caractères non autorisés." +
                                            " Il peut contenir jusqu'à {{ characterLimit }} caractères, ne peut être" +
                                            " composé que de minuscules alphanumériques et doit toujours commencer" +
                                            " par un caractère alphabétique.",
                                        invalidLength: "Le nom que vous avez entré comporte moins de" +
                                            " {{ characterLowerLimit }} caractères. Il peut contenir jusqu'à" +
                                            " {{ characterLimit }} caractères, ne peut être composé que de lettres" +
                                            " alphanumériques minuscules et doit toujours commencer par un" +
                                            " caractère alphabétique."
                                    }
                                }
                            },
                            loaderMessages: {
                                duplicateCheck: "Validation du nouveau nom de l'organisation...",
                                tenantCreate: "Créer la nouvelle organisation...",
                                tenantSwitch:
                                    "Veuillez patienter pendant que nous vous redirigeons vers la nouvelle" +
                                    "organisation..."
                            },
                            messages: {
                                info:
                                    "Pensez à un bon nom d'organisation unique pour votre nouvel espace de travail" +
                                    " Asgardeo car vous ne pourrez pas le modifier plus tard!"
                            }
                        },
                        tooltips: {
                            message: "Vous utiliserez cette URL pour accéder à la nouvelle organisation."
                        }
                    }
                },
                tenantCreationPrompt: {
                    heading: "Créer une nouvelle organisation",
                    subHeading1: "Votre compte n'est lié à aucune organisation.",
                    subHeading2: "Pour continuer, créez une nouvelle organisation."
                },
                notifications: {
                    addTenant: {
                        error: {
                            description: "{{ description }}",
                            message: "Erreur lors de la création de l'organisation"
                        },
                        genericError: {
                            description: "Une erreur s'est produite lors de la création de l'organisation.",
                            message: "Erreur lors de la création de l'organisation"
                        },
                        limitReachError: {
                            description: "Le nombre maximum d'organisations autorisées a été atteint.",
                            message: "Erreur lors de la création de l'organisation"
                        },
                        success: {
                            description: "Organisation {{ tenantName }} créée avec succès.",
                            message: "Organisation créée"
                        }
                    },
                    defaultTenant: {
                        genericError: {
                            description:
                                "Une erreur s'est produite lors de la mise à jour de votre organisation par défaut.",
                            message: "Erreur lors de la mise à jour de l'organisation"
                        },
                        success: {
                            description: "Vous avez bien défini {{ tenantName }} votre organisation par défaut.",
                            message: "Organisation par défaut mise à jour"
                        }
                    },
                    missingClaims: {
                        message: "Certaines informations personnelles sont manquantes",
                        description:
                            "Veuillez visiter l'application MyAccount et assurez-vous que votre prénom," +
                            " nomet adresse e-mail principale ont été définis dans la section Informations personnelles."
                    },
                    getTenants: {
                        message: "Impossible de récupérer vos organisations",
                        description: "Une erreur s'est produite lors de la récupération de vos organisations."
                    }
                }
            },
            user: {
                addUser: {
                    inviteUserTooltip: "Un e-mail avec un lien de confirmation sera envoyé à l'adresse e-mail " +
                    "fournie pour que l'utilisateur définisse son propre mot de passe.",
                    validation: {
                        password: "Votre mot de passe doit contenir un minimum de 8 caractères dont au moins une " +
                            "lettre majuscule, une lettre minuscule et un chiffre."
                    }
                }
            }
        },
        groups: {
            heading: "Groupes",
            subHeading: "Les groupes d'utilisateurs de votre organisation sont répertoriés ici. Vous pouvez créer de nouveaux" +
                " groupes et affecter des utilisateurs.",
            edit: {
                users: {
                    heading: "Utilisateurs du groupe",
                    description: "Ajoutez ou supprimez des utilisateurs appartenant à ce groupe."
                }
            }
        },
        serverConfigurations: {
            accountManagement: {
                accountRecovery: {
                    heading: "Password Recovery",
                    subHeading: "Configurez les paramètres de récupération de mot de passe en libre-service pour " +
                        "permettre aux utilisateurs de réinitialiser leur mot de passe à l'aide d'un e-mail.",
                    toggleName: "Activer la récupération de mot de passe"
                }
            },
            accountRecovery: {
                backButton: "Revenir à la récupération de compte",
                heading: "Account Recovery",
                passwordRecovery: {
                    form: {
                        fields: {
                            enable: {
                                hint: "L'activation de cette option permettra aux utilisateurs professionnels de " +
                                    "réinitialiser leur mot de passe à l'aide d'un e-mail.",
                                label: "Activer"
                            },
                            expiryTime: {
                                label: "Délai d'expiration du lien de récupération en minutes",
                                placeholder: "Entrez l'heure d'expiration",
                                validations: {
                                    invalid: "Le délai d'expiration du lien de récupération doit être un nombre entier.",
                                    empty: "L'heure d'expiration du lien de récupération ne peut pas être vide.",
                                    range: "Le délai d'expiration du lien de récupération doit être compris entre " +
                                        "1 minute et 10 080 minutes (7 jours).",
                                    maxLengthReached: "L'heure d'expiration du lien de récupération doit être un " +
                                        "nombre de 5 chiffres ou moins."
                                }
                            },
                            notifySuccess: {
                                hint: "Ceci spécifie s'il faut notifier l'utilisateur par e-mail lorsque la " +
                                    "récupération du mot de passe est réussie.",
                                label: "Notifier la récupération réussie"
                            }
                        }
                    },
                    connectorDescription: "Activer l'option de récupération de mot de passe en libre-service pour " +
                        "les utilisateurs professionnels sur la page de connexion. ",
                    heading: "Password Recovery",
                    notification: {
                        error: {
                            description: "Erreur lors de la mise à jour de la configuration de récupération de mot " +
                                "de passe.",
                            message: "Erreur de mise à jour de la configuration"
                        },
                        success: {
                            description: "La configuration de récupération de mot de passe a été mise à jour avec " +
                                "succès.",
                            message: "Mise à jour réussie"
                        }
                    },
                    subHeading: "Activez l'option de récupération de mot de passe en libre-service pour les " +
                        "utilisateurs professionnels sur la page de connexion."
                },
                subHeading: "Configurer les paramètres liés à la récupération du mot de passe et à la " +
                    "récupération du nom d'utilisateur."
            },
            accountSecurity: {
                backButton: "Revenir à la sécurité du compte",
                heading: "Sécurité du compte",
                botDetection: {
                    form: {
                        fields: {
                            enable: {
                                hint: "L'activation de cette option appliquera reCaptcha pour la connexion et " +
                                    "la récupération.",
                                label: "Activer"
                            }
                        }
                    },
                    info: {
                        heading: "Cela appliquera la validation reCAPTCHA dans les interfaces utilisateur " +
                            "respectives des flux suivants.",
                        subSection1: "Connectez-vous aux applications d'entreprise",
                        subSection2: "Récupérer le mot de passe d'un compte client",
                        subSection3: "Auto-inscription pour les comptes clients"
                    },
                    connectorDescription: "Activer reCAPTCHA pour l'organisation.",
                    heading: "Détection de Bot",
                    notification: {
                        error: {
                            description: "Erreur lors de la mise à jour de la configuration de détection de bot.",
                            message: "Erreur de mise à jour de la configuration"
                        },
                        success: {
                            description: "La configuration de détection de bot a été mise à jour avec succès.",
                            message: "Mise à jour réussie"
                        }
                    },
                    subHeading: "Activer recaptcha pour la connexion à l'application métier et la récupération de " +
                        "compte pour l'organisation."
                },
                loginAttemptSecurity: {
                    form: {
                        fields: {
                            accountLockIncrementFactor: {
                                hint: "Ceci spécifie le facteur par lequel la durée de verrouillage du compte " +
                                    "doit être incrémentée lors d'autres tentatives de connexion infructueuses " +
                                    "après le verrouillage du compte. Ex : Durée initiale : 5mins ; " +
                                    "Facteur d'incrémentation : 2 ; Durée du prochain verrouillage : " +
                                    "5 x 2 = 10 min.",
                                label: "Facteur d'incrément de la durée du verrouillage du compte",
                                placeholder: "Entrez le facteur d'incrément de la durée de verrouillage",
                                validations: {
                                    invalid: "Le facteur d'incrément de la durée du verrouillage du compte doit être " +
                                        "un nombre entier.",
                                    range: "Le facteur d'incrément de la durée du verrouillage du compte doit être " +
                                        "compris entre 1 et 10.",
                                    maxLengthReached: "Le facteur d'incrément de la durée du verrouillage du compte " +
                                        "doit être un nombre à 1 ou 2 chiffres."
                                }
                            },
                            accountLockTime: {
                                hint: "Cela spécifie la durée initiale pendant laquelle le compte sera verrouillé. " +
                                    "Le compte sera automatiquement déverrouillé après cette période.",
                                label: "Durée de verrouillage du compte en minutes",
                                placeholder: "Entrer la durée de verrouillage",
                                validations: {
                                    invalid: "La durée de verrouillage du compte doit être un nombre entier.",
                                    required: "La durée de verrouillage du compte est un champ obligatoire.",
                                    range: "La durée de verrouillage du compte doit être comprise entre 1 minute " +
                                        "et 1 440 minutes (1 jour).",
                                    maxLengthReached: "La durée de verrouillage du compte doit être un nombre de 4 " +
                                        "chiffres ou moins."
                                }
                            },
                            enable: {
                                hint: "Le verrouillage du compte entraînera l'envoi d'un courrier à l'utilisateur " +
                                    "indiquant que le compte a été verrouillé.",
                                label: "Activer"
                            },
                            maxFailedAttempts: {
                                hint: "Ceci spécifie le nombre de tentatives de connexion infructueuses autorisées " +
                                    "avant que le compte ne soit verrouillé.",
                                label: "Nombre de tentatives de connexion infructueuses avant le verrouillage du " +
                                    "compte",
                                placeholder: "Saisissez le nombre maximal de tentatives infructueuses",
                                validations: {
                                    invalid: "Le nombre maximal de tentatives infructueuses doit être un nombre " +
                                        "entier.",
                                    required: "Le nombre maximal de tentatives échouées est un champ obligatoire.",
                                    range: "Le nombre maximal de tentatives infructueuses doit être compris entre 1 " +
                                        "et 10.",
                                    maxLengthReached: "Le nombre maximal de tentatives infructueuses doit être un " +
                                        "nombre à 1 ou 2 chiffres."
                                }
                            }
                        }
                    },
                    info: "Une fois le compte verrouillé, le propriétaire du compte en sera informé par e-mail. " +
                        "Le compte sera automatiquement activé après la durée de verrouillage du compte.",
                    connectorDescription: "Protégez les comptes contre les attaques par force brute de mot " +
                        "de passe en verrouillant le compte lors de tentatives de connexion infructueuses " +
                        "consécutives.",
                    heading: "Tentatives de connexion Sécurité",
                    notification: {
                        error: {
                            description: "Erreur lors de la mise à jour de la configuration de sécurité des " +
                                "tentatives de connexion.",
                            message: "Erreur lors de la mise à jour de la configuration"
                        },
                        success: {
                            description: "La configuration de sécurité des tentatives de connexion a été mise à " +
                                "jour avec succès.",
                            message: "Mise à jour réussie"
                        }
                    },
                    subHeading: "Activer le verrouillage du compte en cas d'échec des tentatives de connexion pour " +
                        "la connexion à l'application métier de l'organisation.",
                    howItWorks: {
                        correctPassword: {
                            description: "Si l'utilisateur entre le mot de passe correct, l'utilisateur peut se " +
                            "connecter avec succès."
                        },
                        example: {
                            description_plural: "C'est-à-dire que le compte sera verrouillé pendant " +
                            "{{ lockIncrementRatio }} x {{ lockDuration }} = {{ lockTotalDuration }} minutes.",
                            description_singular: "C'est-à-dire que le compte sera verrouillé pendant " +
                            "{{ lockIncrementRatio }} x {{ lockDuration }} = {{ lockTotalDuration }} minute."
                        },
                        incorrectPassword: {
                            description_plural: "Si l'utilisateur essaie un mot de passe incorrect pour " +
                                "{{ maxAttempts }} autres tentatives consécutives, la durée de verrouillage du " +
                                "compte sera incrémentée de {{ lockIncrementRatio }} fois la durée de " +
                                "verrouillage précédente.",
                            description_singular: "Si l'utilisateur essaie un mot de passe incorrect pour " +
                                "{{ maxAttempts }} autres tentative consécutives, la durée de verrouillage " +
                                "du compte sera incrémentée de {{ lockIncrementRatio }} fois la durée de " +
                                "verrouillage précédente."
                        }
                    }                      
                },
                subHeading: "Configurez les paramètres de sécurité pour protéger les comptes d'utilisateurs."
            },
            additionalSettings: "Paramètres additionnels",
            generalBackButton: "Retourner",
            generalDisabledLabel: "désactivé",
            generalEnabledLabel: "activé",
            userOnboarding: {
                backButton: "Revenir à l'auto-inscription",
                heading: "Auto-inscription",
                selfRegistration: {
                    form: {
                        fields: {
                            enable: {
                                hint: "Autoriser les utilisateurs particuliers à s'inscrire eux-mêmes pour cette " +
                                    "organisation. Lorsqu'il est activé, les utilisateurs verront un lien pour " +
                                    "créer un compte sur l'écran de connexion.",
                                label: "Activer"
                            },
                            expiryTime: {
                                hint: "L'heure d'expiration du lien de vérification du compte.",
                                label: "Heure d'expiration du lien de vérification du compte",
                                placeholder: "Entrez l'heure d'expiration",
                                validations: {
                                    invalid: "L'heure d'expiration doit être un nombre entier.",
                                    empty: "Le délai d'expiration ne peut pas être vide.",
                                    range: "Le délai d'expiration doit être compris entre 1 minute et " +
                                        "10 080 minutes (7 jours).",
                                    maxLengthReached: "L'heure d'expiration doit être un nombre avec 5 chiffres ou " +
                                        "moins."
                                }
                            },
                            activateImmediately: {
                                msg: "Si sélectionné, le nouveau compte est activé immédiatement après " +
                                    "l'enregistrement sans attendre la confirmation du compte",
                                hint: "Cela permettra la vérification par e-mail lors de l'auto-inscription.",
                                label: "Activer le compte immédiatement"
                            },
                            signUpConfirmation: {
                                recommendationMsg:"Il est recommandé d'activer la vérification du compte pour " +
                                    "l'auto-enregistrement.",
                                botMsg: " Sinon, activez au moins la détection des bots.",
                                accountLockMsg: "La vérification du compte permet la vérification de l'e-mail " +
                                    "lors de l'auto-inscription. Le nouveau compte n'est activé qu'une fois " +
                                    "que l'utilisateur a vérifié l'e-mail",
                                hint: "Un e-mail est envoyé à l'utilisateur auto-enregistré demandant la " +
                                    "vérification du compte.",
                                label: "Vérification de compte"
                            }
                        }
                    },
                    connectorDescription: "Activer l'auto-inscription pour les utilisateurs clients de l'organisation.",
                    heading: "Auto-inscription",
                    notification: {
                        error: {
                            description: "Erreur lors de la mise à jour de la configuration d'auto-enregistrement.",
                            message: "Erreur de mise à jour de la configuration"
                        },
                        success: {
                            description: "Mise à jour réussie de la configuration d'auto-enregistrement.",
                            message: "Mise à jour réussie"
                        }
                    },
                    subHeading: "Lorsque l'auto-inscription est activée, les utilisateurs peuvent s'inscrire via le " +
                        "lien <1>Créer un compte</1> sur la page de connexion de l'application. " +
                        "Cela crée un nouveau compte <3>client</3> dans l'organisation."
                },
                subHeading: "Paramètres liés à l'auto-enregistrement"
            }
        },
        users: {
            editUserProfile: {
                userId: "Identifiant d'utilisateur",
                disclaimerMessage: "Ce profil utilisateur appartient à un collaborateur ou à un propriétaire" +
                    " d'organisation. Seul le propriétaire du compte peut gérer le profil via l'application Compte.",
                accountLock: {
                    title: "Verrouiller le compte utilisateur",
                    description: "Une fois le compte verrouillé, l'utilisateur ne peut plus se connecter au système. " +
                        "S'il vous plaît soyez certain."
                }
            },
            list: {
                columns: {
                    user: "utilisateur",
                    accountType: "Type de compte",
                    idpType: "Dirigé par",
                    userStore: "Magasin d'utilisateurs"
                },
                popups: {
                    content: {
                        AccountTypeContent: "La relation de l'utilisateur avec cette organisation.",
                        idpTypeContent: "Entité qui gère l'identité et les informations d'identification de " +
                            "l'utilisateur.",
                        sourceContent: "Le magasin de données où les informations utilisateur sont stockées."
                    }
                }
            },
            descriptions: {
                learnMore: "Apprendre encore plus",
                allUser: "Ce sont tous les utilisateurs de votre organisation.",
                consumerUser: "Ces utilisateurs (clients) peuvent accéder aux applications de l'organisation. Les " +
                    "administrateurs peuvent intégrer des clients à l'organisation ou les clients peuvent " +
                    "s'inscrire si l'auto-inscription est activée.",
                guestUser: "Ces utilisateurs (collaborateurs) ont accès aux opérations administratives de votre " +
                    "organisation (Par exemple, intégration des applications, gestion des utilisateurs). " +
                    "Les administrateurs peuvent inviter des utilisateurs en tant que collaborateurs dans " +
                    "l'organisation et leur attribuer des autorisations.",
                consumerAppInfo: "Partagez ce lien avec vos clients pour autoriser l'accès à My Account et gérer leurs comptes."
            },
            notifications: {
                addUser: {
                    customerUser: {
                        limitReachError: {
                            description: "Le nombre maximum d'utilisateurs clients autorisés a été atteint.",
                            message: "Erreur lors de l'ajout du nouvel utilisateur"
                        }
                    }
                }
            }
        },
        invite: {
            notifications: {
                sendInvite: {
                    limitReachError: {
                        description: "Le nombre maximal d'utilisateurs collaborateurs autorisés a été atteint.",
                        message: "Erreur lors de l'envoi de l'invitation"
                    }
                }
            }
        },
        guest: {
            deleteUser: {
                confirmationModal: {
                    content: "Cependant, le compte de l'utilisateur n'est pas définitivement " +
                        "supprimé d'Asgardeo et il pourra toujours accéder aux autres organisations auxquelles " +
                        "il est associé.",
                    message: "Cette action est irréversible et supprimera l'association de l'utilisateur avec " +
                        "cette organisation."
                }
            },
            editUser: {
                dangerZoneGroup: {
                    deleteUserZone: {
                        subheader: "Cette action supprimera l'association de l'utilisateur avec cette organisation. " +
                            "Veuillez être certain avant de continuer."
                    }
                }
            }
        },
        sidePanel: {
            categories: {
                attributeManagement: "Gestion des attributs",
                AccountManagement: "Gestion de compte",
                userManagement: "Gestion des utilisateurs"
            }
        }
    }
};
