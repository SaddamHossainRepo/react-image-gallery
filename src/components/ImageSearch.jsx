/* eslint-disable react/prop-types */
import { useState } from "react";

const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState('');

    const onSearch = (event) => {
        event.preventDefault();
        // const searchValue = e.target.value;

        searchText(text)
    }
    return (
        <div className="my-5 mx-auto flex justify-center items-center">
            {/* <form onSubmit={onSearch}>
                <input className="input input-bordered" onChange={ e => setText(value)} type="text" />
                <button className="btn btn-square">search</button>

            </form> */}
            <form onSubmit={onSearch} className="form-control">
                <div className="input-group">
                    <input onChange={e => setText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button type="submit" className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>

                    </button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;