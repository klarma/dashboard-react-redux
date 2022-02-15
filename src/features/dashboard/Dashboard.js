import Container from "../../common/Container";
import Header from "../../common/Header"
import Section from "../../common/Section";
import Users from "./Users";
import ButtonAddNewUser from "./ButtonAddNewUser";

const Dashboard = () => {
    return (
        <Container>
            <Header title="Dashboard" />
            <Section
                title="User list"
                body={<Users />}
                extraHeaderContent={<ButtonAddNewUser />}
            />
        </Container>
    )
};

export default Dashboard;
