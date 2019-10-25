fonte: https://getbootstrap.com/docs/4.3/components/buttons/

# Bootstrap
Boilerplate de CSS e JS que permite estilização e uso de efeitos já implementados via inserção do código fonte bootstrap no projeto. 

Deve-se baixar o ```compiled CSS and JS``` .zip em https://getbootstrap.com/ e incluir ```bootstrapp.css``` no ```<head>``` do
projeto:  

```<link href="./caminho_para_arquivo/bootstrap.min.css " rel="stylesheet"> ```

Também é possível referenciar as fontes via **CDN**, o que diminui o tamanho da src do projeto, mas exige que mesmo a construção 
do website seja feita online. 

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```
 Em seguida, insere-se normalmente o css padrão da página, o que permite **alterar o bootstrap nativo**.
 
 ```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link href="./main.css" rel="stylesheet">
```

Caso seja feita alguma alteração em elemento, é necessário 
o **javascript deve ser inserido antes do body, com referencia também ao jquery e poppers.js**.
```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```
Além disso, **É NECESSÁRIO O USO DE DOCTYPE E HTML E VIEWPORT**. 


# TEMPLATE PADRÃO PARA PROJETOS COM BOOTSTRAP
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <!-- CSS próprio que modifica BootStrap -->
    <link href="./main.css" rel="stylesheet">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
```

Diversos exemplos de projetos com Bootstrap podem ser utilizados como base em : https://getbootstrap.com/docs/4.3/examples/
___________________________________________
### Buttons
Para incluir um botão padrão, basta usar  ```<button type="button" class="btn btn-primary">Primary</button>```. A classe btn
foi criada inicialmente para o uso em tags ```<button>```.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-link">Link</button>
    </body>
</html>
```

teste em: https://www.w3schools.com/code/tryit.asp?filename=G45VD75TO81F
________________________________________________________________________________________
#### ```<a> e <input>``` como buttons
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <a class="btn btn-primary" href="#" role="button">Link</a>
        <button class="btn btn-primary" type="submit">Button</button>
        <input class="btn btn-primary" type="button" value="Input">
        <input class="btn btn-primary" type="submit" value="Submit">
        <input class="btn btn-primary" type="reset" value="Reset">
    </body>
</html>
```

teste em https://www.w3schools.com/code/tryit.asp?filename=G45VF15X9CFM
________________________________________________________________________________________________
#### Modificar tamanho de botões: 
```btn-lg```, ```btn-sm``` ou ```btn-xs``` (large, small e extra-small).

```
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>
``` 

teste aqui: https://www.w3schools.com/code/tryit.asp?filename=G45VJFAXHTV6

_______________________________________________________________________________________
#### Retirar o fundo de botões
Atributo **```btn-outline-tipo_do_botao```** na classe.

```
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-primary">Primary</button>

```

teste em : https://www.w3schools.com/code/tryit.asp?filename=G45VN4AMZGPY
_______________________________________________________________________________________
#### Desabilitar botão 
Atributo ```disabled```

```html
<button type="button" class="btn btn-primary" disabled>Disabled Button</button>
```

teste em: https://www.w3schools.com/code/tryit.asp?filename=G45W2ST2DJ76

