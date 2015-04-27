import Test2 from 'test2';

describe ( 'Test 2', function () {
  it ( 'should modify mithril properties', function () {
    var t2 = new Test2 ({ name: 'Jerry' });
    expect ( t2.getName() ).toBe ( 'Jerry' );
  });
});

