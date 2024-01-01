
const Heading = ({ title }) => {
  return (
    <>
      <div className="select-none section-heading">
        <div className="flex items-center justify-center pt-16 heading">
          <h2 className="text-5xl w-fit sm:text-3xl">{title}</h2>
        </div>
      </div>
    </>
  )
};

export default Heading;