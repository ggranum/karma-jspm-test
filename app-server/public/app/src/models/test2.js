// I put this in to test pulling in mithril.

import m from '../../lib/mithril/mithril.min';

class Test2 {
  constructor ( data ) {
    // Create a mithril property
    this.name = m.prop ( data.name );
  }
}

get name () {
  return this.name;
}

export default Test2;