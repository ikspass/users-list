import UnblockButton from "./UI/UnblockButton.jsx";
import DeleteButton from "./UI/DeleteButton";
import { Button } from "react-bootstrap";

const ToolBar = ({ disabled }) =>{
    return (
        <div className="d-flex gap-2 mb-10" style={{marginTop: "10px"}}>
            <Button disabled={disabled} variant="primary">Block</Button>
            <UnblockButton />
            <DeleteButton />
        </div>
    )
}

export default ToolBar;