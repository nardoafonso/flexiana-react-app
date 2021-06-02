import React from "react";

function Pagination({pager, setPage}){
    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item first ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => this.setPage(1)} >First</button>
                </li>
                <li className={`page-item previous ${pager.currentPage === 1 ? 'disabled' : ''}`} >
                    <button className="page-link" onClick={() => this.setPage(pager.currentPage - 1)}>Previous</button>
                </li>

                {pager.pages.map((page, index) =>
                    <li key={index} className={`page-item page-number ${pager.currentPage === page ? 'active' : ''}`} >
                        <button className="page-link" onClick={(e) => setPage(e, page)}>{page}</button>
                    </li>
                )}

                <li className={`page-item next ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}>Next</button>
                </li>
                <li className={`page-item last ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} >
                    <button className="page-link" onClick={() => this.setPage(pager.totalPages)} >Last</button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;