import React from "react";

function indexpage() {
    return (

        <div class="container">

            



            <div class="whitebox">
                <h2>About Me</h2>
                <hr></hr>

                <div id="picturewrap">
                    <img id="picture" src="images/me.JPG" alt="Nick" />
                </div>
                <p class="col-xs-12 col-sm-12">
                    Hi! First off I'd like to thank you for visiting my page. A little about myself, I was born in
                    Colorado which makes me... that's right, a life long
                    Broncos fan. I grew up an army brat and have
                    lived in many states as well as overseas for five years. I've called Kansas my home since 1999
                    when we
                    moved here from Germany. I've since started a family and have four children.
            </p>
                <p>
                    Some of my favorite hobbies are traveling, watching or playing any kind of competitive sport,
                    gaming, and listening to music. Some goals of mine are to continue to improve my fluency in
                    Spanish, pick up playing the piano again and to become an amazing developer!
            </p>
            
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
        </div>
    
    )
}

export default indexpage;