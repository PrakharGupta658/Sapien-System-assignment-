import { Grid, Card, Text } from "@nextui-org/react";
import TableComponent from "./Table/App";
import SideBar from "./SideBar";
export default function Dashboard() {
  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$80", $$cardColor: "$colors$primary" }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <Grid.Container gap={0} justify="center">
        <Grid xs={2}>
          <SideBar />
        </Grid>

        <Grid xs={10}>
          <div style={{marginLeft:"30px" , width:"95%"}}>
            <TableComponent />
          </div>
        </Grid>
      </Grid.Container>
    </>
  );
}
