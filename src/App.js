import './assets/scss/_index.scss';
import { Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs'
import CJobOfferItem from './components/CJobOfferItem/CJobOfferItem';
import CCompanyItem from './components/CCompanyItem/CCompanyItem';
const jobs = [
  { title: 'Junior Java Developer', time: '2 hours ago', companyName: 'PickSaaS', location: 'Lublin, Polska', desc: 'Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!', salary: '$ up to PLN 550 net / MD B2B' },
  { title: 'Junior Project Manager', time: '3 hours ago', companyName: 'Frontkom', location: 'Lublin, Polska', desc: 'Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!' },
  { title: 'Junior Project Manager', time: '1 day ago', companyName: 'Frontkom', location: 'Lublin, Polska', desc: 'I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work) ', salary: '$ up to PLN 550 net / MD B2B' },
]
const companies = [
  'GrandParade',
  'Seargin',
  'DEX Ventures',
  'NBC',
  'SVT SP Zoo',
  'DG Tech',
  'PickSaaS',
  'BlackRose',
  'FrontKom',
]
function App() {
  return (
    <div className="container-fluid p-0">

      <div className="banner">

        <div className="container pl-0">
          <h1>Juniors make IT work.</h1>
          <p>Hire and invest in highly skilled juniors now.</p>
          <Button variant="primary" size="lg">Post Offer Now</Button>
        </div>

      </div>


      <div className="container content">

        <section>
          <div className='d-flex justify-content-between align-items-center'>
            <h1>Newest Job Offer</h1>
            <a href="">
              View all job offers  <BsArrowRight />
            </a>
          </div>
          <div className="jobs-container">
            {jobs.map(job => {
              return <CJobOfferItem {...job} />
            })}
          </div>
        </section>

        <section>
          <h1>Featured Companies</h1>
          <div className="companies-container">
            {companies.map(company => {
              return <CCompanyItem companyName={company} />
            })}
          </div>
        </section>

      </div>



    </div>
  );
}

export default App;
