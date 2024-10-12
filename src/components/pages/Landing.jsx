import profile from '../../assets/images/profile.webp'

const Landing = () => {

  return (
    <section id="landing" className="grid items-center justify-center w-full h-screen grid-cols-1 grid-rows-1 select-none landing place-items-center" aria-label="landing">
      <img src={profile} alt="profile image" className="object-cover w-10/12 col-start-1 row-start-1 blur-sm sm:h-3/5 sm:w-3/5" />
      <div className="z-30 flex flex-col items-center justify-center col-start-1 row-start-1 gap-10 text-4xl font-bold md:h-4/5 md:justify-between">
        <h1 className="md:text-6xl 2xl:text-9xl">
          HEY, I AM SCOTT
        </h1>
        <h1 className="md:text-6xl 2xl:text-9xl outlined-text">
          TÔI LÀ SCOTT
        </h1>
        <h1 className="md:text-6xl 2xl:text-9xl">
          我 是 SCOTT
        </h1>
        <h1 className="md:text-6xl 2xl:text-9xl outlined-text">
          저는 SCOTT 입니다
        </h1>
      </div>
    </section>
  )
}

export default Landing