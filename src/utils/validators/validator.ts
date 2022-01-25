type validatorType = (value: string) => undefined | string

export const requiredField: validatorType = (value) => {
    if (value) return undefined
    else return 'Field is required'
}

const maxLength = (maxChars: number): validatorType => (value) => {
    if (value.length > maxChars) return `Max chars is ${maxChars}`
    else return undefined
}

export const maxLength10 = maxLength(10)

