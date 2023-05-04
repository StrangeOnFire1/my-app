import React from 'react'
import ScrollReveal from 'scrollreveal';

export default function About() {
    ScrollReveal({
        reset:true,
        duration:2500,
        distance:"50px",
        delay:400
    })
    ScrollReveal().reveal('.accordion-item,.help-des', { origin:'left' });
  return (
    <>
    <div className="accordion" id="accordionExample">
        <h1 className="author-try">hey everyone it's me ayush the author of this site,nice to meet you</h1>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
    </div>
    <div id="help-contact" >
        <div className="help-des">
            <h2>ANY <span> QUERIES ?</span></h2>
            <h1>CONTACT US </h1>
            <p>Need help? , have any questions , wants to give any feedback , NO WORRIES contact us right now</p>
        </div>
        <form action="" >
            <h3>WRITE TO US</h3>
            <input type="text" name="name" id="help-name" placeholder="Enter your name"/>
            <input type="email" name="email" id="help-email" placeholder="Email Address"/>
            <input type="number" name="number" id="help-number" placeholder="Phone Number"/>
            <textarea name="details" id="help-details" cols="25" rows="3" placeholder="Enter Details.."></textarea>
            <input type="button" value="CONTACT US" id="help-button"/>
        </form>
    </div>
    </>
  )
}
