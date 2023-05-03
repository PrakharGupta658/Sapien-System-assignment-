import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
  Modal,
  useModal,
  Button,
} from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { DeleteIcon } from "./DeleteIcon";
import { Input } from "@nextui-org/react";
import Model from "../Model/Model";
import { useState } from "react";

function SearchBar({ handleSearch }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Input
          labelPlaceholder="Search Lead"
          NormalSizes="xl"
          NormalWeights="bold"
          style={{ width: "550px" }}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    </>
  );
}

export default function TableComponent() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const columns = [
    { name: "LEAD", uid: "role" },
    { name: "NAME", uid: "name" },
    { name: "NUMBER", uid: "number" },
    { name: "EMAIL", uid: "email" },
    { name: "SOURCE", uid: "source" },
    { name: "LAST UPDATE", uid: "lastUpdate" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const addLead = (leadData) => {
    setUsers([...users, leadData]);
    console.log("users array", users);
  };

  const deleteRow = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "number":
        return <Text>{user.number}</Text>;

      case "name":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {user.email}
          </User>
        );

      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.team}
              </Text>
            </Row>
          </Col>
        );

      case "source":
        return <Text>{user.source}</Text>;

      case "email":
        return <Text>{user.email}</Text>;

      case "lastUpdate":
        return <Text>{new Date().toLocaleDateString()}</Text>;

      case "status":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <UserDetail userData={user} />
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => deleteRow(user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );

      default:
        return cellValue;
    }
  };

  const handleSearch = (searchTerm) => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div>
        <h1>Clients</h1>
      </div>
      <div className="top-bar">
        <SearchBar handleSearch={handleSearch} />
        <div className="model-container">
          <Model addLead={addLead} />
        </div>
      </div>

      <Table
        aria-label="Example table with custom cells"
        className="table"
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={searchResults.length > 0 ? searchResults : users}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <style jsx>{`
        .top-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        .model-container {
          margin-top: 10px;
          margin-left: auto;
          margin-right: 0;
        }

        .table {
          height: auto;
          min-width: 100%;
        }

        @media only screen and (max-width: 768px) {
          .top-bar {
            flex-direction: column;
          }

          .model-container {
            margin-top: 20px;
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </>
  );
}

function UserDetail(props) {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <IconButton onClick={() => setVisible(true)}>
        <EyeIcon size={20} fill="#979797" />
      </IconButton>

      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={25}>
            Client Details
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            {props.userData && (
              <div>
                <h5>Name: {props.userData.name}</h5>
                <h5>Email: {props.userData.email}</h5>
                <h5>Phone: {props.userData.number}</h5>
                <hr />

                <div>
                  <h3>Message: {props.userData.notes}</h3>
                </div>
              </div>
            )}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
