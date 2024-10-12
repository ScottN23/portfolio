
const Heading = ({ title }) => {
  return (
    <>
      <div className="select-none section-heading">
        <div className="flex items-center justify-center w-full pt-16 xl:pt-20 heading">
          <h2 className="text-5xl font-bold w-fit sm:text-3xl md:text-5xl xl:text-6xl">{title}</h2>
        </div>
      </div>
    </>
  )
};

export default Heading;