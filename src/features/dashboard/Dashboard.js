import Container from "../../common/Container";
import Header from "../../common/Header"
import Section from "../../common/Section";
import Users from "./Users";
import Button from "./Button";
import Form from "./Form";

const Dashboard = () => {
    return (
        <Container>
            <Header title="Dashboard" />
            <Section
                title="Users list"
                body={<Users />}
                extraHeaderContent={<Button title="Add new" />}
            />

            <Section
                title="Form"
                body={<Form />}
            />
        </Container>
    )
};

export default Dashboard;
