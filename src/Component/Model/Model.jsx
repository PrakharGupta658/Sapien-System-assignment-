import React, { useState } from "react";
import {
  Modal,
  Input,
  Button,
  Text,
  Textarea,
  Dropdown,
} from "@nextui-org/react";

export default function Model({ addLead }) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("New");
  const [source, setSource] = useState("Source");
  const [formData, setFormData] = useState({
    id: "",
    number: "",
    name: "",
    role: "",
    status: "",
    lastUpdate: "",
    avatar: "",
    email: "",
    notes: "",
    source: "",
    team: "",
  });
  const [nextId, setNextId] = useState(1);
  const [formValidation, setFormValidation] = useState("");
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);

    console.log("closed");
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    console.log("handleStateChange", value);
  };

  const handleSourceChange = (value) => {
    setSource(value);
    console.log("handleSource", value);
  };

  const addLeadHandler = () => {
    if (!name || !email || !number || !notes) {
      setFormValidation("all fields are mandatory");
      setTimeout(() => {
        setFormValidation("");
      }, 2000);
    } else {
      const currentDate = new Date();
      const leadData = {
        id: nextId,
        number,
        name,
        role: currentDate.toISOString().slice(0, 10),
        status: "active",
        lastUpdate: currentDate.toISOString().slice(0, 10),
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email,
        notes,
        source: "Website",
        team: currentDate.toLocaleTimeString(),
      };
      setNextId(nextId + 1); // increment nextId
      setFormData(leadData);
      // console.log("form data", formData);
      addLead(leadData);
      setName("");
      setNumber("");
      setEmail("");
      setNotes("");
      setFormValidation("");
      closeHandler();
    }
  };

  return (
    <div>
      <Button auto color="warning" shadow onPress={handler}>
        Add Lead
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Sapien System
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Dropdown
            onSelect={(value) => handleStatusChange(value)}
            value={status}
          >
            <Dropdown.Button flat>{status}</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="new">Active</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Button
              flat
              onSelect={(value) => handleSourceChange(value)}
              value={source}
            >
              {source}
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="website">Website</Dropdown.Item>
              <Dropdown.Item key="application">Website</Dropdown.Item>
              <Dropdown.Item key="social-media">Website</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Text b size={18}>
            Lead Details
          </Text>
          <hr />
          <Input
            type="text"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="number"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Input
            type="email"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            bordered
            fullWidth
            color="primary"
            labelPlaceholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Modal.Body>
        <Text b size={14} style={{ color: "red" }}>
          {formValidation}
        </Text>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onClick={addLeadHandler}>
            Add Lead
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
