import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Study Notion"
              description="A comprehensive ed-teach platform leveraging the MERN stack (MongoDB, Express.js, ReactJS, Node.js), facilitating content creation, consumption, and rating through CRUD operations. Highlights include OTP-based authentication, Course management, Payment Integration, Cloud-based media handling, and personalized Student/Teacher Dashboards.."
              ghLink="https://github.com/arpitpandey040/studyNotion"
              demoLink="https://study-notion-orcin.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Freelansters"
              description="A freelancer website built with the MEAN stack (MongoDB, Express, Angular, Node.js) connects freelancers and clients. Freelancers can create profiles, browse jobs, and apply for projects, while clients post jobs, review profiles, and hire talent. The platform handles user authentication, job listings, and secure payments efficiently using a full-stack JavaScript solution."
              ghLink="https://github.com/arpitpandey040/Freelansters"
              demoLink="http://www.gpsmyeye.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sorting Visualizer"
              description="A Sorting Visualizer is a web application that visually demonstrates sorting algorithms like Bubble Sort, Selection Sort, Merge Sort, and Quick Sort. Users can select an algorithm, adjust the input size, and watch as the algorithm steps through and sorts the data in real-time. It's an interactive and educational tool to help users understand how different sorting techniques work, with animations showing the process of comparing, swapping, and dividing data."
              ghLink="https://github.com/arpitpandey040/sortingVisualizer.github.io"
              demoLink="https://arpitpandey040.github.io/sortingVisualizer.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Crafti - an Agency Website"
              description="Crafti is a platform that offers top-quality handmade products. It features a clean, user-friendly design where customers can browse and purchase unique, handcrafted items. With detailed product descriptions and images, Crafti provides an enjoyable shopping experience for handmade goods enthusiasts."
              ghLink="https://github.com/arpitpandey040/Crafti"
              demoLink="https://arpitpandey040.github.io/Crafti/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Arogya"
              description="Arogya is a health platform that predicts diseases like diabetes, heart disease, and Parkinson's using machine learning algorithms. By analyzing user data, it provides early detection insights, helping users take preventive measures and manage their health more effectively."
              ghLink="https://github.com/arpitpandey040/Arogya"
              demoLink="https://app-pred-dise.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="ToDo"
              description="A dynamic and user-friendly ToDo list application developed using HTML, CSS, and JavaScript, providing an intuitive interface for efficiently managing tasks, creating reminders, and enhancing productivity."
              ghLink="https://github.com/arpitpandey040/ToDo--React-App"
              demoLink="https://todo-app--1.vercel.app/"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Stock Prediction"
              description="A dynamic and user-friendly ToDo list application developed using HTML, CSS, and JavaScript, providing an intuitive interface for efficiently managing tasks, creating reminders, and enhancing productivity."
              ghLink="https://github.com/arpitpandey040/Portfolio"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
