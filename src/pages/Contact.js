import React from "react";

function Contact(props) {
    return (

        <table class="table">
            <tr>
                <th> Name </th>
                <td> Nikddimos Gebregiorgis</td>
            </tr>
            <tr>
                <th> Email </th>
                <td>
                    <a href="mailto:gebrenick07@gamil.com">
                        gebrenick07@gamil.com</a> </td>
            </tr>
            <th> Phone </th>
            <td>
                <a href="tel:+17204001940">(720) 400-1940</a> </td>
             
            <tr>
            <th> Address </th>
            <td> 2445 S. Elkhart Ct Aurora Co 80014 </td>
            </tr>
         </table >

    );

}

export default Contact;