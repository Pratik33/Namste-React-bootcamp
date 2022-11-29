import Header from './Components/header/Header';
import Projects from './Components/Projects/Projects';
import data from './data.json';
import PageHeading from './Components/Pageheading/PageHeading';
import Footer from './Components/Footer/Footer';
export function App() {
  const navItems = data.Navbar;
  const assignmentLinks = data.assignmentLinks;
  return (
    <div>
      <Header navItems={navItems}></Header>
      <div className='container mt-5 mx-auto'>
        <div className='row'>
          <div classname='col-md-12'>
            <PageHeading />
          </div>
        </div>
        <div className='row'>
          <Projects assignments={assignmentLinks} />
        </div>
        <div className='row'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
