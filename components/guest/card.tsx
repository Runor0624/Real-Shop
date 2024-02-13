interface CardTypes {
  id: number
  comment: string
  userId: string
  createDate: string
}

const Card = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_KEY}/guest`, {
    next: { revalidate: 5 },
  })
  const Cards: CardTypes[] = await res.json()
  console.log(Cards)
  return (
    <>
      {Cards.map((item: CardTypes) => (
        <section className='flex flex-row justify-center' key={item.id}>
          <p>
            작성자 : {item.userId}, 작성일 : {item.createDate}
          </p>
          <p>내용 : {item.comment}</p>
        </section>
      ))}
    </>
  )
}
export default Card
