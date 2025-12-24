export interface authField {
  email: string, password: string
}

export interface registerField extends authField {
  name: string
}