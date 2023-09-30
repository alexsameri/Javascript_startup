export default class Building {
  contructor(sqft) {
    if (this.evacuationWarningMessage !== Building.prototype.evacuationWarningMessage) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }
}
