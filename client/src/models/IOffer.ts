export interface IOffer {
    name?: string;
    alias?: string;
    organization?: object;
    customerRequirements?: object;
    rate?: object;
}

// Organization interfaces
export interface IOfferOrganization {
    name?: string;
    license?: string;
    logo?: string;
}

// CustomerReqs interfaces
export interface ICustomerRequirements {
    documents?: number,
    age?: number,
    manAgeAtRepayment?: number,
    femaleAgeAtRepayment?: number,
    lastExperience?: number,
    fullExperience?: number,
    salary?: number
}

// Rate interfaces
export interface IRate {
    periods?: Array<any>,
    currency?: string,
    creditAmount?: object,
    initialAmount?: object
}

export interface IPeriods {
    rate: object,
    termUnit: string,
    term: object,
    isFloatingRate: boolean
}

export interface IPeriodsRateTerm {
    from?: number,
    to?: number
}

export interface ICreditAmount {
    from?: string
    to?: string
}

export interface IInitialAmount {
    from?: number
    to?: number
}