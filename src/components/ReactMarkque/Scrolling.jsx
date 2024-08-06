import './marque.css'
import companyImages from './companyimg.json'

function Scrolling() {
  const { companies } = companyImages

  return (
    <div className="scrollingContainer">
      <h2 className="titleText">All Brands That Use Our Service</h2>
      <p className="descriptionText">Here are the brands that trust our services.</p> {/* Add this line for description */}
      <div className="wrapper">
        {companies.map(company => (
          <div key={`left-${company.id}`} className={`itemLeft item${company.id}`}>
            <img 
              src={`/images/${company.imageName}`} 
              alt={`Company ${company.id}`} 
              className="companyLogo" 
            />
          </div>
        ))}
      </div>
      <div className="wrapper">
        {companies.map(company => (
          <div key={`right-${company.id}`} className={`itemRight item${company.id}`}>
            <img 
              src={`/images/${company.imageName}`} 
              alt={`Company ${company.id}`} 
              className="companyLogo" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Scrolling
