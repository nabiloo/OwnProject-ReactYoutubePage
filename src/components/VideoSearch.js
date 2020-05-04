import React from "react"

const VideoSearch = ({ setSearchInState, getSearch, requestToApi }) => {


    const setSearch = (event) => { setSearchInState(event) }

    const handleSubmit = (event) => {
        event.preventDefault();
        requestToApi(getSearch);
    }


    return (
        <div className="VideoSearch" onSubmit={handleSubmit}>

            <div className="logo">
                YouClone
                </div>


            <form >
                <input
                    type="text"
                    placeholder="Search"
                    onChange={setSearch}
                />
            </form>
        </div>
    )
}


export default VideoSearch


