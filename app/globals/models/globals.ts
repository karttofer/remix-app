export interface IFetchDataResult {
  data: any
  loading: boolean
  error: Error | null
}

export interface IContactFormData {
  name: string
  email: string
  message: string
}

export interface IContactError {
  name: string
  email: string
  message: string
}

export interface IPeople {
  mass: string
  birth_year: string
  skin_color: string
  name: string
}

export interface IPeopleList {
  peopleList: IPeople[]
}

export interface IEnvBaseUrl {
  BASE_URL: string
}

export interface IPeopleDetailsInformationLinks {
  films: string[]
  homeworld: string
}

export interface DetailData {
  [key: string]: any[]
}

export interface UseDetailDataProps {
  urls: string[]
  keyName: string
}
