# shoppub

> Challenge

## Build Setup
## Para iniciar o projeto execute os seguintes comandos

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
### Instruções da utilização do componente

1 - Primeiro rodar o servidor(Simulação) teste onde se encontra no repositório 
https://github.com/HelioHarada/shoppuAPI 

### Requições:
   O componente faz 2 requisições:
   
   Obter configuração do layout
   http://localhost:3000/setting
  
   Obter configurações de produtos
   http://localhost:3000/product 
   
### componentes 
  O projeto é composto por 2 componentes. 
  Componente pai **product-list** 
  Componente filho **product-card**

```
 product-list
      |
      v
 product-card
 ```   

  O componente **product-list**  é responsável por efetuar as requisições e enviar as propriedades pra o componente 
  **product-card** enquanto o mesmo é responsável em mostrar o conteúdo de forma escálavel.
  
   ### Frameworks utilizados
   VueCLI, VueJS, vue-slick, Jquery, Bootstrap
