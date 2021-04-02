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

import { TestableComponentInterface } from "@wso2is/core/models";
import { Code } from "@wso2is/react-components";
import isEmpty from "lodash-es/isEmpty";
import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Checkbox, Icon, Input, Label, Popup, Table } from "semantic-ui-react";
import { ExtendedClaimMappingInterface } from "./attribute-settings";

interface AttributeListItemPropInterface extends TestableComponentInterface {
    displayName: string;
    localClaimDisplayName?: string;
    mappedURI: string;
    claimURI: string;
    localDialect: boolean;
    updateMapping?: any;
    addToMapping?: any;
    selectMandatory?: (claimURI: string, mandatory: boolean) => void;
    selectRequested?: (claimURI: string, requested: boolean) => void;
    isDefaultMappingChanged?: (isChanged: boolean) => void;
    mapping?: ExtendedClaimMappingInterface;
    initialMandatory?: boolean;
    initialRequested?: boolean;
    claimMappingOn?: boolean;
    claimMappingError?: boolean;
    deleteAttribute?: () => void;
    /**
     * Specify whether this is the selected subject attribute
     */
    subject?: boolean;
    /**
     * Make the form read only.
     */
    readOnly?: boolean;
}

/**
 * Selected Attribute list item component.
 *
 * @param {AttributeListItemPropInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const AttributeListItem: FunctionComponent<AttributeListItemPropInterface> = (
    props: AttributeListItemPropInterface
): ReactElement => {

    const {
        claimURI,
        displayName,
        localClaimDisplayName,
        localDialect,
        updateMapping,
        addToMapping,
        selectMandatory,
        selectRequested,
        isDefaultMappingChanged,
        mapping,
        initialMandatory,
        initialRequested,
        claimMappingOn,
        claimMappingError,
        readOnly,
        deleteAttribute,
        subject,
        [ "data-testid" ]: testId
    } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const [mappingOn, setMappingOn] = useState(false);
    const [errorInClaimMapping, setErrorInClaimMapping] = useState(false);
    const [mandatory, setMandatory] = useState(false);
    const [requested, setRequested] = useState(true);
    const [mappedAttribute, setMappedAttribute] = useState(claimURI);
    const [defaultMappedAttribute, setDefaultMappedAttribute] = useState(mappedAttribute);

    const handleMandatoryCheckChange = () => {
        if (mandatory) {
            selectMandatory(claimURI, false);
            setMandatory(false);
        } else {
            setMandatory(true);
            selectMandatory(claimURI, true);
        }
    };

    const handleClaimMapping = (e) => {
        const mappingValue = e.target.value;

        setMappedAttribute(mappingValue);
        updateMapping(claimURI, mappingValue);
        if (claimMappingError && !isEmpty(mappingValue)) {
            setErrorInClaimMapping(false);
        }
        isDefaultMappingChanged(true);
    };

    useEffect(() => {
        setMandatory(initialMandatory);
    }, []);

    useEffect(() => {
        setRequested(initialRequested);
    }, [initialRequested]);

    useEffect(() => {
        if (isEmpty(mapping?.applicationClaim)) {
            setErrorInClaimMapping(claimMappingError);
        }
    }, [claimMappingError]);

    useEffect(() => {
        setMappingOn(claimMappingOn);
        setMappedAttribute(claimURI);
        if (mapping) {
            addToMapping(claimURI, claimMappingOn);
            updateMapping(claimURI,defaultMappedAttribute);
        }
    }, [claimMappingOn]);

    return (
        <Table.Row data-testid={ testId }>
            <Table.Cell>
                <div>{ !localDialect ? localClaimDisplayName : displayName }</div>
                {
                    <Popup
                        content={ claimURI }
                        inverted
                        trigger={ (
                            <Code compact withBackground={ false }>{ claimURI }</Code>
                        ) }
                        position="bottom left">
                    </Popup>
                }
            </Table.Cell>
            {
                localDialect && mappingOn &&
                <>
                    <Table.Cell error={ errorInClaimMapping }>
                        <Input
                            placeholder={
                                t("console:develop.features.applications.edit.sections.attributes.selection" +
                                    ".mappingTable.listItem.fields.claim.placeholder",
                                    { name: displayName })
                            }
                            value={ mappingOn ? mappedAttribute : defaultMappedAttribute }
                            onChange={ handleClaimMapping }
                            disabled={ !mappingOn }
                            readOnly={ readOnly }
                            required
                        />
                        { errorInClaimMapping && (
                            <Label
                                basic color="red"
                                pointing="left"
                            >
                                { t("console:develop.features.applications.edit.sections.attributes.selection" +
                                    ".mappingTable.listItem.fields.claim.label") }
                            </Label>
                        ) }
                    </Table.Cell>
                </>
            }
            <Table.Cell
                { ...(localDialect && !mappingOn && { textAlign: "center" }) }
                { ...(localDialect && mappingOn && { textAlign: "left" }) }
                { ...(!localDialect && { textAlign: "center" }) }
            >
                <Popup
                    trigger={
                        (
                            <Checkbox
                                checked={ mandatory || subject }
                                defaultChecked={ initialMandatory }
                                onClick={ handleMandatoryCheckChange }
                                disabled={ mappingOn ? !requested : false }
                                readOnly={ readOnly }
                            />
                        )
                    }
                    position="top right"
                    content={
                        subject ? t("console:develop.features.applications.edit.sections.attributes.selection" +
                            ".mappingTable.listItem.actions.subjectDisabledSelection") :
                            mandatory
                                ? t("console:develop.features.applications.edit.sections.attributes.selection" +
                                ".mappingTable.listItem.actions.removeMandatory")
                                : t("console:develop.features.applications.edit.sections.attributes.selection" +
                                ".mappingTable.listItem.actions.makeMandatory")
                    }
                    inverted
                    disabled={
                        subject ? false : readOnly
                            ? true
                            : mappingOn
                                ? !requested
                                : false
                    }
                />
            </Table.Cell>
            { deleteAttribute ? (
                <Table.Cell textAlign="right">
                    <Popup
                        trigger={ (
                            <Icon
                                link={ true }
                                className="list-icon pr-4"
                                size="large"
                                color="grey"
                                name="trash alternate"
                                onClick={ deleteAttribute }
                            />
                        ) }
                        position="top right"
                        content={ t("common:remove") }
                        inverted
                    />
                </Table.Cell>
            ) : null }
        </Table.Row>
    );
};
