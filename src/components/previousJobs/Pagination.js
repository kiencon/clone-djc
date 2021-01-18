import { Link } from "react-router-dom";

const Pagination = () => (
    <div className="pagination">
        <Link to='/' className="btn">Previous</Link>
        <Link to='/' className="btn">Next</Link>
    </div>
)

export default Pagination;
