import PropTypes from 'prop-types';

export default function ListSkills({ title, item1, icon1, item2, icon2, item3, icon3, item4, icon4, item5, icon5 }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 md:gap-5 xl:gap-8 2xl:gap-10">
          <h3 className="text-3xl font-bold underline md:text-6xl">{title}</h3>
          <div className="flex flex-col items-start gap-3 md:text-3xl md:gap-5 xl:gap-8 2xl:gap-10">
            <div className="flex items-center gap-3">
              <i className={`${icon1}`}></i>
              <p className="">{item1}</p>
            </div>
            <div className="flex items-center gap-3">
              <i className={`${icon2}`}></i>
              <p className="">{item2}</p>
            </div>
            <div className="flex items-center gap-3">
              <i className={`${icon3}`}></i>
              <p className="">{item3}</p>
            </div>
            <div className="flex items-center gap-3">
              <i className={`${icon4}`}></i>
              <p className="">{item4}</p>
            </div>
            <div className="flex items-center gap-3">
              <i className={`${icon5}`}></i>
              <p className="">{item5}</p>
            </div>
          </div>
    </div>
  )
}

ListSkills.propTypes = {
  title: PropTypes.string.isRequired,
  item1: PropTypes.string.isRequired,
  icon1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
  icon3: PropTypes.string.isRequired,
  item4: PropTypes.string.isRequired,
  icon4: PropTypes.string.isRequired,
  item5: PropTypes.string.isRequired,
  icon5: PropTypes.string.isRequired,
};