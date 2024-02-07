// Header

export default function Nav() {
  return (
    <>
      <div className='navbar border-b-2 border-slate-300'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>Logo-Temp</a>
        </div>
        <div className='flex-none gap-2'>
          <div className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost'>
              <div className='w-10'>
                <p>Menu</p>
              </div>
            </div>
            <ul
              tabIndex={0}
              className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between'>1</a>
              </li>
              <li>
                <a>2</a>
              </li>
              <li>
                <a>3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
