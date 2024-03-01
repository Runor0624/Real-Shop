// 관리자 전용 - 상품 추가
'use client'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { useAuthStore } from '@/app/Util/Zustand/store'
import { ProductAddComponentType } from '@/Types/Types'

export default function ProductAdd() {
  const { id } = useAuthStore((state) => ({
    id: state.id,
  }))
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductAddComponentType>()

  const onSubmit = async (data: ProductAddComponentType) => {
    const formData = new FormData()

    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('price', data.price)
    formData.append('category', data.category)
    formData.append('userId', id.toString())
    formData.append('images', data.images[0])

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_KEY}/post`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log(response)
      alert('등록 성공!')
      router.push('/')
    } catch (err: any) {
      if (err.response.status >= 400 && err.response.status < 500) {
        alert('입력 데이터를 확인해주세요')
        return
      }

      alert('서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col justify-center items-center'
      >
        <input
          placeholder='userId'
          className='hidden'
          {...register('userId', { required: true })}
          value={id}
        />
        <label className='py-2 text-blue-500 font-bold'>
          상품 제목을 입력하시오
        </label>
        <input
          placeholder='상품 제목'
          {...register('title', { required: true })}
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        />
        {errors.title && (
          <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
        )}
        <label className='py-2 text-blue-500 font-bold'>
          상품 설명을 입력하시오
        </label>
        <input
          placeholder='상품 설명'
          {...register('description', { required: true })}
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        />
        {errors.description && (
          <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
        )}
        <label className='py-2 text-blue-500 font-bold'>
          상품 가격을 입력하시오
        </label>

        <input
          placeholder='가격'
          {...register('price', { required: true })}
          className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
        />
        {errors.price && (
          <p className='text-red-600 font-bold py-4'>누락된 값이 있어요!</p>
        )}

        <label className='py-2 text-blue-500 font-bold'>
          상품 카테고리를 선택하시오
        </label>

        <Controller
          name='category'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select
              {...field}
              className='w-full sm:w-1/2 h-10 rounded-md my-2 text-blue-500'
            >
              <option value=''>선택하세요</option>
              <option value='menu1'>Menu1</option>
              <option value='menu2'>Menu2</option>
            </select>
          )}
        />
        <label className='py-2 text-blue-500 font-bold'>
          상품 대표 이미지를 입력하시오
        </label>

        <input
          {...register('images', { required: true })}
          placeholder='이미지'
          type='file'
          className='file-input w-full max-w-xs'
        />
        <button
          type='submit'
          className='my-2 btn btn-md btn-success text-white w-full sm:w-1/2'
        >
          <AiOutlinePlus /> ADD
        </button>
      </form>
    </>
  )
}
