/* eslint-disable */
export default class StringSchema {

    constructor(validators) {
        const defaultValid = [(value) => typeof(value) === 'string'];
        this.validators = [...defaultValid, ...validators];
    }

    isValid(value) {
        return this.validators.every((validator) => validator(value) === true);
    }
}