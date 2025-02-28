/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
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

import { IdentifiableComponentInterface } from "@wso2is/core/models";
import { EdgeLabelRenderer, EdgeProps, BaseEdge as _BaseEdge, getSmoothStepPath } from "@xyflow/react";
import React, { FunctionComponent, ReactElement } from "react";

/**
 * Props interface of {@link VisualFlow}
 */
export interface BaseEdgePropsInterface extends EdgeProps, IdentifiableComponentInterface {}

/**
 * A customized version of the BaseEdge component using smooth edges.
 *
 * @param props - Props injected to the component.
 * @returns BaseEdge component.
 */
const BaseEdge: FunctionComponent<BaseEdgePropsInterface> = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    label,
    ...rest
}: BaseEdgePropsInterface): ReactElement => {
    const [ edgePath, labelX, labelY ] = getSmoothStepPath({
        sourcePosition,
        sourceX,
        sourceY,
        targetPosition,
        targetX,
        targetY
    });

    return (
        <>
            <_BaseEdge id={ id } path={ edgePath } { ...rest } />
            { label && (
                <EdgeLabelRenderer>
                    <div
                        style={ {
                            background: "#fff",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            fontSize: "12px",
                            padding: "2px 6px",
                            pointerEvents: "all",
                            position: "absolute",
                            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`
                        } }
                        className="edge-label-renderer__social-connection-edge nodrag nopan"
                    >
                        { label }
                    </div>
                </EdgeLabelRenderer>
            ) }
        </>
    );
};

export default BaseEdge;
