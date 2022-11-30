import Header from './Components/header/Header';
import Projects from './Components/Projects/Projects';
import data from './data.json';
import PageHeading from './Components/Pageheading/PageHeading';
import Footer from './Components/Footer/Footer';
export function App() {
  const navItems = data.Navbar;
  const assignmentLinks = data.assignmentLinks;
  const projectTitle = data.pageTitle[0].project;
  return (
    <div>
      <Header navItems={navItems}></Header>
      <div className='container mt-5 mx-auto'>
        <div className='row'>
          <div classname='col-md-12 m-0 p-0'>
            <PageHeading pageTitle={projectTitle} />
          </div>
        </div>
        <Projects assignments={assignmentLinks} />
      </div>
      <Footer />
    </div>
  );
}
