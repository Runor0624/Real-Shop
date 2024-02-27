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
  userIp?: string
  title: string
  description: string
  price: string
  images?: string
  createDate: string
}

export interface NoticeAddComponentType {
  userId: number
  title: string
  description: string
}

export interface NoticeViewComponentType {
  id: number
  title: string
  description: string
  createDate: string
  userId: number
}

export interface ProductAddComponentType {
  id: number
  userId: number
  title: string
  description: string
  category: string
  price: string
  images: string
  createDate?: string
}

export interface ProductCardComponentType {
  id: number
  userId: number
  userIp?: string
  title: string
  category: string
  price: string
  images: string
  createDate: string
}
