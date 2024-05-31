import { useRef, useState } from "react"
import '../css/search.css'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const myDiv = useRef();

    const handleSearchTermChange = (event) => {
        console.log(event, 'searchInput')
        setSearchTerm(event.target.value);
    }

    const onBtnSubmit = (e) => {
        e.preventDefault();
        //logic if search term present on click reset input and open documentation
        setSearchTerm('');
    }

    const handleDivClick = (e) => {
        myDiv.current.style.border = ' 3px solid #198eee';
        e.preventDefault();
    }

    return (
        <div tabIndex={0} ref={myDiv} className="searchDiv" >
            <button onClick={onBtnSubmit} className="btn btn-outline-secondary iconSearch">
                <CiSearch />
            </button>
            <input className="inputstyle" type='text'
                onClick={handleDivClick}
                placeholder="Search 10,700+ tutorials"
                onChange={(e) => { handleSearchTermChange(e) }}
                value={searchTerm} />
        </div>
    )
}
export default SearchBar