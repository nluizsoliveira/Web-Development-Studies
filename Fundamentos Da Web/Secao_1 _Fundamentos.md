### Servidores
**Servidor físico** - Máquina física com IP fixo, que requer constante supervisão por parte da empresa/desenvolver sobre questões de segurança/garantia de operabilidade.

**Servidor virtual (VPS)** - Máquina virtual vendida como um serviço por uma empresa de hospedagem. De maneira geral, apresenta menor custo e necessita menor investimento em infraestrutura para manuntenção, já que esta é feita pela empresa mantenedora. Também é mais estável, na medida em que empresas especializadas já possuem infraestrutura para grande número de acessos.

É possível que mais de um servidor de aplicação seja instalado no mesmo servidor físico, cada um rodando em uma porta diferente (Alterna URL). **Apache** é um exemplo de servidor de aplicação. Assim como os servidores, **clientes**, isto é, computadores que geram requisições aos servidores, possuem seu próprio IP. No **protocolo HTTP**,  clientes são sempre agentes ativos e servidores agentes passivos.

### Protocolos
A comunicação entre clientes e servidores é feita por **protocolos**, na medida em que requisições que seguem o padrão previamente estabelecido por um conjunto de regras são corretamente respondidas. Por exemplo, no **protocolo HTTP** (**H**yper**T**ext **T**ransfer **P**rotocol), o **HTML** (**H**yper**T**ext **M**arkup **L**anguage) é quem delimita as regras de escrita. Outros exemplos de protocolos são o FTP(Transferência de Arquivos), SMPT, POP e IMAP (E-mails).


### IP
Protocolo que descreve como endereçar computadores em uma rede. Designa um número exclusivo, o **endereço de ip** a todos os computadores que desejem se conectar à Internet. O ip pode ser **estático** ou **dinâmico**,a depender do provedor de internet. Redes locais também designam ips aos computadores que nela se conectam. Por exemplo, o padrão 192.168.x.x é uma faixa de endereços IP privados gerenciados pelo roteador. Embora várias maquinas possuam o ip local igual, quando conectadas à internet cada uma possui um ip **próprio e único**.

### Domínios
Decorar IPs para gerar requisições aos servidores da web é inviável. Domínios são **"máscaras" associadas a um ip específico**, que permitem facil memorização por parte do usuário. No Brasil, **registro.br** é a organização responsável pela venda de domínios. 

### DNS
Embora para humanos seja mais fácil decorar domínios a IPs, o protocolo http por sí só não define acesso a domínios. Neste sentido, o **DNS** (**D**omain **N**ame **S**ystem) **resolve** nomes de domínios em ips. Inicialmente, o servidor **root** resolve a terminação do domínio (.com.br, .com, .net), indicando qual servidor(**TLD**) gerencia tais dominios. Em seguida, o TLD(**T**op **L**evel **D**omain), servidor mundial de re-direcionalmento, resolve requisição ao **ANS** (**A**uthoritative **N**ame **S**erver), que de fato retorna o IP pedido. (Mais informações em https://serverfault.com/questions/241511/root-nameserver-vs-top-level-domain-server)

### Hospedagem
Hospedagem convencional, por VPS e por SaaS são os tipos mais comuns de hospedagem. 

### Servidor de aplicação
Software que é instalado em um servidor físico, permitindo acesso a diferentes tipos de recursos Web. Cada backend utiliza um servidor de aplicação específico. Por exemplo, o Apache permite a utilização do PHP. O Apache Tomcat, Java. Cada servidor de aplicação é utilizado em uma porta diferente, sendo comum que um servidor utilize mais de um servidor de aplicação. 
 
### Domínio vs Subdomínio vs Porta
