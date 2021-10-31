import React from 'react'
import UsersTable from './usersdata'

export default function Userheader(props) {
   
    return (
        <div>
            <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Followers</th>
            <th scope="col">Followings</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {props.Data.slice(0,5).map((user) =>
            <UsersTable users={user} />
          )}
        </tbody>
      </table>
        </div>
    )
}
