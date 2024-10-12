import linkIcon from '../../assets/icons/link.png'

const Project = ({ title, img, description, stack, git, link }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col mt-12">
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <div className="md:flex md:justify-center md:basis-1/2">
            {link ? (
              <a href={link} target="_blank" rel="noreferrer" className="flex justify-center">
                <img src={img} alt={`${title} Project`} className="transition-shadow duration-300 shadow-md md:w-6/12 hover:shadow-2xl" />
              </a>
            ) : (
              <img src={img} alt={`${title} Project`} className="shadow-md md:w-6/12" />
            )}
          </div>
          <div className="md:basis-1/2">
            <div className="md:w-8/12">
              <div>
                <p className="text-lg font-bold 2xl:text-xl">Featured Project</p>
                <h3 className="text-3xl font-bold 2xl:text-4xl">{title}</h3>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="mb-1 2xl:text-2xl">{stack}</p>
                <div className="flex flex-row items-center justify-center gap-5">
                {git || link ? (
                  <>
                    {git && (
                      <a href={git} target="_blank" rel="noreferrer">
                        <i className="text-2xl devicon-github-original colored 2xl:text-2xl" alt="link to github"></i>
                      </a>
                    )}
                    {link && (
                      <a href={link} target="_blank" rel="noreferrer">
                        <img src={linkIcon} alt="link to website" className="h-6" />
                      </a>
                    )}
                  </>
                ) : null}
                </div>
              </div>
              <p className="2xl:text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project