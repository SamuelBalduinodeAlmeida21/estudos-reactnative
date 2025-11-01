#### Orientações: React Native + Expo


#### Requisitos Mínimos
Ter instalado uma versão atual do Nodejs LTS - última que eu vi 22.algumacoisa
VScode
App ExpoGo instalado no celular
**===============================================================================================================**
##### **Passo a Passo para criar um app novo do zero (configuração no CMD)**

1. abra o CMD e navegue até a pasta desejada para alocar o projeto;
2. depois, digite o comando '*npx create-expo-app@latest --template*' e de enter;
3. geralmente ele pergunta se pode instalar os pacotes e da uma tecla para vc digitar sim ou não, sempre opte pelo SIM, via das dúvidas tem os pacotes;
4. ele te dá as opções de template: Default, Blank, Blank com TypeScript, Navigation com TypeScript e Blank Bare - geralmente se usa a Blank com ou sem o type, eu vou usar com o type porque a tipagem fica melhor e a até a IA consegue penetrar melhor;
5. Dê o nome desejado ao APP, sem caracteres especiais, no máximo um HÍFEM ou UNDERLINE = - | \_ ;
6. **\*caso esteja usando ou vá usar yarn**, digite: '*corepack enable*' - isso é uma ferramenta JS que serve para habilitar os pacotes do tipo yarn;



**===================================================================================================================================================================**



##### **Configuração dentro já dentro do VSCode**



1. Abra um novo terminal;
2. Digite: (caso esteja usando **yarn**) '*yarn*' ou (caso esteja usando node.js) '*npm install*'
3. Para iniciar um servidor de desenvolvimento digite: '*npx expo start*'



