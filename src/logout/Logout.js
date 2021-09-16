import React from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import { Container } from 'react-bootstrap'
import { toast } from "react-toastify";

const Logout = () => {
    const history = useHistory();

    const [{ userInfo }, dispatch] = useStateValue();

    const handleYes = () => {
        localStorage.clear("auth");
        dispatch({
            type: "LOGOUT",
            item: null,
        });
        toast.info("Logout performed", {
            position: toast.POSITION.TOP_CENTER,
        });

        history.push("/");


    }
    const handleNo = () => {
        history.goBack();
    }
    return (
        <Container>
            <fieldset>
                <h2> Would you like to logout?</h2>
                <Button onClick={handleYes} variant="contained" color="secondary">Yes</Button>
                <Button onClick={handleNo} variant="contained" color="primary">No</Button>
            </fieldset>

        </Container>
    )
}

export default Logout
