import CSS from "csstype";

/** Creates a page system for ease of browsing and faster load times
 * Changing pages will set game list to rerender with current page game selection by changing how the app queries the db.
 * @param pages
 * @param setPage
 * @param page
 * @constructor
 * @author Janne Kaukua
 */
// @ts-ignore
const Pagination = ({pages, setPage, page}) =>{
    const previous = () =>{
        if(page>1) setPage(page-1)
    }
    const next = () =>{
        if(page<pages) setPage(page+1)
    }
    const first = () =>{
        setPage(1)
    }
    const last = () =>{
        setPage(pages)
    }
    return (
        <nav aria-label="Page navigation example" className={"d-flex"}>
            <ul className="pagination" style={{margin:"auto"}}>
                <li className="page-item"><a className="page-link" href="#" aria-label="Previous" style={bttStyle} onClick={first}><span aria-hidden="true">&laquo;</span></a></li>

                {pages >= 2 && <li className="page-item"><a className="page-link" href="#" style={bttStyle} onClick={previous}>&lsaquo;</a></li>}

                <li className="page-item"><a className="page-link" href="#" aria-disabled={"true"} style={bttStyle}>{page}</a></li>

                {pages >= 2 && <li className="page-item"><a className="page-link" href="#" style={bttStyle} onClick={next}>&rsaquo;</a></li>}

                <li className="page-item"><a className="page-link" href="#" aria-label="Next" style={bttStyle} onClick={last}><span aria-hidden="true">&raquo;</span></a></li>
            </ul>
        </nav>
    )
}

const bttStyle: CSS.Properties = {
    margin:"0",
    color:"#FF3A52"
}

export default Pagination