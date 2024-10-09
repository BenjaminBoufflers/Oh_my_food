import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type MenuType = {
    title: string,
    path: string,
    icon: IconDefinition
  }

export type CategoriesType = {
  category: string,
  query: string
}