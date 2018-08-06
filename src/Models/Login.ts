export class LoginResponse {
  constructor(
    public userId: string,
    public id: string,
    public title: string,
    public body: string
  ) {}
}

export class PostResponse {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public body: string
  ) {}
}


export class Users {
  constructor(
    public email: string,
    public id: Number,
    public name: string,
    public phone: string,
    public username: string,
    public website: string
  ) {}
}

export class Geo {
  constructor(public lat: string, public lng: string) {}
}
export class Address {
  constructor(
    public city: string,
    public geo: Geo,
    public street: string,
    public suite: string,
    public zipcode: string
  ) {}
}

export class Company {
  constructor() {}
}
