
const ToolBar = ({ disabled }) =>{
    return (
        <div className="d-flex gap-2 mb-10">
            <button disabled={disabled} className="btn btn-primary">Block</button>
            <button disabled={disabled} className="btn btn-primary">Unblock</button>
            <button disabled={disabled} className="btn btn-primary">Delete</button>
        </div>
    )
}

export default ToolBar;