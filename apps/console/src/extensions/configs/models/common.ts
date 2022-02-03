/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { HeaderExtension, HeaderLinkCategoryInterface } from "@wso2is/react-components";
import { FeatureAccessConfigInterface } from "@wso2is/core/models";
import { HeaderSubPanelItemInterface } from "../../../features/core/components";
import { FeatureConfigInterface } from "../../../features/core/models";

export interface CommonConfig {
    advancedSearchWithBasicFilters: {
        enableQuerySearch: boolean;
    };
    blockLoopBackCalls: boolean;
    checkForUIResourceScopes: boolean;
    enableOrganizationAssociations: boolean;
    header: {
        /**
         * Get the extensions for the header.
         * @return {HeaderExtension[]}
         */
        getHeaderExtensions: () => HeaderExtension[];
        /**
         * Get the extensions for the Header sub panel.
         * These will come along with the `Manage` & `Develop` links.
         * @return {{aligned: "left" | "right"; component: React.ReactElement; order: number}[]}
         */
        getHeaderSubPanelExtensions: () => HeaderSubPanelItemInterface[];
        /**
         * Get the user dropdown link extensions.
         * @return {HeaderLinkCategoryInterface[]}
         */
        getUserDropdownLinkExtensions: () => HeaderLinkCategoryInterface[];
        /**
         * Should the app switcher be shown as nine dots dropdown.
         */
        renderAppSwitcherAsDropdown: boolean;
    };
    leftNavigation: {
        /**
         * Should the side panel be categorized for different views.
         */
        isLeftNavigationCategorized: {
            develop: boolean;
            manage: boolean;
        };
    };
    userEditSection: {
        isGuestUser: boolean;
        showEmail: boolean;
    };
    hotjarTracking : {
        /*
         * Tag hotjar attributes. 
        */
        tagAttributes : () => void;
    }
}

/**
 * Types of views that are extended.
 * @remarks Any views other thant `DEVELOP` and `MANAGE` can go here.
 * @readonly
 * @enum {string}
 */
export enum AppViewExtensionTypes {
    QUICKSTART = "QUICKSTART"
}

/**
 * Interface for the extended feature configs.
 */
export interface ExtendedFeatureConfigInterface extends FeatureConfigInterface {
    /**
     * Branding feature.
     */
    branding?: FeatureAccessConfigInterface;
}
