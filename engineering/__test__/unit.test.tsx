const unit = require('../src/unit');

test('1+1=2',( ) => {
    expect(unit.sum(1,1)).toBe(2)
})