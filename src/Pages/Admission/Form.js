import { GenIcon } from "react-icons";
import "./Gender.css";

export default function Form() {
    
  return (
    <>
      <section
        class="w3l-contact py-5"
        id="contact"
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <div
          class="title-main text-center mx-auto mb-md-5 mb-4"
          style={{ maxWidth: "500px;" }}
        >
          <p class="text-uppercase">Fill the Form</p>
          <h3 class="title-style">Get Admission</h3>
        </div>
        <div class="row contact-block justify-content-center"> 
    <div class="col-md-7 contact-right">
        <form class="signin-form" style={{backgroundColor: "rgba(189, 195, 201, 0.477)", padding:"20px", borderRadius:"10px"}}>
            <div class="input-grids">
                <div class="row">
                    <div class="col-sm-6">
                        <input type="text" name="w3lName" id="w3lName" placeholder="Name of the candidate" class="contact-input" required/>
                    </div>
                    <div class="col-sm-6">
                        <input type="email" name="w3lSender" id="w3lSender" placeholder="Email" class="contact-input" required/>
                    </div>
                    <div class="col-sm-6">
                        <input type="email" name="w3lSender" id="w3lSender" placeholder="Phone no." class="contact-input" required/>
                    </div>
                    <div class="col-sm-6">
                        <input type="email" name="w3lSender" id="w3lSender" placeholder="City" class="contact-input" required/>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" name="w3lSender" id="w3lSender" placeholder="Age" class="contact-input" required/>
                    </div>
                    <div class="col-sm-6">
                        <input type="text" name="w3lSender" id="w3lSender" placeholder="Select Standard" class="contact-input" required/>
                    </div>
                </div>
               
                <div class="col-12" style={{marginRight: "40px;"}}>
                    <div class="radio-group" style={{marginBottom:"30px"}}>
                        <input type="radio" name="gender" value="male" id="male" required=""/>
                        <label for="male" style={{marginRight: "40px;"}}>Male</label>

                        <input type="radio" name="gender" value="female" id="female" required=""/>
                        <label for="female" style={{marginRight: "40px",marginLeft:"40px"}}>Female</label>

                        <input type="radio" name="gender" value="other" id="other" required=""/>
                        <label for="other" style={{marginRight: "40px"}}>Other</label>
                    </div>
                </div>
            </div>
            <div class="form-input">
                <textarea name="w3lMessage" id="w3lMessage" placeholder="Address of candidate" required=""></textarea>
            </div>
            <div class="text-start">
                <button class="btn btn-style btn-style-3">Send Message</button>
            </div>
        </form>
    </div>
</div>

      </section>
    </>
  );
}
