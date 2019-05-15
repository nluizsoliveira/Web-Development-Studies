
* Possui tipo boolean, que retorna true/false. boolean x = (3 > 4) retorna false. Int e boolean são incompatíveis.

```java
        public class MyClass {
            public static void main(String args[]) {
                if(true == 0){
                    System.out.println("true eh zero");
                    }
                else if (true == 1){
                    System.out.println("True eh 1");
                }
            }
        }
```
Retorna o erro :
```
 error: incomparable types: boolean and int
                if(true == 0){
                        ^
error: incomparable types: boolean and int
                else if (true == 1){
```
Portanto, true não é nem 0, nem 1, e sim true. 
_____________________________________________________________________________________________________
* Capacidade dos tipos : 

| Tipo         | Bytes | Grandeza | Intervalo                       |
|--------------|-------|----------|---------------------------------|
| Byte         | 1     | (10²)    | -128 a 127                      |
| Short        | 2     | (10^4)   | -32.768 a 32.767                |
| Int          | 4     | (10^9)   | -2.147.483.648 a -2.147.483.647 |
| Long         | 8     | (10^18)  | 2^63 à (2^63) - 1               |
| Float        | 4     |          |                                 |
| Double       | 8     |          |                                 |
| Char         | 2     |          | 0  a 65535
_____________________________________________________________________________________________________


* Char não possui 1 byte como em C, e sim 2 bytes.  É adotado  unicode, ao qual ascii de 128 caracteres é um subconjunto. Caracteres ascii também são válidos em Java, ocupando as primeiras posições 0 ~ 127;
_____________________________________________________________________________________________________



* Pode-se implementar os operadores -- e ++ prefixados (antes da variável) ou pós fixados (após a variável)

```java 
public class MyClass {
    public static void main(String args[]) {
        int a = 5, b = 5;  
	
    	System.out.println( (a++) +" " + (++b));
    }
} 
```

Tem como saída
```
5 6 . 
```
Isto porque a++ incrementa a após, e ++b incrementa b antes. 
_____________________________________________________________________________________________________
	
 * Printf existe em java. 
```java
public class MyClass {
    public static void main(String args[]) {
       char c = 'X';
    	System.out.printf( "%c”,( c+1));
    }
}					
```
Compila, executa e imprime ```Y```. Pode ser útil para saídas complicadas.
_____________________________________________________________________________________________________
 * Assim como C, possui operadores lógicos AND (&) e OR (|) e XOR (^); 

```java		
public class MyClass {					
    public static void main(String args[]) {				
							
        System.out.println("Tabela do AND &");
        System.out.println("F & F = " + (false & false));
        System.out.println("V & F = " + (true & false));
        System.out.println("V & V = " + (true & true) + "\n");
 
        
        System.out.println("Tabela do OR |");
        System.out.println("F | F = " + (false | false));
        System.out.println("V | F = " + (true | false));
        System.out.println("V | V = " + (true | true)  + "\n");
      
        
        System.out.println("Tabela do XOR ^");
        System.out.println("F ^ F = " + (false ^ false));
        System.out.println("V ^ F = " + (true ^ false));
        System.out.println("V ^ V = " + (true ^ true)  + "\n");
   
        
        }
    }		
```
Imprime
```
Tabela do AND &
F & F = false
V & F = false
V & V = true

Tabela do OR |
F | F = false
V | F = true
V | V = true

Tabela do XOR ^
F ^ F = false
V ^ F = true
V ^ V = false
```


É possível também usar os símbolos && e || , como em C.   && e || são chamados de and / or de curto circuito.  


&& e || operam a segunda opção apenas quando necessário, o que pode ser útil em alguns casos. 

Exemplo: Evitar divisão por zero. 

```java
public class MyClass {
    public static void main(String args[]) {
        int n = 10;
        int d = 2;
        
        if(d != 0 && (n % d) == 0 ){
            System.out.println(d + " eh fator de "+ n);
        }
        
        d = 0; 
        
         if(d != 0 && (n % d) == 0 ){
            System.out.println(d + " eh fator de "+ n);
        }
        
        }
    }
```
Tem como saída 
```
2 eh fator de 10
````
Já 
```java
public class MyClass {
    public static void main(String args[]) {
        int n = 10;
        int d = 2;
        
        if(d != 0 & (n % d) == 0 ){
            System.out.println(d + " eh fator de "+ n);
        }
        
        d = 0; 
        
         if(d != 0 & (n % d) == 0 ){
            System.out.println(d + " eh fator de "+ n);
        }
        
        }
    }

