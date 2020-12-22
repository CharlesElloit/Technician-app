### Application Models

### User

```
User {
  name: String,
  email: String,
  createdAt: Date,
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
}
```

### Credentails

```
Credentails: {
  profilePic: String,
  isTechnician: Boolen,
  contact: {
    phone: String,
    Mobile: String
  },
  location: {
    coordinates: [
      { type: Number }
    ],
    address: { type: String }
  },
  userId: objectId, ref: User
}
```

### Technician

```
Technician: {
  rate: Number,
  rating: Number,
  status: String,
  createdAt: Date,
  occupation: String,
  credentailsId: objectId, ref: Credentails,
}
```
