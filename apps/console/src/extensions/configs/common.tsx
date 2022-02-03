/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { I18n } from "@wso2is/i18n";
import { GenericIcon, HeaderExtension, HeaderLinkCategoryInterface, Tooltip } from "@wso2is/react-components";
import React from "react";
import { Menu } from "semantic-ui-react";
import { AppViewExtensionTypes, CommonConfig } from "./models";
import { HeaderSubPanelItemInterface } from "../../features/core/components";
import { AppConstants } from "../../features/core/constants";
import { history } from "../../features/core/helpers";
import { AppViewTypes } from "../../features/core/models";
import { ReactComponent as CommunityIcon } from "../../themes/asgardio/assets/images/icons/community-icon.svg";
import { ReactComponent as DocsIcon } from "../../themes/asgardio/assets/images/icons/docs-icon.svg";
import { ReactComponent as QuickStartIcon } from "../../themes/default/assets/images/icons/shuttle-icon.svg";
import { ComponentPlaceholder } from "../extension";
import { store } from "../../features/core/store";

export const commonConfig: CommonConfig = {
    advancedSearchWithBasicFilters: {
        enableQuerySearch: false
    },
    blockLoopBackCalls: true,
    checkForUIResourceScopes: true,
    enableOrganizationAssociations: true,
    header: {
        getHeaderExtensions: (): HeaderExtension[] => [
            {
                component: (
                    window[ "AppUtils" ].getConfig().extensions?.community && (
                        <Tooltip
                            compact
                            trigger={ (
                                <Menu.Item
                                    className="header-link"
                                    key="dev-community-link"
                                    data-testid="dev-community-link"
                                >
                                    <div
                                        className="header-link-inner"
                                        onClick={ () => window.open(window["AppUtils"].getConfig().extensions.community,
                                            "_blank", "noopener")
                                        }
                                    >
                                        <GenericIcon
                                            transparent
                                            fill="white"
                                            size="x22"
                                            icon={ CommunityIcon }
                                        >
                                        </GenericIcon>
                                    </div>
                                </Menu.Item>
                            ) }
                            content="Community"
                            size="mini"
                        />
                    )
                ),
                floated: "right"
            },
            {
                component: <ComponentPlaceholder section="tenant-dropdown" type="component"/>,
                floated: "left"
            }
        ],
        getHeaderSubPanelExtensions: (): HeaderSubPanelItemInterface[] => [
            {
                component: (currentActiveView?: AppViewTypes, onClickCb?: (newActiveView: AppViewTypes) => void) => (
                    <Menu.Item
                        active={ currentActiveView === AppViewExtensionTypes.QUICKSTART }
                        className="secondary-panel-item quickstart-page-switch"
                        onClick={ () => {
                            history.push(`${ AppConstants.getMainViewBasePath() }/getting-started`);
                            onClickCb && onClickCb(AppViewExtensionTypes.QUICKSTART);
                        } }
                        data-testid="app-header-quick-start-switch"
                    >
                        <GenericIcon
                            defaultIcon
                            transparent
                            size="x22"
                            hoverable={ false }
                            icon={ QuickStartIcon }
                        />
                    </Menu.Item>
                ),
                floated: "left",
                order: 1
            }
        ],
        getUserDropdownLinkExtensions: (): HeaderLinkCategoryInterface[] => [
            {
                category: "HELP",
                categoryLabel: null,
                links: [
                    window[ "AppUtils" ].getConfig().extensions.helpCenterUrl && {
                        "data-testid": "help-center-support-portal-nav-link",
                        name: I18n.instance.t("extensions:common.help.helpCenterLink"),
                        onClick: () => {
                            window.open(window[ "AppUtils" ].getConfig().extensions.helpCenterUrl,
                                "_blank", "noopener");
                        }
                    },
                    window[ "AppUtils" ].getConfig().docSiteUrl && {
                        "data-testid": "dev-doc-site-link",
                        name: I18n.instance.t("extensions:common.help.docSiteLink"),
                        onClick: () => {
                            window.open(window[ "AppUtils" ].getConfig().docSiteUrl,
                                "_blank", "noopener");
                        }
                    }
                ].filter(Boolean)
            }
        ],
        renderAppSwitcherAsDropdown: false
    },
    leftNavigation: {
        isLeftNavigationCategorized: {
            develop: false,
            manage: true
        }
    },
    userEditSection: {
        isGuestUser: true,
        showEmail: false
    },
    hotjarTracking : {
        tagAttributes : () : void => {
            if(window[ "hj" ] != undefined){
                const UUID = store.getState().profile.profileInfo.id;
                const organizationName = store.getState().auth.tenantDomain;
                const WSO2_USER_REGEX: RegExp = /.+ws[o|0]2\.com.*/;
                const uid: string = store.getState().auth.email ?? store.getState().profile.profileInfo.userName;
    
                let isWSO2User = null;
                if (uid.match(WSO2_USER_REGEX)) {
                    isWSO2User = true;
                } else {
                    isWSO2User = false;
                }
    
                window["hj"]('identify', UUID, {
                    UUID: UUID,
                    organizationName : organizationName,
                    isWSO2User: isWSO2User
                });
            }
        }
     }
};
