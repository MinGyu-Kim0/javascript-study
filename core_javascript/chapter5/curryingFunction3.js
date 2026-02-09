var getInformation = function (baseUrl) {       // 서버에 요청할 주소의 기본 URL
  return function (path) {                      // path 값        
    return function (id) {                      // id  값
      return fetch(baseUrl + path + "/" + id);  // 실제 서버에 정보를 요청
    };
  };
};
// ES6
var getInformation = (baseUrl) => (path) => (id) => 
    fetch(baseUrl + path + "/" + id);
