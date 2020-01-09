# Notes

- prevent access to endpoints that should not be public

## User

```
Can:
    - create
    - register

an authenticated account as a `passportHolder`
```

<br />

### Registration:

```
* unique `username` - String

* strong `password` - String

* a `name` - String

* a valid `city` - String

* a valid and unique `email` - String
```

<hr>
<br />
<br />

## Authenticated `passportHolder`:

```
Can:
    - read
    - update
    - delete

`beenThere` restaurants from a `passport` (a list of all restaurants that they have visited)
```

<br />

### "Been There" info:

```
* `restaurantName` - String

* `streetAddress` - String

* `city` - String

* `zipcode` - String

* `phoneNumber` - String

* `websiteURL` - String/URL

* `myRating` (1 thru 5) - Int

* `notes` - String

* `stamped` - Boolean
```
