/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
 *
 */

import Axios from "axios";
import Joi, { ValidationResult } from "joi";

type ValidationFunction = (value: string) => boolean;

/**
 * This validates email addresses. Returns true if valid. False if not valid.
 * Doesn't check for the validity of the top level domain.
 * @param value
 */
export const email: ValidationFunction = (value: string): boolean => {
    if (
        Joi.string()
            .email({ tlds: false })
            .validate(value).error
    ) {
        return false;
    }
    return true;
};

/**
 * This validates mobile numbers. Returns true if valid. False if not valid.
 * Checks if the mobile number input has only numbers, '-', and '+'.
 * @param value
 */
export const mobileNumber: ValidationFunction = (value: string): boolean => {
    if (
        Joi.string()
            .pattern(/^[\d+].[\d-\s+]+[\d]$/)
            .validate(value).error
    ) {
        return false;
    }
    return true;
};

/**
 * This validates URLs. Returns true if valid. False if not valid.
 * Check is the satisfies RFC 3986 specifications
 * @param value
 */
export const url: ValidationFunction = (value: string): boolean => {
    if (
        Joi.string()
            .uri()
            .validate(value).error
    ) {
        return false;
    }
    return true;
};

/**
 * Checks if the image url is valid
 * @param value Url
 */
export const imageUrl = async (value: string): Promise<boolean> => {
    if (
        Joi.string()
            .uri()
            .validate(value).error
    ) {
        return Promise.resolve(false);
    } else {
        try {
            const response = await Axios.get(value);
            return Promise.resolve(response.headers["content-type"].includes("image"));
        } catch (error) {
            return Promise.resolve(false);
        }
    }
};

/**
 * This validates identifiers. Returns true if valid. False if not valid.
 * @param value
 */
export const identifier: ValidationFunction = (value: string): boolean => {
    if (
        Joi.string()
            .alphanum()
            .min(3)
            .validate(value).error
    ) {
        return false;
    }
    return true;
};

/**
 * This validates resource names. Returns true if valid. False if not valid.
 * @param value
 */
export const resourceName: ValidationFunction = (value: string): boolean => {
    if (
        Joi.string()
            .min(3)
            .validate(value).error
    ) {
        return false;
    }
    return true;
};

/**
 * Checks if the passed in value is an integer.
 *
 * @example
 * // returns false
 * FormValidation.isInteger(5.443);
 * @example
 * // returns true
 * FormValidation.isInteger(5);
 *
 * @see {@link https://joi.dev/api/?v=17.4.1#numberinteger}
 *
 * @param {number} value - Value to check.
 *
 * @return {boolean}
 */
export const isInteger = (value: number): boolean => {

    const result: ValidationResult = Joi.number()
        .integer()
        .validate(value);
    
    return !result.error;
};
