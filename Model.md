### Application Models

### User

```
User {
  name: String,
  email: String,
  isTechnician: Boolen,
  createdAt: Date,
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
}
```

### Credentails

```
Credentails: {
  fname: String,
  lname: String,
  profilePic: String,
  contact: {
    phone: String,
    Mobile: String
  },
  location: {
    coordinates: [
      { type: Number, default: Point }
    ],
    address: { type: String }
  },
  userId: objectId, ref: User,
  technicianId: mongoose.Schema.objectId, ref: Technician
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
  userId: objectId, ref: User,
}
```
