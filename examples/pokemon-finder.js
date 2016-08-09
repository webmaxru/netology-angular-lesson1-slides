'use strict';

class PokemonFinder {
  construct(location) {
    this.location = location;
  }

  find () {
    console.log('Идет поиск …');
    setTimeout(() => console.log('Готово'), 2000);
  }
}

module.exports = PokemonFinder;
