import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";

import { useHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const UserMenu = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const showDashboard = () => {
        history.push("./user")
        setAnchorEl(null);
    };
    const handleDeposit = () => {
        history.push("./deposit")
        setAnchorEl(null);
    };
    const handleWithdraw = () => {
        history.push("./withdraw")
        setAnchorEl(null);
    };
    const handleTransfer = () => {
        history.push("./transfer")
        setAnchorEl(null);
    };
    const handleRecipient = () => {
        history.push("./recipient")
        setAnchorEl(null);
    };
    const handleLogout = () => {
        history.push("./logout")
        setAnchorEl(null);
    };
    return (
        <div className="d-flex jsutify-content-end">

            <Button
                aria-controls="basic-menu"
                aria-haspopup="true"
                onClick={handleMenu}
            ><Icon color="orange" name="bars" circular size="large"></Icon>
                Menu
            </Button>
            <Button
                aria-controls="simple-menu"
                onClick={handleLogout}
            ><Icon color="orange" name="logout" circular size="large"></Icon>
                Logout
            </Button>

            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                <MenuItem onClick={showDashboard}>Dashboard</MenuItem>
                <MenuItem onClick={handleDeposit}>Deposit</MenuItem>
                <MenuItem onClick={handleWithdraw}>Withdraw</MenuItem>
                <MenuItem onClick={handleTransfer}>Transfer</MenuItem>
                <MenuItem onClick={handleRecipient}>Recipient</MenuItem>
            </Menu>
        </div >
    )
}

export default UserMenu
