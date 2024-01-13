import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Feel free to reach us for any assistance in case of busy schedule.</p>
        <p>Looking forward to work with you and achieve.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ngingikelvin802@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ngingikelvin802@gmail.com">ngingikelvin802@gmail.com</a>
        </div>
        <div>
        <a href="tel:+15125881479"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+15125881479">(+1) 5125881479</a>
        </div>  
      </div>
      {/*<Form></Form>*/}
    </Container>
  )
}