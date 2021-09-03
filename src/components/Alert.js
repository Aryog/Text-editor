import React from 'react'
//Alert component for showing alert
function Alert(props) {
    const Capitalize=(text)=>{
        let str = text.charAt(0).toUpperCase();
        return str + text.substring(1);
    }
    return (
        <div style={{height:'60px'}}>
            {/* If not Null the below operation in performed && for the and operator  */}
        {props.Alert && <div>
            <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
   <strong>{Capitalize(props.Alert.type)}: </strong>{props.Alert.msg}
            </div>
        </div>}
    </div>
    )
}
// Here default export is allowed only once and can be added in funtion or outside the function
export default Alert



