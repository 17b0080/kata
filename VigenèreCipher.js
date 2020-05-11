/**
 * var alphabet = 'abcdefghijklmnopqrstuvwxyz';
 * var key = 'password';
 *
 * // creates a cipher helper with each letter substituted
 * // by the corresponding character in the key
 * var c = new VigenèreCipher(key, alphabet);
 *
 * c.encode('codewars'); // returns 'rovwsoiv'
 * c.decode('laxxhsj');  // returns 'waffles'
 */

export function VigenèreCipher(key, abc) {
  this.generateKeyString = function(str) {
    let _key = "";
    for (let i = 0; i < str.length; i += 1) {
      _key += key[i % key.length]
    }
    return _key;
  }

  this.encode = function (str) {
    let _key = this.generateKeyString(str);
    let _str = "";
    
    for (let i = 0; i < str.length; i += 1) {
      let ch = str[i];
      let k = _key[i];
      if (abc.indexOf(ch) !== -1) {
        const _abc = abc.slice(abc.indexOf(k)) + abc.slice(0, abc.indexOf(k));
        _str += _abc[abc.indexOf(ch)];
      } else {
        _str += str[i];
      }
    }
    return _str;
  };

  this.decode = function (str) {
    let _key = this.generateKeyString(str);
    let _str = "";
    
    for (let i = 0; i < str.length; i += 1) {
      let ch = str[i];
      let k = _key[i];
      if (abc.indexOf(ch) !== -1) {
        const _abc = abc.slice(abc.indexOf(k)) + abc.slice(0, abc.indexOf(k));
        _str += abc[_abc.indexOf(ch)];
      } else {
        _str += str[i];
      }
    }
    return _str;
  };
}