[Documentação Expo](https://docs.expo.dev/get-started/create-a-project/)



[Documentação React Native](https://reactnative.dev/docs/next/getting-started)



[Documentação Nodejs](https://nodejs.org/docs/latest/api/)



[Documentação Yarn](https://classic.yarnpkg.com/lang/en/docs/)



**===================================================================================================================================================================**



##### Diferença entre ***Bare Flow*** e ***Managed Flow***



* **Bare Flow**: uma linha que se aproxima do React Native PURO, ou seja mais trabalho pra configurar permissões, bibliotecas, paths e outras coisas;



* **Managed Flow**: nessa linha o expo vai gerenciar TUDO o que der pra gerenciar, ou seja, muito mais fácil, pois a gente só se preocupa com desenvolver o app;



* **Expo go**: ele é meio limitado em questão de **recursos complexos**, o que pode ocorrer? pode ocorrer que precisemos instalar e configurar as bibliotecas e imports manualmente;



* **Dev Client**: mais próximo do reactnative puro, porque ele te dá possibilidade de personalização



**===================================================================================================================================================================**



##### Apps ***Nativos*** VS Apps ***Híbridos***



Basicamente, quando vamos desenvolver qualquer tipo de app pra IOS ou Android, nós temos duas possbilidades:

**App Nativo**: no caso do **Android** nós usaríamos **Java** ou **Kotlin** e no caso do **IOS o Swift**, pois na teoria são as únicas linguagens que possuem suporte, **nativamente**;



**App Híbrido**: Js com ReactNative, Ionic, Flutter(Dart) e Ionic(Xamarin)



**===================================================================================================================================================================**



##### Diferença entre ***Hooks***, ***components*** e ***functions***

###### ***Components*** - no react components são representados da seguinte maneira:



 	function **T**este1 () {

 	return <View></View>

}



po, mas tá escrito function ali, então é uma função? ERRADO! **tudo** o que for **componente** dentro de reactnative, terá a **1ª letra MAIÚSCULA**. Os components sempre serão funções, qualquer tipo de função, os components que retornam **JSX**, que utiliza a **sintaxe** do HTML são os componentes.



Componentes podem adiantar DEMAIS algumas coisas relacionadas a estilização e produtividade



expo safe area contexto >> npx expo install react-native-safe-area-context



###### ***Functions normais de js*** - no reactnative temos funções normais do Javascript, que são representadas da seguinte maneira:



 	const teste2 = () => {

 	// '=>' quer dizer arrowfunction

}



 	ou



 	function teste3() {



}



###### ***\*funções que retornam JSX:***



 	 	function teste4 () {

 	return <View></View>

}



 	ou



 	function teste5 = () => {



}



###### ***Hooks***



Os Hooks assim como os components, são ESSENCIAIS, pois eles podem ser reaproveitados para usar em várias partes do aplicativo que estiver sendo desenvolvido, abaixo vai a sintaxe e como se faz um hook:



 	function ***use***Teste6() {

 		***use***\_maisnome()

}

 

Repare que no Hook, nós temos a palavra '**use**' e a primeira letra após o '**use**', é maiúscula, o '**use**' depois da function, é obrigatório para que o reactnative entenda que é um hook, vale ressaltar que o hook sempre fará uso do '**use**';





**Styled Components - No terminal do projeto**\*:\*



*npm install styled-components*

*# or*

*yarn add styled-components*

**===============================================================================================================**

#### Props, Eventos e Filhos em componentes**



Nós podemos adicionar props em componentes, nós vamos no arquivo onde criamos o componente e na acima do export digitamos:

*interface Inome_componentProps{
    props_escolhida: parametro_dentro_dapropsecolhida // << propriedade escolhida foi order no caso do app
}*

*export const MyBt = (props: IMyBtProps) => {
    return(
        <View>
            <Text>Meu BUTÃO {props.order}</Text>
        </View>

        
    )
}*

#### Children

O que diabos seria children no react native e o que seria dentro de um component reactnative?

Basicamente, lembra quando temos um botão em html? <button></button>, children seria o que vai no meio das tags, no entremeio delas, nesse caso do button em html:

<button>
    <p>
        Children
    <p>
</button>

neste caso a tag de paragráfo <p> sera o **children** da tag button

#### Eventos

Um componente pode ter essas 3 propriedades, props, children e eventos

#### Adicionando components no arquivo que vai rendereizar o app, no caso o "App.tsx"

sempre que vc criar um component e for usar, vc PRECISA importar ele no arquivo que vai renderizar o aplicativo

#### Como criar interfaces dinâmicas no Rect?

E se a gente quisesse deixar a interface dinâmica? como a gente pode deiar que o usuário, cadatre coisas, insira e delete coisas?

O react atualmente é feito com componentes funcionais, como por exemplo a função APP, retorna a função JSX e converte isso para a linguagem nativa do aparelho mobile, porém as coisas ficam estáticas e é aqui que iremos aprender: o que é **STATE**

O react é nasicamente uma linguagem que fica executando funções atrás de funções, mas qu

#### 5 Biblliotecas que de acordo com o *Medium*

1. *react-native-outside-press: The Dropdown Savior*
Sabe quando te perguntam: "poxa, esse menu que dropa pra baixo é legal, mas e se o usuário tocar **FORA** dela?" e é nesses momentos que a gente tranca o toba, mas essa biblioteca, o *outside press*, serve justamente pra isso, em um componente importado, vc coda 5 linhas, ao invés de 50;

2. *react-native-background-actions: The Silent Worker*
Essa lib serve pra quando necessitamos ter controle daquelas tarefas que rodam de fundo dentro do anroid enquanto o usuário está mexendo no aplicativo, ou seja, tipo use-states, syncs de X coisas, serve pra isso;

3. *The Game Changer: Zustand + React Query (Most Developers Are Doing This Wrong)*
Zustand: pra o *client state*, por exemplo: user preferences, UI state, temporary data;
React-Query: para os serves states por exemplo: API data, caching e sycrhoninzation, olha só um exemplo prático disso:(
// Zustand store (entire user store in 10 lines)
import { create } from 'zustand';
--
const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
--
// React Query for API data
const { data, isLoading } = useQuery('posts', fetchPosts);
)

4. *react-native-keyboard-controller: The Form Fixer*
/*
import {
  KeyboardController,
  useKeyboardHandler,
} from 'react-native-keyboard-controller';
const MyForm = () => {
  useKeyboardHandler({
    onStart: (e) => {
      'worklet';
      // Smooth, predictable keyboard animations
      translateY.value = withTiming(-e.height);
    },
  });
  return <YourFormComponents />;
};
*/

5. *react-native-progress: The Polish Provider*
bolinha de carregamento!

#### States

O reactnative basicamente fica executando funçõe spor debaixo dos panos, quando ele executa da primeira vez, ele mostra o html na tela, mas sempre que eu incluo alguma coisa ele precisa recarregar TUDO toda vez que incluímos ou alteramos algo e assim ele dispara uma nova incialização, ou seja, isso chamamos de ***fluxo de render***.

'''setState''' e '''useState''' são funções que atuam sempre junto do *fluxo de render* do react native, em casa de dúvida, reassista a aula.

o ***useState*** é uma função simples do próprio react, não do reactnative.

porque não usamos um simples *let*

