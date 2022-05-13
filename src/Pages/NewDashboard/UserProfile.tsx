import React from 'react'

export default function UserProfile({
  user = {
    company: 'NIUK',
    email: 'NIUK@kendralabs.com',
    firstname: 'Stearn',
    id: 71,
    lastname: 'NIUK',
  },
  profilePhoto = 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
}) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 600,
            marginRight: 20,
          }}
        >
          <i
            className="bx bx-calendar-alt"
            style={{
              fontSize: 20,
              marginRight: 10,
            }}
          ></i>
          {new Date().toDateString()}
        </div>
        <div
          style={{
            // borderRight: '2px solid #ABABAB',
            width: '20%',
            display: 'flex',
            fontSize: '1.5rem',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginRight: 10,
            color: '#ABABAB',
          }}
        >
          <i className="bx bx-envelope"></i>
          <i className="bx bxs-bell"></i>
        </div>
        {/* <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <strong>{user.firstname}</strong>
          <img
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              margin: '0 30px',
            }}
            src={profilePhoto}
            alt="User"
          />
        </div> */}
        <div></div>
      </div>
    </>
  )
}
