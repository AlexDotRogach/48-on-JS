function getFizzBazz(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    return 'fizz buzz';
  }

  if (i % 3 === 0) {
    return 'fizz';
  }

  if (i % 5 === 0) {
    return 'buzz';
  }

  return i;
} 
 
export default getFizzBazz