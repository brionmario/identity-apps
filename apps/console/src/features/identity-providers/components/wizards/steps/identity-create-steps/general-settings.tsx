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
import React, { FunctionComponent, ReactElement } from "react";
import { IdentityProviderInterface } from "../../../../models";
import { GeneralDetailsForm } from "../../../forms";

/**
 * Proptypes for the general settings wizard form component.
 */
interface GeneralSettingsWizardFormPropsInterface extends TestableComponentInterface {
    initialValues: IdentityProviderInterface;
    triggerSubmit: boolean;
    onSubmit: (values: IdentityProviderInterface) => void;
}

/**
 * General settings wizard form component.
 *
 * @param {GeneralSettingsWizardFormPropsInterface} props - Props injected to the component.
 * @return {ReactElement}
 */
export const GeneralSettings: FunctionComponent<GeneralSettingsWizardFormPropsInterface> = (
    props: GeneralSettingsWizardFormPropsInterface
): ReactElement => {

    const {
        initialValues,
        triggerSubmit,
        onSubmit,
        [ "data-testid" ]: testId
    } = props;

    return (
        <GeneralDetailsForm
            name={ initialValues?.name }
            description={ initialValues?.description }
            isPrimary={ false }
            onSubmit={ onSubmit }
            imageUrl={ initialValues?.image }
            triggerSubmit={ triggerSubmit }
            enableWizardMode={ true }
            data-testid={ testId }
        />
    );
};
