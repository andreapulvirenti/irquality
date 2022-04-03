export type Zone = {
    id: number
    name: string
    latittude: string
    longitude: string
    isoCode: string
    isoCulture: string
    tags: Tag[]
  }
  

  export type Tag = {
      id: number
      name: string
  }