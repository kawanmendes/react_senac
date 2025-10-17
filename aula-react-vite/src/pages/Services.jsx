import './Services.css';

const Services = () => {
  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <p>Discover what we can do for you.</p>
      <div className="content">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Criação de sites e aplicativos web modernos e responsivos.</p>
        </div>
        <div className="service-item">
          <h3>Mobile Apps</h3>
          <p>Criação de aplicativos móveis intuitivos para iOS e Android.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>Criação de interfaces bonitas e fáceis de usar.</p>
        </div>
        <div className="service-item">
          <h3>Consulting</h3>
          <p>Consultoria especializada e orientação estratégica.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
