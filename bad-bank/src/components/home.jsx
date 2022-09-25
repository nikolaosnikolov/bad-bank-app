import {Card} from "../context/context.jsx"

function Home() {
    return (
        <Card
            height="30rem"
            width="18rem"
            txtcolor="black"
            header="Bad Bank Application"
            title="Welcome to the bank"
            text="Here you can create your account, deposit, and withdraw money."
            body={(<img src="./images/bank.png" className="img-fluid" alt="Responsive" />)}
        />
    );
}

export default Home