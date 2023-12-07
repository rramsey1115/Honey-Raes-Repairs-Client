export default function CreateTicket() {
  return (<form><br/>
    <h3>Submit a Ticket</h3><br/>
    <fieldset>
      <label/><h4>Description of Issue</h4>
      <input type="text"/>
    </fieldset><br/>
    <fieldset>
      <label/>Customer Submitting Issue<br/>
      <input name="customer" type="radio" />Customer 1
    </fieldset><br/>
  </form>)
}
