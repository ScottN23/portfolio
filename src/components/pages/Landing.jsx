import profile from '../../assets/images/profile.webp'

const Landing = () => {
  return (
    <section id="landing" className="grid items-center justify-center w-full h-screen grid-cols-1 grid-rows-1 landing place-items-center bg-lightbg" aria-label="landing">
      <img src={profile} alt="profile image" className="w-10/12 col-start-1 row-start-1 blur-sm" />
      <div className="z-30 flex flex-col items-center justify-center col-start-1 row-start-1 gap-10 text-4xl font-bold">
        <p>
          HEY, I AM SCOTT
        </p>
        <p className="outlined-text">
          TÔI LÀ SCOTT
        </p>
        <p>
          我 是 SCOTT
        </p>
        <p className="outlined-text">
          저는 SCOTT 입니다
        </p>
      </div>
    </section>
  )
}

export default Landing