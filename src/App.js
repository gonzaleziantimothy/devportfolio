import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="landing pl-5 pt-5">
        <h1 className = "text-left text-monospace m-0 hi">hi</h1> 
        <h2 className = "text-left text-monospace m-0">i am</h2> 
        <h2 className = "text-left tim">tim<span className="period">.</span></h2> 
      </div>
      <div className="about pl-3 d-flex align-items-center">
        <div className = "aboutme pl-5">
          <h3 className="about-text"> i am a dentist / <span className="brackets">{"<"}</span> <span className="pink">WebDeveloper</span> <span className="brackets">{">"}</span></h3>
          <ul>
            <li>a results driven full stack developer with a keen eye for detail. </li>
            <li>a practicing dentist. check out our clinic at <a href="https://www.teethforkeeps.com">teethforkeeps.com</a></li>
            <li>drives a 1968 volkswagen beetle.</li>
            <li>loves to make things that can make an impact.</li>
            
          </ul>
        </div>
      </div>

      <div className="row app-body m-0">
          <div className="col-12 projects-section p-0">
                <h1 className="skills-projects pr-5">
                    projects
                </h1>
            <div className="row justify-content-around jumbotron rounded-0 bg-light m-0">
                      <div className="col-md-3 mt-2 card">
                        <a href = "https://gonzaleziantimothy.github.io/RECycle-Capstone-Project/" target="_blank">
                          <img className = "card-image-top projects-images" src={require("./images/cp1-image1.png")} alt=""/>
                          <div className="card-body">
                            <h3 className="card-title">RE Cycle</h3>
                            <p className="card-text">A static website for a bicycle restoration shop. Features a mobile responsive design using HTML, CSS, and Bootstrap.</p>
                          </div>
                        </a>  
                      </div>
                      <div className="col-md-3 mt-2 card">
                        <a href = "https://patient-record-web-app.herokuapp.com/" target="_blank">
                          <img className = "card-image-top projects-images" src={require("./images/cp2-image3.png")} alt=""/>
                          <div className="card-body">
                            <h3 className="card-title">Patient Records</h3>
                            <p className="card-text">An asset management web application for records keeping in a dental teaching facility. </p>
                          </div>
                        </a>    
                      </div>
                      <div className="col-md-3 mt-2 card">
                        <a href = "https://lorem-car-restoration.herokuapp.com/" target="_blank">
                          <img className = "card-image-top projects-images" src={require("./images/cp3-image1.png")} alt=""/>
                          <div className="card-body">
                            <h3 className="card-title">Lorem Car Restoration</h3>
                            <p className="card-text">A web application for a car restoration shop that features appointment booking and realtime updating of projects for its clients.</p>
                          </div>
                        </a>    
                      </div>
                   
            </div>
          </div>
       
          <div className="skills-container m-0 pt-5">
              <h1 className="skills pl-5">
                  skills
              </h1>
                <div className="jumbotron rounded-0 bg-light m-0">                  
                  <div className="row justify-content-around m-0">  
                          <div className="col-4 col-md-2 d-flex align-items-center">  
                            <img className="skills-img" src={require("./images/html5.png")} alt="Image"/>      
                          </div>
                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img" src={require("./images/css.png")} alt="Image"/>
                          </div>

                          <div className="col-4 col-md-2 d-flex align-items-center">
                           <img className="skills-img" src={require("./images/js.png")} alt="Image"/>    
                          </div>
               
                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img" src={require("./images/react.png")} alt="Image"/>      
                          </div>
                          
                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img" src={require("./images/bootstrap.png")} alt="Image"/>    
                          </div>
                  
                  </div>
                  <div className="row m-0 pt-5">  
                          <div className="col-4 col-md-2 d-flex align-items-center m-0">
                            <img className="skills-img p-1" src={require("./images/mongodb.png")} alt="Image"/>    
                          </div> 

                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img" src={require("./images/nodejs.png")} alt="Image"/>
                          </div>
                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img p-1" src={require("./images/gradle.png")} alt="Image"/>
                          </div>
                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img" src={require("./images/intellij.png")} alt="Image"/>
                          </div>
                        
                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img" src={require("./images/java.png")} alt="Image"/>
                          </div>
                         
                          <div className="col-4 col-md-2 d-flex align-items-center">
                            <img className="skills-img" src={require("./images/mysql.png")} alt="Image"/>     
                          </div>    
                </div>
              </div> 
          </div>

                <div className="education-container">
                  <h1 className="education pr-5">education</h1>
                  <div className="row justify-content-center m-0 jumbotron rounded-0">

                      <div className="col-md-4 d-flex align-items-center ">
                        <div className="row p-2">
                          <img className="col-8 col-md-4 educ-img" src={require("./images/uplogo.png")} alt="Image"/>
                          <div className="card-body col-8">
                            <h3 className="card-title text-dark">Doctor of Dental Medicine</h3>
                            <p className="card-text">2006 - 2013</p>
                            <p className="card-text">University of the Philippines, College of Dentistry</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 d-flex align-items-center ">
                        <div className="row p-2">
                          <img className="col-8 col-md-4 educ-img" src={require("./images/pcmc.png")} alt="Image"/>
                          <div className="card-body col-8">
                            <h3 className="card-title text-dark">Pediatric Dentistry Extern</h3>
                            <p className="card-text">2015 Chief Extern</p>
                            <p className="card-text">Philippine Childrens Medical Center, Pediatric Dentistry Division</p>
                          </div>
                        </div>
                      </div>   


                    <div className="col-md-4 d-flex align-items-center ">  
                      <div className="row p-2">
                          <img className="col-8 col-md-4 educ-img" src={require("./images/zuitt.png")} alt="Image"/>
                          <div className="card-body col-8">
                            <h3 className="card-title text-dark">Full Stack Web Development Training</h3>
                            <p className="card-text">2019</p>
                            <p className="card-text">Zuitt Coding Bootcamp</p>
                          </div>
                        </div>
                      </div>  
                    </div>
                </div>

        </div>
        <div className="social-links d-flex justify-content-around m-0 p-0">
          <a href="https://www.facebook.com/GonzalezTim" target="_blank"><h6 className="links m-0 p-0">Facebook</h6></a>
          <a href="https://www.linkedin.com/in/timothy-gonzalez/" target="_blank"><h6 className="links m-0 p-0">LinkedIn</h6></a>
          <a href="https://github.com/gonzaleziantimothy" target="_blank"><h6 className="links m-0 p-0">Github</h6></a>
          <a href="https://gitlab.com/gonzaleziantimothy" target="_blank"><h6 className="links m-0 p-0">Gitlab</h6></a>
        </div>
    
        <div id="container-footer" className="container m-0 p-0 d-flex justify-content-around">
          <div className="footer w-100 row">
            <h3 className="footer-start p-0 m-0 col-2 col-md-3"><span className="brackets">{"<"}</span><span className="">footer</span><span className="brackets">{">"}</span></h3>
            <div className="col-8 col-md-6 p-0 m-0 ">
              <h3 className = "footer-mid p-0 m-0">
                <span className="brackets">{"<"}</span><span className="">p </span> 
                <span className="label">id</span>
                <span>=</span>
                <span className="email">"email"</span>
                <span className="brackets">{">"}</span>
                <span className="text-white"> gonzaleziantimothy@gmail.com </span>
                <span className="brackets">{"</"}</span><span className="">p</span><span className="brackets">{">"}</span>
              </h3>
            </div>
            <h3 className="footer-end p-0 m-0 col-2 col-md-3"><span className="brackets">{"</"}</span><span className="">footer</span><span className="brackets">{">"}</span></h3>

          </div>
        </div>
  
    </div>
  );
}

export default App;
