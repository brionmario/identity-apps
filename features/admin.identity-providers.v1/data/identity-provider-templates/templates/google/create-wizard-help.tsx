/**
 * Copyright (c) 2021, WSO2 LLC. (https://www.wso2.com).
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

import { AppState } from "@wso2is/admin.core.v1/store";
import { ConfigReducerStateInterface } from "@wso2is/admin.core.v1/models/reducer-state";
import { TestableComponentInterface } from "@wso2is/core/models";
import { Code, CopyInputField, DocumentationLink, Heading, Message, useDocumentation } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Divider } from "semantic-ui-react";

/**
 * Prop types of the component.
 */
type GoogleIDPCreateWizardHelpPropsInterface = TestableComponentInterface

/**
 * Help content for the custom IDP template creation wizard.
 *
 * @param props - Props injected into the component.
 * @returns React Element for Google Create Wizard
 */
const GoogleIDPCreateWizardHelp: FunctionComponent<GoogleIDPCreateWizardHelpPropsInterface> = (
    props: GoogleIDPCreateWizardHelpPropsInterface
): ReactElement => {

    const {
        [ "data-testid" ]: testId
    } = props;

    const { t } = useTranslation();
    const { getLink } = useDocumentation();

    const config: ConfigReducerStateInterface = useSelector((state: AppState) => state.config);

    return (
        <div data-testid={ testId }>
            <Message
                type="info"
                header={
                    t("authenticationProvider:templates.google.wizardHelp." +
                        "preRequisites.heading")
                }
                content={
                    (<>
                        <p>
                            <Trans
                                i18nKey={
                                    "authenticationProvider:templates.google.wizardHelp." +
                                    "preRequisites.getCredentials"
                                }
                            >
                                Before you begin, create an <strong>OAuth credential</strong> on the <DocumentationLink
                                    link={ getLink("develop.connections.newConnection.google.help.developerConsole") }
                                    showEmptyLinkText
                                >Google developer console</DocumentationLink>, and obtain a <strong
                                >Client ID & secret</strong>.
                            </Trans>
                        </p>
                        <p>

                            <Trans
                                i18nKey={
                                    "authenticationProvider:templates.google.wizardHelp" +
                                    ".preRequisites.configureRedirectURL"
                                }
                            >
                                Use the following URL as the <strong>Authorized Redirect URI</strong>.
                            </Trans>

                            <CopyInputField
                                className="copy-input-dark spaced"
                                value={ config?.deployment?.customServerHost + "/commonauth" }
                            />

                            <DocumentationLink
                                link={ getLink("develop.connections.newConnection.google.help.configureOAuth") }
                                showEmptyLinkText
                            >
                                {
                                    t("authenticationProvider:templates.google.wizardHelp." +
                                        "preRequisites.configureOAuthApps")
                                }
                            </DocumentationLink>
                        </p>
                    </>)
                }
            />

            <Heading as="h5">
                {
                    t("authenticationProvider:templates.google" +
                        ".wizardHelp.name.heading")
                }
            </Heading>
            <p>
                {
                    t("authenticationProvider:templates.google." +
                        "wizardHelp.name.connectionDescription")
                }
            </p>

            <Divider/>

            <Heading as="h5">
                { t("authenticationProvider:templates.google.wizardHelp.clientId.heading") }
            </Heading>
            <p>
                <Trans
                    i18nKey={
                        "authenticationProvider:templates.google" +
                        ".wizardHelp.clientId.description"
                    }
                >
                    Provide the <Code>Client ID</Code> obtained from Google.
                </Trans>
            </p>

            <Divider/>

            <Heading as="h5">
                {
                    t("authenticationProvider:templates.google" +
                        ".wizardHelp.clientSecret.heading")
                }
            </Heading>
            <p>
                <Trans
                    i18nKey={
                        "authenticationProvider:templates.google" +
                        ".wizardHelp.clientSecret.description"
                    }
                >
                    Provide the <Code>Client Secret</Code> obtained from Google.
                </Trans>
            </p>
        </div>
    );
};

/**
 * Default props for the component
 */
GoogleIDPCreateWizardHelp.defaultProps = {
    "data-testid": "google-idp-create-wizard-help"
};

/**
 * A default export was added to support React.lazy.
 * TODO: Change this to a named export once react starts supporting named exports for code splitting.
 * @see {@link https://reactjs.org/docs/code-splitting.html#reactlazy}
 */
export default GoogleIDPCreateWizardHelp;
