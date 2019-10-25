class Vector {
  constructor(_X = 0, _Y = 0, _Z = 0) {
    this.x = _X;
    this.y = _Y;
    this.z = _Z;
    this.getLength();
    this.isZero != this.x || this.y || this.z;
  }

  getLength() {
    this.length = Math.sqrt(Math.floor(this.x * this.x + this.y * this.y));
  }

  addTo(v) {
    if (v.constructor === Number) {
      this.x += v;
      this.y += v;
      this.z += v;
    } else if (v.constructor === Vector) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
    }
    return this;
  }

  add(v) {
    var res = this.copy();
    return res.addTo(v);
  }

  subFrom(v) {
    if (v.constructor === Number) {
      this.x -= v;
      this.y -= v;
      this.z -= v;
    } else if (v.constructor === Vector) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
    }
    //console.log(v);
    return this;
  }

  sub(v) {
    var res = this.copy();
    return res.subFrom(v);
  }

  multWidth(v) {
    if (v.constructor === Number) {
      this.x *= v;
      this.y *= v;
      this.z *= v;
    } else if (v.constructor === Vector) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
    }
    return this;
  }

  mult(v) {
    var res = this.copy();
    return res.multWidth(v);
  }

  toString() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
  }

  DistanceFrom(obj) {
    return Math.sqrt(
      (this.x - obj.x) * (this.x - obj.x) + (this.y - obj.y) * (this.y - obj.y)
    );
  }

  divBy(v) {
    if (v.constructor === Number) {
      this.x /= v;
      this.y /= v;
      this.z /= v;
    } else if (v.constructor === Vector) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
    }
    return this;
  }

  div(v) {
    var res = this.copy();
    return res.divBy(v);
  }

  normalize() {
    if (this.length === 0) return;
    return this.div(this.length);
  }

  copy() {
    return new Vector(this.x, this.y, this.z);
  }

  dot(other) {
    let xPos = this.y * other.z - other.y * this.z;
    let yPos = this.z * other.x - other.z * this.x;
    let zPos = this.x * other.y - other.x * this.y;
    return new Vector(xPos, yPos, zPos);
  }
}
