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

import { AlertLevels, TestableComponentInterface } from "@wso2is/core/models";
import { addAlert } from "@wso2is/core/store";
import { GenericIcon, LinkButton, Section } from "@wso2is/react-components";
import React, { FunctionComponent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Accordion, Grid, Icon } from "semantic-ui-react";
import DynamicConnectorForm from "./dynamic-connector-form";
import { updateGovernanceConnector } from "../../api";
import { GovernanceConnectorInterface } from "../../models";
import { GovernanceConnectorUtils } from "../../utils";

/**
 * Prop types for the realm configurations component.
 */
interface DynamicGovernanceConnectorProps extends TestableComponentInterface {
    connector: GovernanceConnectorInterface;
}

/**
 * Dynamic governance connector component.
 *
 * @param {DynamicGovernanceConnectorProps} props - Props injected to the dynamic connector component.
 *
 * @return {React.ReactElement}
 */
export const DynamicGovernanceConnector: FunctionComponent<DynamicGovernanceConnectorProps> = (
    props: DynamicGovernanceConnectorProps
): ReactElement => {

    const {
        connector,
        ["data-testid"]: testId
    } = props;

    const [ connectorAccordionActiveState, setConnectorAccordionActiveState ] = useState<boolean>(false);

    const dispatch = useDispatch();

    const { t } = useTranslation();

    const handleUpdateError = (error) => {
        if (error.response && error.response.data && error.response.data.detail) {
            dispatch(addAlert({
                description: t("adminPortal:components.governanceConnectors.notifications." +
                    "updateConnector.error.description", { description: error.response.data.description }),
                level: AlertLevels.ERROR,
                message: t("adminPortal:components.governanceConnectors.notifications." +
                    "updateConnector.error.message")
            }));
        } else {
            // Generic error message
            dispatch(addAlert({
                description: t("adminPortal:components.governanceConnectors.notifications." +
                    "updateConnector.genericError.description"),
                level: AlertLevels.ERROR,
                message: t("adminPortal:components.governanceConnectors.notifications." +
                    "updateConnector.genericError.message")
            }));
        }
    };

    const handleSubmit = (values) => {
        const data = {
            "operation": "UPDATE",
            "properties": []
        };
        for (const key in values) {
            data.properties.push({
                "name": GovernanceConnectorUtils.decodeConnectorPropertyName(key),
                "value": values[key]
            });
        }
        updateGovernanceConnector(data, connector.categoryId, connector.id)
            .then(() => {
                dispatch(addAlert({
                    description: t("adminPortal:components.governanceConnectors.notifications." +
                        "updateConnector.success.description", { name: connector.friendlyName }),
                    level: AlertLevels.SUCCESS,
                    message: t("adminPortal:components.governanceConnectors.notifications." +
                        "updateConnector.success.message")
                }));
                handleConnectorAccordionClick();
            })
            .catch((error) => {
                handleUpdateError(error);
            });
    };

    const getConnectorInitialValues = (connector: GovernanceConnectorInterface) => {
        const values = {};
        connector?.properties.map(property => {
            if (property.value === "true") {
                values[GovernanceConnectorUtils.encodeConnectorPropertyName(property.name)] = true;
            } else if (property.value === "false") {
                values[GovernanceConnectorUtils.encodeConnectorPropertyName(property.name)] = false;
            } else {
                values[GovernanceConnectorUtils.encodeConnectorPropertyName(property.name)] = property.value;
            }
        });
        return values;
    };

    const connectorForm: ReactElement = (
        <DynamicConnectorForm onSubmit={ handleSubmit }
                              props={ { properties: connector.properties } }
                              form={ connector.name + "-form" }
                              initialValues={ getConnectorInitialValues(connector) }
                              data-testid={ `${ testId }-${ connector.name }-form` }
        />
    );

    const handleConnectorAccordionClick = () => {
        setConnectorAccordionActiveState(!connectorAccordionActiveState)
    };

    const connectorAccordion: ReactElement = (
        <Accordion fluid styled data-testid={ `${ testId }-main-accordion` }>
            <Accordion.Title
                active={ connectorAccordionActiveState }
                index={ 0 }
                onClick={ handleConnectorAccordionClick }
            >
                <Grid className="middle aligned">
                    <Grid.Row columns={ 2 } className="inner-list-item">
                        <Grid.Column className="first-column">
                            <LinkButton className="p-3">Settings</LinkButton>
                        </Grid.Column>
                        <Grid.Column className="last-column" textAlign="right">
                            <GenericIcon
                                size="default"
                                defaultIcon
                                link
                                inline
                                transparent
                                verticalAlign="middle"
                                className="pr-3"
                                icon={ <Icon name="angle right" className="chevron"/> }
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Accordion.Title>
            <Accordion.Content active={ connectorAccordionActiveState }>
                { connectorForm }
            </Accordion.Content>
        </Accordion>
    );

    return (
        <Section
            header={ connector?.friendlyName }
            description={ connector?.description }
            iconSize="auto"
            iconStyle="colored"
            iconFloated="right"
            accordion={ connectorAccordion }
            data-testid={ `${ testId }-section` }
        >
        </Section>
    );
};

/**
 * Default props for the component.
 */
DynamicGovernanceConnector.defaultProps = {
    "data-testid": "dynamic-governance-connector"
};
