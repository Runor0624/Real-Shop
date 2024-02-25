// 아마도 프로젝트에 타입 정보가 들어갈 파일 입니다?

export interface GuestCardType {
  id: number
  comment: string
  userId: string
  createDate: string
}

export interface GuestCardAddType {
  userId: string
  comment: string
}

export interface SignUpType {
  userId: string
  password: string
  audit: string
}

export interface LoginType {
  userId: string
  password: string
}

export interface UserListComponentType {
  id: number
  userId: string
  audit: string
  createDate: string
}

export interface ProductListComponenType {
  id: number
  userId: number
  title: string
  description: string
  price: string
  images?: string
  createDate: string
}
