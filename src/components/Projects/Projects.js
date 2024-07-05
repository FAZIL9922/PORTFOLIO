import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Walmart from "../../Assets/Projects/walmart.png";
import ticketshow from "../../Assets/Projects/ticketshow.png";
import pizza from "../../Assets/Projects/pizza.png";
import Mall from "../../Assets/Projects/mall_cus.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import Todo from "../../Assets/Projects/To_Do_.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketshow}
              isTeam="Individual Project"
              title="TicketShow"
              description="A movie ticket booking application with role-based login for Admin and user Admins can perform CRUD operations on Shows and Venues. It is built with bootstrap on the client side and FlaskAPI on the server side, along with SQL for the database and Axios are the other library used."
              ghLink="https://github.com/FAZIL9922/Ticket-Show"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Walmart}
              isTeam="Individual Project"
              title="Data Analysis and Visualization of Walmart Sales"
              description="Proficient in data analysis and visualization adeptly handling tasks from preprocessing a large dataset to insightful visualization. Notable achievements include identifying top-performing stores leading departments and peak sales weeks showcasing a talent for deriving actionable insights."
              ghLink="https://github.com/FAZIL9922/Walmart-Data_Analysis_and_Visualization"
              // demoLink="https://legendarymotorsports.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isTeam="Individual Project"
              title="Pizza Sales Dashboard"
              description="Developed a pizza sales dashboard by importing the dataset intoMSSQL, conducting SQL queries to create KPIs.Ensured accuracy by comparing visualizations in Power BI withSQL results.Utilized DAX functions to create measures and Power Query toadd columns, enhancing data analysis capabilities. "
              ghLink="https://github.com/FAZIL9922/Pizza_Sales_Dashboard-PowerBi"
              // demoLink="https://quickquiz-bc991.firebaseapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mall}
              isTeam=""
              title="Mall Customer Segmentation"
              description="Conducted thorough data preprocessing analysis, and visualization.
              Revealed insights : Women spend more than men despite highermale earnings, 
              the average customer age is 38, and those withsalaries between 54k and 78k are frequent visitors, 
              informingtargeted marketing approaches. Implemented K-Means Clustering for customer segmentation,
              optimizing marketing strategies."
              ghLink="https://github.com/FAZIL9922/Customer-segmentation"
              // demoLink=""    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isTeam="Individual Project"
              title="To Do"
              description="Developed a responsive ToDo app supporting CRUD operations, enabling users to easily switch between dark and light modes for enhanced visualization and user experience."
              ghLink="https://github.com/FAZIL9922/Fullstack-To-Do-App_Frontend" 
              demoLink="https://fazil-to-do-app.netlify.app/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isTeam="Individual Project"
              title="Personal Website"
              description="It is my personal website built with React.js, Bootstrap"
              ghLink="https://github.com/LalitKumaran/PORTFOLIO"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
