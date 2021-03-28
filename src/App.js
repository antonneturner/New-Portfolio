import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <>
    <header id="masthead" class="site-header" data-anchor-target=".hero"
        data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);"
        data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);">
        <nav id="primary-navigation" class="site-navigation">
            <div class="container">
                <div class="navbar-header page-scroll">

                    <button type="button" class="navbar-toggle collapsed" data-target="#portfolio-perfect-collapse"
                        aria-expanded="false">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a href="#hero" class="site-logo">

                        <h2>Anton Turner</h2>


                    </a>

                </div>

                <div class="main-menu" id="portfolio-perfect-collapse">

                    <ul class="nav navbar-nav navbar-right">

                        <li class="page-scroll"><a href="#hero">Home</a></li>
                        <li class="page-scroll"><a href="#about">About</a></li>
                        <li class="page-scroll"><a href="#service">Skills</a></li>
                        <li class="page-scroll"><a href="#portfolio">Portfolio</a></li>
                        <li class="page-scroll"><a href="#contact">Contact</a></li>

                    </ul>

                </div>

            </div>
        </nav>
    </header>

    <div id="hero" class="hero">
        <div class="container">
            <div class="row">

                <div class="col-md-6">

                    <div class="page-scroll">
                        <p class="job-title">Full Stack Web Developer</p>
                        <a href="#contact" class="btn btn-fill "> Contact me</a>
                        <div class="clearfix visible-xxs"></div>
                        <a href="#portfolio" class="btn btn-border">Explore more</a>
                    </div>
                </div>

                <div class="col-md-6 text-right">
                    <img src="./my-picture-3-removebg-preview.png" alt="anton turner" id="portfolio-pic"/>
                </div>

            </div>
        </div>
    </div>

    <main id="main" class="site-main">

        <section id="about" class="site-section section-about text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <h2>About</h2>
                        <img src="assets/img/lines.svg" class="img-lines" alt="lines"/>
                        <p>Hello! I'm Anton, a full stack web developer who is interested in technology and innovation.
                            I am a very talented and effiencent indivdual who prides myself on always learning and
                            improving.</p>
                        <a href="./assets/img/Web-dev.pdf" class="btn btn-fill" target="_blank" download>Download my
                            resume</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="site-section section-skills">
            <div class="container">
                <div class="text-center">
                    <h3>My Skills</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines"/>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Html/css/Jquery</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="100"></div>
                              
                            </div>
                        </div>
                        <div class="skill">
                            <h4>
                                <Node class="js">Mongo_db/Mongoose</Node>
                            </h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="75"></div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>Javascript</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="82"></div>
                              
                            </div>
                        </div>
                        <div class="skill">
                            <h4>React/React.js</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="66"></div>
                              
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="skill">
                            <h4>MySQL</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="97"></div>
                              
                            </div>
                        </div>
                        <div class="skill">
                            <h4>
                                <Node class="js">Node/ Node.Js</Node>
                            </h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" data-transitiongoal="45"></div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="service" class="site-section section-services overlay text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>Skills</h3>
                        <img src="assets/img/lines.svg" class="img-lines" alt="lines">
                    </div>
                    <div class="col-sm-4">
                        <div class="service">
                            <img src="assets/img/front-end.svg" alt="Front End Developer"/>
                            <h4>Front-end</h4>
                            <p>As a javascript developer, I have experience in HTML5 and CSS3 technologies working with
                                JQuery,Javascript and MVC frameworks such as React</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="service">
                            <img src="assets/img/back-end.svg" alt="Back End Developer"/>
                            <h4>Back-end</h4>
                            <p>Utilising frameworks such as MongoDB, MySQL, Mongoose, Handlebars, Node, and Node.js
                            </p>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
            </div>
            </div>
        </section>

        <section id="portfolio" class="site-section section-portfolio">
            <div class="container">
                <div class="text-center">
                    <h3>My Projects</h3>
                    <img src="assets/img/lines.svg" class="img-lines" alt="lines"/>
                </div>

      
                <div class="row">
                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/fitness.png" class="img-res" alt="screenshot of project"/>
                            <div class="portfolio-item-info">
                                <h4>Fitness Tracker</h4>

                                <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span
                                        class="glyphicon glyphicon-eye-open"></span></a>

                                <a target="_blank" href="https://github.com/antonneturner/Fitness-Tracker"><span
                                        class="glyphicon glyphicon-link"></span></a>
                            </div>
                        </div>
                    </div>

                

                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/employee.png" class="img-res" alt="Screenshot of project"/>
                            <div class="portfolio-item-info">
                                <h4>Employee Management App</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span
                                        class="glyphicon glyphicon-eye-open"></span></a>

                                <a target="_blank"
                                    href="https://github.com/antonneturner/Employee-management-system"><span
                                        class="glyphicon glyphicon-link"></span></a>
                            </div>
                        </div>
                    </div>

              

                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/Note-Taker.png" class="img-res" alt="Note-Taker"/>
                            <div class="portfolio-item-info">
                                <h4>Note Taker</h4>

                                <a href="#" data-toggle="modal" data-target="#portfolioItem3"><span
                                        class="glyphicon glyphicon-eye-open"></span></a>

                                <a target="_blank" href="https://github.com/antonneturner/Note-Taker"><span
                                        class="glyphicon glyphicon-link"></span></a>
                            </div>
                        </div>
                    </div>



            

                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/Recipe-Hub.png" class="img-res" alt="picture of Recipe-Hub"/>
                            <div class="portfolio-item-info">

                                <h4>The Recipe Hub</h4>
                                <a href="#" data-toggle="modal" data-target="#portfolioItem4"><span
                                        class="glyphicon glyphicon-eye-open"></span></a>

                                <a target="_blank" href="https://the-recipe-hub.herokuapp.com/recipes"><span
                                        class="glyphicon glyphicon-link"></span></a>
                            </div>
                        </div>
                    </div>

                    

                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/weather-dashboard.png" class="img-res" alt="weather dashbpard"/>
                            <div class="portfolio-item-info">

                                <h4>Weather Forecaster</h4>

                                <a href="#" data-toggle="modal" data-target="#portfolioItem5"><span
                                        class="glyphicon glyphicon-eye-open"></span></a>

                                <a target="_blank" href="https://github.com/antonneturner/Weather-dashboard"><span
                                        class="glyphicon glyphicon-link"></span></a>

                            </div>
                        </div>
                    </div>

              

                    <div class="col-md-4 col-xs-6">
                        <div class="portfolio-item">
                            <img src="assets/img/burger-6.jpg" class="img-res" alt="burger"/>
                            <div class="portfolio-item-info">

                                <h4>Eat a Burger</h4>

                                <a href="#" data-toggle="modal" data-target="#portfolioItem6"><span
                                        class="glyphicon glyphicon-eye-open"></span></a>

                                <a target="_blank" href="https://github.com/antonneturner/Eat-a-Burger"><span
                                        class="glyphicon glyphicon-link"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="site-section section-counters text-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        <p class="counter start" data-to="10" data-speed="2000">0</p>
                        <h4>Years Experience</h4>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <p class="counter start" data-to="120" data-speed="2000">0</p>
                        <h4>Projects Delivered</h4>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <p id="infinity" class="counter" data-from="0" data-to="1" data-speed="1000">0</p>
                        <h4>Seconds on this site!<br>What are you waiting for?</h4>
                    </div>
                </div>
            </div>
        </section>
        


        <section id="contact" class="site-section section-form text-center">
            <div class="container">

                <h3>Contact</h3>
                <img src="assets/img/lines.svg" class="img-lines" alt="lines">
               


 
              

        </section>

    </main>

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-xs-12">
                    <a class="icon facebook-bg" href="#"><i class="icon-facebook"></i></a>
                    <a class="icon twitter-bg" href="#"><i class="icon-twitter"></i></a>
                    <a class="icon gplus-bg" href="#"><i class="icon-linkedin"></i></a>
                    <a class="icon linkedin-bg" href="#"><i class="icon-gplus"></i></a>
                </div>
                <div class="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
                    <p class="copyright">2017. All Rights Reserved</p>
                </div>
                <div class="col-sm-4 col-xs-3">
                    <div class="text-right page-scroll">
                        <a class="icon icon-up-bg" href="#hero"><i class="icon-up"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    
    <div id="portfolioItem1" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                    <img class="img-res" src="./assets/img/fitness.png" alt="Fitness Tracker"/>
                </div>

              

                <div class="modal-body">

                    <h4 class="modal-title">Fitness Tracker</h4>

                    <p> Allows a user to be able to view create and track daily workouts. The will be able to log
                        multiple exercises in a workout on a given day. They should also be able to track the name,
                        type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise,
                        they
                        should be able to track my distance traveled.
                        Technologies used are HTML
                        - CSS
                        - Bootstrap
                        - Javascript
                        - Jquery
                        -Mongoose
                        -Mongodb and
                        Node

                    </p>
                </div>

                <div class="modal-footer">
                    <a target="_blank" href="https://fitness-tracker-anton.herokuapp.com/?id=6052b3c781f73200152de955"
                        class="btn btn-fill"> Visit page</a>
                </div>
            </div>
        </div>
    </div>

    

    <div id="portfolioItem2" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                   
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eyMuEysPfzQ" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>


                <div class="modal-body">
                    <h4 class="modal-title">Employee Management System</h4>

                    <p> A Content Management System that is used as a solution for managing a company's employees
                        using
                        Node, Inquirer, JavaScript and MySQL. This project shows different lists of saved employees
                        and
                        their
                        departments, salaries and various roles.
                        Using the command line interface the user is able to dynamically generate data for employee
                        management by using the MySQL database.


                    </p>

                </div>
                <div class="modal-footer">

                    <a target="_blank" href="https://github.com/antonneturner/Employee-management-system"
                        class="btn btn-fill">Visit
                        Page</a>
                </div>
            </div>
        </div>
    </div>

    <div id="portfolioItem3" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                    <img class="img-res" src="./assets/img/Note-Taker.png" alt="Note-Taker"/>


                </div>
                <div class="modal-body">

                    <h4 class="modal-title">Note Taker</h4>
                    <p> An application that can be used to write, save, and delete notes dynamically. This
                        application
                        will use an express backend and save and retrieve note data from a JSON file.

                        The technologies used for this application are Express,
                        Javascript,
                        Node,
                        Heroku,
                        and JSON.

                    </p>
                </div>

                <div class="modal-footer">

                    <a target="_blank" href="https://note-takeranton.herokuapp.com/" class="btn btn-fill">Visit
                        Page</a>

                </div>
            </div>
        </div>
    </div>


    

    <div id="portfolioItem4" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                    <img class="img-res" src="./assets/./img/Recipe-Hub.png" alt="Recipe Hub"/>
                </div>

                <div class="modal-body">
                    <h4 class="modal-title">Recipe Hub</h4>

                    <p>An app where users can save and keep recipes and view them. Add any recipes from online
                        from, family recipes, or ones created yourself!
                        Shows list of saved recipes.

                        Add recipes just the recipe name,catagory, intructions and measurements.

                        Add grocery lists

                        unit converter to convert measurements

                        and search for saved recipes. The technologies used for this application were Javascript,
                        Express, HTML, CSS
                        Sequelize,
                        Handlebars,
                        MySQL, Jquery, Api's and Heroku. </p>
                </div>

                <div class="modal-footer">
                    <a target="_blank" href="https://the-recipe-hub.herokuapp.com/recipes" class="btn btn-fill">Visit
                        Page</a>

                </div>

            </div>
        </div>
    </div>

  

    <div id="portfolioItem5" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                    <img class="img-res" src="assets/img/weather-dashboard.png" alt="weather-dashboard"/>
                </div>
                <div class="modal-body">

                    <h4 class="modal-title">Weather Forecaster</h4>

                    <p>The name of this project is Weather Dashboard. It allows individuals to dynamcially check the
                        weather in the cities they desire. It also displays a weather icon as well as a five day
                        future
                        prediction forecast.The technologies used for this application are Jquery
                        Javascript
                        CSS
                        Api's
                        Html
                        Bootstrap
                        and Moment.js</p>
                </div>

                <div class="modal-footer">

                    <a target="_blank" href="https://antonneturner.github.io/Weather-dashboard/" class="btn 
                    btn-fill">Visit Page</a>

                </div>
            </div>
        </div>
    </div>

    <div id="portfolioItem6" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
                    <img class="img-res" src="assets/img/burger-6.jpg" alt="Burger"/>
                </div>
                <div class="modal-body">

                    <h4 class="modal-title">Eat a Burger</h4>

                    <p> Users will be able to dynamically add or eat the burger or burgers of their choice.
                        Shows list of selectable burgers that the user can add, delete or eat from the homepage.
                        technologies used in this application are
                        Express
                        Javascript
                        Node
                        MySQL
                        Handlebars, HTML, CSS, Jquery
                        and ORM.
                    </p>
                </div>
                <div class="modal-footer">

                    <a target="_blank" href="https://eat-a-burger-anton.herokuapp.com/" class="btn btn-fill">Visit
                        Page</a>
                </div>
            </div>
        </div>
    </div></div>
     </>
  );
}

export default App;
