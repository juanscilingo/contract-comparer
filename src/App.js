import { DiffEditor } from "@monaco-editor/react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
  background: #1b1b1b;
`

const Input = styled.input`
  height: 33px;
  padding: 0px 10px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
  background: transparent;
  color: #d4d4d4;
  width: 330px;
  border: 1px solid #d4d4d4;
` 

const InputGroup = styled.div`
  margin-right: 30px;
`

const Toolbar = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 5px 0px;
`

const Button = styled.button`
  height: 35px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  outline: none;
  border-left: 1px solid #d4d4d4;
  padding: 0px 15px;
  cursor: pointer;
  background: #3498db;
  color: white;

  &:hover {
    background: #2980b9;
  }
`

function App() {
  const [addresses, setAddresses] = useState(['', '']);
  const [contracts, setContracts] = useState([null, null]);

  const setAddress = (index, address) => {
    const newAddresses = [...addresses];
    newAddresses[index] = address;
    setAddresses(newAddresses);
  }

  const fetchContract = async index => {
    let response = await axios.get(`https://api.bscscan.com/api?module=contract&action=getsourcecode&address=${addresses[index]}&apikey=${process.env.REACT_APP_BSC_SCAN_API_KEY}`);
    if (response?.data?.result.length) {
      let source;

      source = response?.data?.result[0].SourceCode;

      if (source.startsWith('{')) {
        source = source.slice(1).slice(0, -1);
        source = JSON.parse(source);
        source = Object.entries(source.sources).reduce((acc, [name, contract]) => acc + `\r\n ${name} \r\n` + contract.content, "");
      }

      const newContracts = [...contracts];
      newContracts[index] = source;
      setContracts(newContracts);
    } else {
      alert('The specified contract could not be fetched')
    }
  }

  return  (
    <Content>
      <Toolbar>
        <InputGroup>
          <Input onChange={e => setAddress(0, e.target.value)} value={addresses[0]} placeholder="Enter address" />
          <Button onClick={() => fetchContract(0)}>Fetch</Button>
        </InputGroup>
        <InputGroup>
          <Input onChange={e => setAddress(1, e.target.value)} value={addresses[1]} placeholder="Enter address" />
          <Button onClick={() => fetchContract(1)}>Fetch</Button>
        </InputGroup>
      </Toolbar>
      <DiffEditor
        height="calc(100vh - 50px)"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        original={contracts[0]}
        modified={contracts[1]}
        theme="vs-dark"
        modifiedLanguage="sol"
        originalLanguage="sol"
      />
    </Content>
  );
}

export default App;