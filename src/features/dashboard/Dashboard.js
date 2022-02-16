import Container from "../../common/Container";
import Header from "../../common/Header"
import Section from "../../common/Section";
import Users from "./Users";
import Button from "./Button";

const Dashboard = () => {
    return (
        <Container>
            <Header title="Dashboard" />
            <Section
                title="User list"
                body={<Users />}
                extraHeaderContent={<Button title="Add new"/>}
            />
        </Container>
    )
};

export default Dashboard;
