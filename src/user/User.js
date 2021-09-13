import React from "react";
import { useStateValue } from "../StateProvider";

//React <Router>
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AttachMoney from "@material-ui/icons/AttachMoney";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";

// Card Components
import CardBody from "../components/Card/CardBody.js";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";

// // Plotly.js for charts
// import PlotlyCharts from "../charts/PlotlyCharts";

//Global styles
import styles from "../styles/dashboardStyle.js";
import { Container } from "react-bootstrap";

const useStyles = makeStyles(styles)

const User = () => {
    const classes = useStyles();
    const [{ userInfo }] = useStateValue();
    const history = useHistory();

    let totalDeposits = 0;
    let totalRecipient = 0;
    let totalWithdraws = 0;
    let depositArray = [];
    let withdrawArray = [];
    let transferArray = [];

    let transactions = [];
    if (userInfo?.user?.transactions) {
        transactions = userInfo.user.transactions;
    }
    return (
        <div>
            {!userInfo && history.push("./login")}
            {userInfo && userInfo.user && (
                <Container>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <CardHeader color="warning" stat icon>
                                    <CardIcon color="success">
                                        <AccountBalance />
                                    </CardIcon>
                                    <p className={classes.cardCategory}>Balance</p>
                                    <h3 className={classes.cardTitle}>${userInfo.accountBalance} </h3>
                                </CardHeader>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <Update />
                                        Just updated
                                    </div>

                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <CardHeader color="success" stat icon>
                                    <CardIcon color="success">
                                        <AttachMoney />
                                    </CardIcon>
                                    <p className={classes.cardCategory}>Deposit</p>
                                    <h3 className={classes.cardTitle}>
                                        ${totalDeposits} </h3>
                                </CardHeader>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <DateRange />
                                        Last 1 week
                                    </div>

                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <CardHeader color="danger" stat icon>
                                    <CardIcon color="danger">
                                        <AccountBalanceWallet />
                                    </CardIcon>
                                    <p className={classes.cardCategory}>Withdraw</p>
                                    <h3 className={classes.cardTitle}>${totalWithdraws} </h3>
                                </CardHeader>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <DateRange />
                                        Last 1 week
                                    </div>

                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Card>
                                <CardHeader color="info" stat icon>
                                    <CardIcon color="info">
                                        <Accessibility />
                                    </CardIcon>
                                    <p className={classes.cardCategory}>Recipient</p>
                                    <h3 className={classes.cardTitle}>${totalRecipient} </h3>
                                </CardHeader>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <DateRange />
                                        Last 1 week
                                    </div>

                                </CardFooter>
                            </Card>
                        </GridItem>

                    </GridContainer>
                </Container>

            )}

        </div>
    )
}

export default User
