import Header from './Components/header/Header';
import Projects from './Components/Projects/Projects';
export function App() {
  const navItems = [
    { _id: 1, title: 'Home', link: './home' },
    { _id: 2, title: 'About us', link: './aboutus' },
  ];
  const assignmentLinks = [
    {
      _id: 1,
      title: '01-Inception',
      gitHubLink:
        'https://github.com/Pratik33/Namste-React-bootcamp/tree/master/01-Inception',
      liveDemoLink: '#',
    },
    {
      _id: 2,
      title: '02-Igniting the App',
      gitHubLink:
        'https://github.com/Pratik33/Namste-React-bootcamp/tree/master/02-Igniting%20the%20app',
      liveDemoLink: '#',
    },
    {
      _id: 3,
      title: '03-Laying the foundation',
      gitHubLink: '#',
      liveDemoLink: '#',
    },
    {
      _id: 4,
      title: '04-Talk is Cheap, show me the code !',
      gitHubLink: '#',
      liveDemoLink: '#',
    },
  ];
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
