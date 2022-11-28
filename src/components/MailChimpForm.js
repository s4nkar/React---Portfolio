import MailchimpSubscribe from "react-mailchimp-subscribe"

import React from 'react'
import Newsletter from "./Newsletter";


function MailChimpForm() {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID }`;
  return (
   <div>
    <MailchimpSubscribe
    url={postUrl}
    render={({subscribe, status, message})=>(
       <Newsletter
        status={status}
        message={message}
        onValidated={FormData => subscribe(FormData)}
       />
    )}
    >
        
    </MailchimpSubscribe>

   </div>
  )
}

export default MailChimpForm
