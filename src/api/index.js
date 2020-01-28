const url = 'http://localhost:3000/'

export function getProduct(){
  return this.$http.get(url+'product');
}

export function getSetting(){
  return this.$http.get(url+'setting');
}
