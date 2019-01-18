describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with a single item', function() {
        expect(bubbleSort([5])).toEqual([5]);
    });
    it('handles an array with multiple items', function() {
        expect(bubbleSort([5, 6, 1, 8, 4, 3, 9, 2])).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
    });
  });