```

Imprime ``` 2 eh fator de 10 ``` ao passar pelo primeiro if, mas também erro de divisão por 0 no segundo. 
			

Isto ocorre dessa maneira pois **ao notar que o primeiro operador é falso, o && de curto circuito não processa a segunda comparação.** 


Ainda assim, há casos onde é interessante usar & e |.
```java
If(false && (++i<100) { 
}			 
```
não incrementaria i nem faria algum comando relevante dentro do condicional. Já 
```java
If(false & (++i<100) { 
}			
```
o faria. 

_____________________________________________________________________________________________________

* Java faz castings automáticos, o que pode ser problemático.

É recomendado forçar castings.Operações de + , - , * e / **binárias** convertem, apenas naquela expressão (e não no programa todo)
		char, bytes e shorts para int.
		Se um dos operandos for long, a expressão é transformada em long.
		Se um dos operando for float/double, a expressão é transformada em float/double. 
		** ++, +=, neste sentido, não contam como expressões binárias e não acarretam em casting automático

  
Além disso, **Java apenas realiza castings automáticos se as classes forem compatíveis, bem como se o número na classe de origem couber, sem degenerações, na classe de destino**. Por exemplo, **é possível armazenar um int em um float, pois float possui a mesma memória (4 bytes) e é capaz de armazenar TODO o conteúdo do int. Mas não é possível armazenar um float em um int, pois não há especificação padrão para armazenar as casas decimais do float no int.**


Exemplo 1 : 

```java
public class MyClass {
    public static void main(String args[]) {
        char a = 'X';
        char b = 'X'; 
        char c = 'X';
        char d = 'X' + 1;
        char e = 'X';
        
        System.out.println("a+1 eh igual a " +  (a+1));    		 // a é castado para int (Durante esta expressão, apenas) pois foi utilizado o operador + binário.
        System.out.println("b++ eh igual a " +  (b++));  		 // ++ não é operador binário. B continua char. 
        System.out.println("++c eh igual a " +  (++c)); 		 // Idem ao acima. Mas com o operador prefixado. 
        System.out.println("d incrementado antes eh igual a " +  (d));	 // d foi somado com +  em OUTRA expressão anterior. Continua sendo char no resto do programa. 
        System.out.println("e+1 castado eh igual a  " + (char) (e+1));	 //casting força a conversão para cast. 
        
    }
} 
```

Tem como saída
```
a+1 eh igual a 89
b++ eh igual a X
++c eh igual a Y
d incrementado antes eh igual a Y
e+1 castado eh igual a  Y 
```


**Exemplo 2 :** 
```java	
public class MyClass {
    public static void main(String args[]) {
        double b = 10;
        byte c = 10;
        b = b*b;
        c = c*c;
    }
}
```
						
						
Tem como saída 
```
error: incompatible types: possible lossy conversion from int to byte
        c = c*c;
             ^
1 error;
```
**c é convertido em int durante a operação c = c*c. AJá ao se transformar em int, c * c não consegue ser automaticamente castado de volta para byte, afinal, a classe de destino (byte) é menor que a classe de origem (int)**. Portanto, o compilador gera o erro, e não compila. b não é convertido em int pois é double, apenas bytes, shorts e chars o são. 

```java 
public class MyClass {
    public static void main(String args[]) {
        double b = 10;
        byte c = 10;
        b = b*b;
        c = (byte)  (c*c);   //-> Parênteses para o casting aplicar na expressão inteira, e não apenas no primeiro c.
    }
}
```

Forçando o cast, o programa compila normalmente. 

Mesmo sendo do mesmo tamanho, float não é automaticamente convertido em int, nem double em long, pois haveria degeneração das casas decimais. 


_____________________________________________________________________________________________________


 * Leitura de caracteres 


System.int complementa System.out, sendo o objeto de entrada ligado ao teclado.  Já read() sempre retorna inteiros, por isso é necessário realizar o cast. 

```java
public class MyClass {
    public static void main(String args[]) 
        throws java.io.IOException {
            
            char c;
            
            System.out.print("Digite um caractere e aperte enter: ");
            
            c = (char) System.in.read();
            
            System.out.println("O caractere eh " + c);
            
    }
}
```



throws java.io.IOException  É uma cláusula que trata possíveis erros de entrada, sendo necessária para System.in.read() funcionar. Explicação de cláusulas serão dadas (muito) mais a frente.

## POO
```
Bibliografia: 
- Curso em vídeo (Youtube)
- Fundamentals of OPP and Data Structures in Java (Wiener, Pinson)
- Java para iniciantes(Oracle Press)
```
_________________________________________________________

* Objeto vs Classe 

**Classe** define os atributos e métodos comuns que serão compartilhados por um objeto. 
**Objeto** é uma instância de uma classe. 
É impossível instanciar um objeto sem classe, já uma classe pode existir sem que necessariamente seus objetos sejam instanciados. 
Toda classe deve ser definida por seus  **Atributos, Métodos e Estados.**  

Ex: Caneta
```
1- Atributo (Características)
  Cor, ponta, tinta, modelo, tampa
2- Método (Coisas que faz, comportamentos, rotinas internas, semelhante às funções em C)
  Escrever, tampar, destampar
3- Estado (Maneira como está no momento)
  cheia, vazia, tampada, destampada
  
```

_________________________________________________________
* Public vs Private vs Protected

**public (+)** acessível por qualquer classe do programa.

**private (-)** acessível apenas pela classe atual

**protected (#)** acessível pelas classes do mesmo pacote da classe onde foi criado, bem como pelas subclasses desta ultima. 


o programa 
```java
class Caneta {
   public String cor;
   private String modelo;
   protected int carga;
}

public class Main{
    public static void main(String args[]){
        Caneta c1 = new Caneta();
        c1.cor = "Azul";
        c1.modelo = "BIC";
        c1.carga = 2;
    
    }
}
```

retorna 

```
/Main.java:11: error: modelo has private access in Caneta
        c1.modelo = "BIC";
          ^
1 error
```

Cor é **public. pode ser alterada por qualquer outra classe**

Modelo é **privado,pode ser alterada apenas por c1**. Gera erro. 

Carga é **protegida**. Como **c1 foi instanciada em Main**, c1.carga passa a ser **acessível por Main e toda outra subclasse de Main.** 

O exemplo utilizou variáveis, mas o mesmo vale para métodos. 
__________________________________________________________

* Setters, Getters e Constructors. Especificador Static.

**Setters, Getters e Constructors são métodos** que **permitem a classes externas solicitar retornos/modificações de atributos internos**.

**Setters Modificam** o atributo do objeto.
**Getters Retornam** para outras classes algum atributo do objeto.
**Constructor Inicializa** o objeto e garante que seus atributos-padrão sejam mais convenientes, ao invés de meramente nulls/0's.
De maneira geral, todo atributo de uma classe deve ter seu próprio getter e setter.
```java
public Objeto() {
}
```
É a maneira como se declara um construtor. É possível também utilizar: 
```java
public Caneta(String x, int y, char z) {
	this.atributox = x;
	this.atributoy = y;
	this.atributoz = z; 
}

```
Caso se deseje inicializar o objeto já com atributos desejados, ao invés de criar uma função para preenchê-lo. 

**Static Especifica que o atributo é da classe, e não individual a cada objeto.** Atributos static modificados por um objeto também 
o são para todos os outros gerados pela classe deste objeto. 

Embora seja possível manipular atributos estáticos com ```this.atributo```, **é de boa prática utilizar ```Classe.atributo```** ou apenas
```atributo```, explicitando que o atributo é da classe, e não do objeto. 

```java 
public class Caneta{
    
    //Atributos
    private String modelo;
    private double ponta;
    private static int qtd;
    
    //Constructor deve ser publico e possuir o mesmo nome da classe
    public Caneta() {
        this.modelo = "Generico";
        this.ponta = 0;
        Caneta.qtd ++;
    }
    
    //metodos Getters e Setters devem ser publicos.
    public String getModelo (){
        return this.modelo;
    }
    
    public void setModelo(String s){
        this.modelo = s; 
    }
    
    public double getPonta (){
        return this.ponta;
    }
    
    public void setPonta(double d){
        this.ponta = d;
    }
    
    public void print_status(){
        System.out.println("Modelo da caneta: "+ this.modelo);
        System.out.println("Ponta da caneta: "+ this.ponta);
    }
    
    //Metodos que retornam atributos estaticos devem ser estaticos
    public static int getQtd(){
        return Caneta.qtd;		
    }
}

public class Main {
    public static void main(String [] args) {
        Caneta objeto = new Caneta();
        Caneta objeto2 = new Caneta();
        
        objeto2.setModelo("BIC");
        objeto2.setPonta(0.7);
        
        objeto.print_status();
        objeto2.print_status();
        System.out.println("Quantidade de canetas: " + Caneta.getQtd());
 
    }
}

```

retorna

```
Modelo da caneta: Generico
Ponta da caneta: 0.0
Modelo da caneta: BIC
Ponta da caneta: 0.7
Quantidade de canetas: 2
```
__________________________________________________________


