
declare namespace App {
  interface menuOption {
    path: string,
  name: string,
  label: string,
  icon: string,
  component?: string,
  children?: menuOption[]
  }
}