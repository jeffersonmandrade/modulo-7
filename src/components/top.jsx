/* eslint-disable react/prop-types */

function Top({showList, register }){
  return(
    <div>
      <button onClick={() =>
        register(!showList)
      }>
      <span>
      {showList? "Register":"List Cars"}
      </span>
      </button>
    </div>
  )
}

export default Top