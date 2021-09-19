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

// Plotly.js for charts
import PlotlyCharts from "../charts/PlotlyCharts";


//Global styles
import styles from "../styles/dashboardStyle.js";
import { Container } from "react-bootstrap";
import _ from "lodash";

const useStyles = makeStyles(styles)

const Admin = () => {
    const classes = useStyles();
    const [{ userInfo }] = useStateValue();
    const history = useHistory();
    let totalWithdraws = 0;
    let depositArray = [];
    let withdrawArray = [];
    let transferArray = [];

    let transactions = [];
    if (userInfo?.user?.transactions) {
        transactions = userInfo.user.transactions;
    }

    let totalDeposits = 0;

    const uniqDates = _.uniq(_.map(transactions, "date")).sort();

    uniqDates.forEach((date) => {
        //Deposit calculation
        const deposits = transactions.filter((tran) => {
            return tran.type === "DEPOSIT" && tran.date === date;
        });
        const depositAmounts = deposits.map((item) => item.amount);
        const depositSum = depositAmounts.reduce((init, sum) => init + sum, 0);
        depositArray.push(depositSum);
        //Withdraw calculation
        const withdraws = transactions.filter((tran) => {
            return tran.type === "WITHDRAW" && tran.date === date;
        })
        const withdrawAmount = withdraws.map((item) => item.amount);
        const withdrawSum = withdrawAmount.reduce((init, sum) => init + sum, 0);
        withdrawArray.push(withdrawSum);
        const tranfers = transactions.filter((tran) => {
            return tran.type === "TRANSFER" && tran.date === date;
        });
        //Transfer calculation
        const transferAmount = tranfers.map((item) => item.amount);
        const transferSum = transferAmount.reduce((init, sum) => init + sum, 0);
        transferArray.push(transferSum);


    });
    totalDeposits = depositArray.reduce((init, sum) => init + sum, 0)
    totalWithdraws = withdrawArray.reduce((init, sum) => init + sum, 0)
    const depositData = [
        {
            type: "bar",
            x: uniqDates,
            y: depositArray,
        },
    ];

    const withdrawData = [
        {
            type: "scatter",
            x: uniqDates,
            y: withdrawArray,
        },
    ];

    const transferData = [
        {
            type: "scatter",
            x: uniqDates,
            y: transferArray,
        },
    ];



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
                                    <p className={classes.cardCategory}>Total Balance</p>
                                    <h3 className={classes.cardTitle}>${userInfo.user.totalBalance} </h3>
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
                                    <p className={classes.cardCategory}>Total Deposit</p>
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
                                    <p className={classes.cardCategory}>Total Withdraw</p>
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
                                    <p className={classes.cardCategory}>Total Users</p>
                                    <h3 className={classes.cardTitle}>${userInfo.user.totalUsers} </h3>
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
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card chart>
                                <CardHeader color="success">
                                    <h4>Deposits</h4>
                                </CardHeader>
                                <CardBody>
                                    <PlotlyCharts data={depositData} />
                                </CardBody>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <Card chart>
                                <CardHeader color="warning">
                                    <h4>Withdraws</h4>
                                </CardHeader>
                                <CardBody>
                                    <PlotlyCharts data={withdrawData} />
                                </CardBody>
                            </Card>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={4}>
                            <Card chart>
                                <CardHeader color="info">
                                    <h4>Transfer</h4>
                                </CardHeader>
                                <CardBody>
                                    <PlotlyCharts data={transferData} />
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </Container>

            )}

        </div>
    )
}

export default Admin
