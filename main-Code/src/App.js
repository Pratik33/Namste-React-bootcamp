import Header from './Components/header/Header';
import Projects from './Components/Projects/Projects';
import data from './data.json';
export function App() {
  const navItems = data.Navbar;
  const assignmentLinks = data.assignmentLinks;
  return (
    <div>
      <Header navItems={navItems}></Header>
      <div className='container'>
        <div className='row'>
          <div classname='col-md-12'>
            <h3>This is the project section</h3>
            <h5>
              I will showcase all the projects, I will be doing with Akshay and
              React Bootcamp team.
            </h5>
            <hr />
          </div>
        </div>
        <div className='row'>
          <Projects assignments={assignmentLinks} />
        </div>
      </div>
    </div>
  );
}
