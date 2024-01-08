import React from 'react'

 function Alert(props) {
    // edher ek function banyege jo success lika hai alert msg mai usks s capiital karne k liye 
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    // props.alert && yeh ek property hai agar usko null milta hai toh
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
</div>
  )
}
export default Alert;