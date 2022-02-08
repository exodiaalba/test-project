import React from 'react';
import Tshirtcard from "./Tshirtcard"
function Tshirtlist({tshirtList}) {
  return <div>
       <div className="Tshirtlist">
              {
                  tshirtList.map((a,s) => <Tshirtcard s={a.id} tshirtt={a}/>)
              }
              </div>
  </div>;
}

export default Tshirtlist;
