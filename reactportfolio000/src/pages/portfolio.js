import React from "react";

function portfoliopage() {
    return (




        <div class="whitebox">
            <h2>Portfolio</h2>
            <h6>Please click a photo to go to the deployed app site<br></br>
                Or click the app name to access the Github repository</h6>
            <hr></hr>

            <div class="row">


                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div>
                        <a href="https://kcgooner.github.io/Project_1" target="_blank">
                            <img id="project1" src="pictures/project1.png" alt="project1"></img>
                        </a>
                        <div class="textbox">
                            <a href="https://github.com/KCGooner/Project_1" target="_blank">
                                <h3>O-ffender App</h3>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div>
                        <a href="https://algarran.github.io/weather/" target="_blank">
                            <img id="weather" src="pictures/weather.png" alt="weather"></img>
                        </a>
                        <div class="textbox">
                            <a href="https://github.com/algarran/weather" target="_blank">
                                <h3>Weather App</h3>
                            </a>
                        </div>
                    </div>
                </div>


                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div>
                        <a href="https://algarran.github.io/planner/" target="_blank">
                            <img id="planner" src="pictures/planner.png" alt="planner"></img>
                        </a>
                        <div class="textbox">
                            <a href="https://github.com/algarran/planner" target="_blank">
                                <h3>Daily Planner</h3>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">


                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div>
                        <a href="https://algarran.github.io/password/" target="_blank">
                            <img id="password" src="pictures/password.png" alt="password"></img>
                        </a>
                        <div class="textbox">
                            <a href="https://github.com/algarran/password" target="_blank">
                                <h3>Password Generator</h3>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>





        <div id="linkbox" class="row">


            <div class=" contact col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                Email by clicking here:
            <a href="mailto: algarran24@gmail.com">
                    algarran24@gmail.com
            </a>
            </div>
            <div class="contact col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                Phone Number: 913-704-5292
        </div>

            <div id="linkedin" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">

                <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                    data-type="horizontal" data-theme="dark" data-vanity="nicolas-algarra-097041122"><a
                        class="LI-simple-link"
                        href='https://www.linkedin.com/in/nicolas-algarra-097041122?trk=profile-badge'>Nicolas Algarra</a>
                </div>
            </div>

            <div id="github" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">

                <iframe src="https://githubbadge.appspot.com/algarran?s=1" frameBorder="0"></iframe>
            </div>

            <div id="resume" class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">

                <i class="fas fa-file-pdf fa-9x"></i>
            </div>

        </div>
        
    )
}
export default portfoliopage;