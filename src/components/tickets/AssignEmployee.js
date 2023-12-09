import { useEffect, useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import { getAllEmployees } from "../../data/employeesData";
import { updateTicket } from "../../data/serviceTicketsData";

export const AssignEmployee = ({ticket, getAndSetTicketById}) => {
    // useStates-------------------------
    const [employees, setEmployees] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    // useEffects-----------------------
    useEffect(()=>{
        getAndSetEmployees();
    },[ticket])

    // generic functions-----------------
    const toggle = () => {
        setDropdownOpen((prevState) => !prevState)
    }

    const getAndSetEmployees = () => { 
        getAllEmployees().then(data => setEmployees(data)) 
    }

    const handleChange = (employeeId) => { 
        const updatedTicketObj = {...ticket}
        updatedTicketObj.EmployeeId = employeeId;
        updateTicket(updatedTicketObj.id, updatedTicketObj).then(getAndSetTicketById(ticket.id))
    }


    return (<>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="primary" caret>Assign</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Employees</DropdownItem>
                {employees.map(e => {
                return <DropdownItem
                    key={e.id}
                    value={e.id}
                    onClick={(e) => handleChange(e.target.value * 1)}
                    >{e.name}
                </DropdownItem>})}
        </DropdownMenu>
    </Dropdown>
    </>)
}