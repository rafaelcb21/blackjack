import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, sequence } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('start', [

      state('inicio', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('end', style({ transform: 'translate(745px, -325px)', opacity: 1 })),
      transition('inicio => end', [animate(300, style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicioDeal', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('endDeal', style({ transform: 'translate(745px, -648px)', opacity: 1 })),
      transition('inicioDeal => endDeal',
        [animate('0.3s 300ms', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicio2', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('end2', style({ transform: 'translate(758px, -325px)', opacity: 1 })),
      transition('inicio2 => end2',
        [animate('0.3s 500ms', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicio3', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('end3', style({ transform: 'translate(771px, -325px)', opacity: 1 })),
      transition('inicio3 => end3',
        [animate('0.3s', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicio4', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('end4', style({ transform: 'translate(784px, -325px)', opacity: 1 })),
      transition('inicio4 => end4',
        [animate('0.3s', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicio5', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('end5', style({ transform: 'translate(799px, -325px)', opacity: 1 })),
      transition('inicio5 => end5',
          [animate('0.3s', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicio6', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('end6', style({ transform: 'translate(812px, -325px)', opacity: 1 })),
      transition('inicio6 => end6',
        [animate('0.3s', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicioDeal2', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('endDeal2', style({ transform: 'translate(758px, -648px)', opacity: 1 })),
      transition('inicioDeal2 => endDeal2',
        [animate('0.3s 800ms', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicioDeal3', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('endDeal3', style({ transform: 'translate(771px, -648px)', opacity: 1 })),
      transition('inicioDeal3 => endDeal3',
        [animate('0.3s', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicioDeal4', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('endDeal4', style({ transform: 'translate(784px, -648px)', opacity: 1 })),
      transition('inicioDeal4 => endDeal4',
        [animate('0.3s 300ms', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicioDeal5', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('endDeal5', style({ transform: 'translate(799px, -648px)', opacity: 1 })),
      transition('inicioDeal5 => endDeal5',
        [animate('0.3s 500ms', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),

      state('inicioDeal6', style({ transform: 'translate(955px, -708px)', opacity: 0 })),
      state('endDeal6', style({ transform: 'translate(812px, -648px)', opacity: 1 })),
      transition('inicioDeal6 => endDeal6',
         [animate('0.3s 800ms', style({ transform: 'translate(955px, -708px)', opacity: 1 })), animate(200)]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  // https://codepen.io/Clowerweb/pen/FDcxe

  DECKS = 8;
  faces = ['01_ace', '02', '03', '04', '05', '06', '07', '08', '09', '10', '10_jack', '10_queen', '10_king' ];
  suits = ['hearts', 'diamonds', 'clubs', 'spades' ];
  cutDeck = 0.75;
  list = new Array<number>(this.DECKS);
  deck = [];
  numDeckTempNotRepeat = [];
  deckRandom = [];
  deckToGame = [];
  handJogador= [];
  handDeal = [];
  somaHandJogador: any;
  somaHandDeal: any;
  maoJogador: any;
  maoDeal: any;
  btnPedir = false;
  message: string;
  dinheiroInicial = 2000;
  listaAposta = [];
  apostado = 0;

  maoJogadorBool = false;
  hum = true;
  cinco = true;
  dez = true;
  vintecinco = true;
  cinquenta = true;
  cem = true;
  quinhentos = true;
  mil = true;
  cincomil = false;
  dezmil = false;

  state = 'inicio';
  state2 = 'inicio2';
  state3 = 'inicio3';
  state4 = 'inicio4';
  state5 = 'inicio5';
  state6 = 'inicio6';
  stateDeal = 'inicioDeal';
  stateDeal2 = 'inicioDeal2';
  stateDeal3 = 'inicioDeal3';
  stateDeal4 = 'inicioDeal4';
  stateDeal5 = 'inicioDeal5';
  stateDeal6 = 'inicioDeal6';

  messageBool = false;
  primeiraMao = false;
  show = false;
  circulos = false;
  dealcarta3 = false;
  dealcarta4 = false;
  dealcarta5 = false;
  dealcarta6 = false;

  jogadorcarta3 = false;
  jogadorcarta4 = false;
  jogadorcarta5 = false;
  jogadorcarta6 = false;

  rodadaNext = false;

  type: string;

  ngOnInit() {
    this.criarDeck();
  }
  criarDeck() {
    for (const count of this.list){
      for (const face of this.faces){
        for (const suit of this.suits){
          this.deck.push(face + '_of_' + suit + '.svg');
        }
      }
    }

    while (this.numDeckTempNotRepeat.length < this.DECKS * 52) {
      const numRandom = Math.floor(Math.random() * this.deck.length);
      const compare = this.numDeckTempNotRepeat.indexOf(numRandom);
      if (compare === -1) {
        this.numDeckTempNotRepeat.push(numRandom);
      }
    }

    for (const num of this.numDeckTempNotRepeat){
      this.deckRandom.push(this.deck[num]);
    }

    this.deckToGame = this.deckRandom.slice(5, this.deckRandom.length * this.cutDeck);
    // this.deckToGame =  ['01_ace_of_clubs.svg', '01_ace_of_clubs.svg', '10_of_diamonds.svg',
    //   '10_jack_of_diamonds.svg', '07_of_spades.svg' ]
    // for (const count = 0; count < this.deck.length; count++) {}
}

  onAnimate() {
    this.primeiraMao = true;
    this.state = 'end';
    this.stateDeal = 'endDeal';
    this.state2 = 'end2';
    this.stateDeal2 = 'endDeal2';

    const cart0 = this.deckToGame.shift();
    const cart1 = this.deckToGame.shift();
    const cart2 = this.deckToGame.shift();
    const cart3 = this.deckToGame.shift();

    this.handJogador.push(cart0, cart2);
    this.handDeal.push(cart1, cart3);
    this.somaHandJogador = this.contarHand(this.handJogador);

    if (this.handJogador.length > 0) {
      this.maoJogadorBool = true;
    }

    const x = cart0.substring(3, 4);
    const y = cart2.substring(3, 4);

    const z = cart1.substring(3, 4);
    const d = cart3.substring(3, 4);

    if (this.somaHandJogador[0] === this.somaHandJogador[1]) {
      this.maoJogador = this.somaHandJogador[0];
    } else {
      this.maoJogador = this.somaHandJogador[0] + ' / ' + this.somaHandJogador[1];
    }

    const dealprimeiracarta = parseInt(cart1.slice(0, 2), 10);
    if (dealprimeiracarta === 1) {
      this.maoDeal = dealprimeiracarta + ' / 11';
    } else {
      this.maoDeal = dealprimeiracarta;
    }

    this.circulos = true;
    this.btnPedir = true;

    if (
      ((x === 'a') && (y === 'q' || y === 'j' || y === 'k') ||
      (y === 'a') && (x === 'q' || x === 'j' || x === 'k')) &&
      ((z === 'a') && (d === 'q' || d === 'j' || d === 'k') ||
      (d === 'a') && (z === 'q' || z === 'j' || z === 'k'))
    ) {
      this.message = 'Empate Blackjack';
      this.messageBool = true;
      this.type = 'info';
      this.desfazer();
      this.somaHandDeal = this.contarHand(this.handDeal);
      this.maoDeal = this.retornarMao(this.somaHandDeal);
      this.rodadaNext = true;
      this.show = true;
      this.btnPedir = false;

    } else if (
      ((x === 'a') && (y === 'q' || y === 'j' || y === 'k') ||
      (y === 'a') && (x === 'q' || x === 'j' || x === 'k')) &&
      ((z !== 'a') || (d !== 'a')) ||
      ((z === 'a') && (d !== 'q' || d !== 'j' || d !== 'k') ||
      (d === 'a') && (z !== 'q' || z !== 'j' || z !== 'k')) &&
      ((x === 'a') && (y === 'q' || y === 'j' || y === 'k') ||
      (y === 'a') && (x === 'q' || x === 'j' || x === 'k'))

    ) {
      this.message = 'Blackjack - Você ganhou!!!';
      this.messageBool = true;
      this.type = 'success';
      this.dinheiroInicial = this.apostado * 2.5 + (this.dinheiroInicial);
      this.fimDaRodada();
      this.rodadaNext = true;
      this.somaHandDeal = this.contarHand(this.handDeal);
      this.maoDeal = this.retornarMao(this.somaHandDeal);

      this.show = true;
      this.btnPedir = false;
    }

}

  contarHand(list) {
    const contar = [];
    const contarAce = [];
    const resultado = 0;
    for (const i of list) {
      const valor = parseInt(i.slice(0, 2), 10);
      if (valor === 1) {
        contarAce.push(11);
      } else {
        contarAce.push(valor);
      }
      contar.push(valor);
    }

    const somaAce = contarAce.reduce((a, b) => a + b, 0);
    const soma = contar.reduce((a, b) => a + b, 0);
    return [soma, somaAce];
  }

  animateDone(event) {
    // this.state = 'end';
  }

  parar() {
    this.somaHandJogador = this.contarHand(this.handJogador);
    this.somaHandDeal = this.contarHand(this.handDeal);
    this.maoJogador = this.retornarMao(this.somaHandJogador);
    this.maoDeal = this.retornarMao(this.somaHandDeal);
    let blackjackDeal = false;
    this.show = true;

    const z = this.handDeal[0].substring(3, 4);
    const d = this.handDeal[1].substring(3, 4);

    if (
      ((z === 'a') && (d === 'q' || d === 'j' || d === 'k') ||
      (d === 'a') && (z === 'q' || z === 'j' || z === 'k'))
    ) {
      this.message = 'Blackjack - Você perdeu!!!';
      this.type = 'error';
      this.btnPedir = false;
      blackjackDeal = true;
      this.messageBool = true;
      this.fimDaRodada();
      this.rodadaNext = true;
    }

    while (this.maoDeal < 17) {
      this.handDeal.push(this.deckToGame.shift());
      this.somaHandDeal = this.contarHand(this.handDeal);
      this.maoDeal = this.retornarMao(this.somaHandDeal);
    }

    if (this.handDeal.length >= 3) { this.dealcarta3 = true;  this.stateDeal3 = 'endDeal3'; }
    if (this.handDeal.length >= 4) { this.dealcarta4 = true;  this.stateDeal4 = 'endDeal4'; }
    if (this.handDeal.length >= 5) { this.dealcarta5 = true;  this.stateDeal5 = 'endDeal5'; }
    if (this.handDeal.length >= 6) { this.dealcarta6 = true;  this.stateDeal6 = 'endDeal6'; }

    if (this.maoJogador > this.maoDeal) {
      this.message = 'Você ganhou!!!';
      this.type = 'success';
      this.btnPedir = false;
      this.messageBool = true;
      this.dinheiroInicial = this.apostado * 2 + (this.dinheiroInicial);
      this.fimDaRodada();
      this.rodadaNext = true;
    } else if (((this.maoJogador < this.maoDeal) && (this.maoDeal <= 21)) && (!blackjackDeal)) {
      this.message = 'Você perdeu!!!';
      this.type = 'error';
      this.btnPedir = false;
      this.messageBool = true;
      this.fimDaRodada();
      this.rodadaNext = true;
    } else if ((this.maoJogador < this.maoDeal) && this.maoDeal > 21) {
      this.message = 'Você ganhou!!! - Dealer arrebentou';
      this.type = 'success';
      this.btnPedir = false;
      this.messageBool = true;
      this.dinheiroInicial = this.apostado * 2 + (this.dinheiroInicial);
      this.fimDaRodada();
      this.rodadaNext = true;
    } else if ((this.maoJogador === this.maoDeal) && (!blackjackDeal)) {
      this.message = 'Empatou!!!';
      this.type = 'info';
      this.btnPedir = false;
      this.messageBool = true;
      this.desfazer();
      this.rodadaNext = true;
    } else if ((this.maoJogador === this.maoDeal) && (blackjackDeal)) {
      this.message = 'Blackjack - Você perdeu!!!';
      this.type = 'error';
      this.btnPedir = false;
      this.messageBool = true;
      this.fimDaRodada();
      this.rodadaNext = true;
    }

  }

  pedir() {
    this.handJogador.push(this.deckToGame.shift());
    this.somaHandJogador = this.contarHand(this.handJogador);
    this.maoJogador = this.retornarMao(this.somaHandJogador);

    if (this.handJogador.length === 3) { this.jogadorcarta3 = true;  this.state3 = 'end3'; }
    if (this.handJogador.length === 4) { this.jogadorcarta4 = true;  this.state4 = 'end4'; }
    if (this.handJogador.length === 5) { this.jogadorcarta5 = true;  this.state5 = 'end5'; }
    if (this.handJogador.length === 6) { this.jogadorcarta6 = true;  this.state6 = 'end6'; }

    if (this.maoJogador > 21) {
      this.btnPedir = false;
      this.message = 'Você perdeu!!! - Arrebentou';
      this.type = 'error';
      this.messageBool = true;
      this.fimDaRodada();
      this.somaHandDeal = this.contarHand(this.handDeal);
      this.maoDeal = this.retornarMao(this.somaHandDeal);
      this.rodadaNext = true;
      this.show = true;
      this.btnPedir = false;
    }
  }

  apostar() {
    this.onAnimate();
  }

  proximaRodada() {
    this.rodadaNext = false;
    this.maoJogadorBool = false;
    this.reiniciar();
    if (this.deckToGame.length <= 15) {
      this.criarDeck();
    }
  }

  apostando(money) {
    this.dinheiroInicial = this.dinheiroInicial - money;
    this.listaAposta.push(money);
    this.apostado = this.listaAposta.reduce((a, b) => a + b, 0);
    this.validarChips(this.dinheiroInicial);
  }

  desfazer() {
    this.dinheiroInicial = this.dinheiroInicial + this.apostado;
    this.apostado = 0;
    while (this.listaAposta.length > 0) {
      this.listaAposta.pop();
    }
    this.validarChips(this.dinheiroInicial);
  }

  fimDaRodada() {
    this.apostado = 0;
    while (this.listaAposta.length > 0) {
      this.listaAposta.pop();
    }
    this.validarChips(this.dinheiroInicial);
  }

  validarChips(dinheiro) {
    if (dinheiro >= 1) { this.hum = true; } else { this.hum = false; }
    if (dinheiro >= 5) { this.cinco = true; } else { this.cinco = false; }
    if (dinheiro >= 10) { this.dez = true; } else { this.dez = false; }
    if (dinheiro >= 25) { this.vintecinco = true; } else { this.vintecinco = false; }
    if (dinheiro >= 50) { this.cinquenta = true; } else { this.cinquenta = false; }
    if (dinheiro >= 100) { this.cem = true; } else { this.cem = false; }
    if (dinheiro >= 500) { this.quinhentos = true; } else { this.quinhentos = false; }
    if (dinheiro >= 1000) { this.mil = true; } else { this.mil = false; }
    if (dinheiro >= 5000) { this.cincomil = true; } else { this.cincomil = false; }
    if (dinheiro >= 10000) { this.dezmil = true; } else { this.dezmil = false; }
  }

  reiniciar() {
    this.primeiraMao = false;
    this.show = false;
    this.circulos = false;
    this.dealcarta3 = false;
    this.dealcarta4 = false;
    this.dealcarta5 = false;
    this.dealcarta6 = false;
    this.jogadorcarta3 = false;
    this.jogadorcarta4 = false;
    this.jogadorcarta5 = false;
    this.jogadorcarta6 = false;
    this.messageBool = false;
    this.state = 'inicio';
    this.state2 = 'inicio2';
    this.state3 = 'inicio3';
    this.state4 = 'inicio4';
    this.state5 = 'inicio5';
    this.state6 = 'inicio6';
    this.stateDeal = 'inicioDeal';
    this.stateDeal2 = 'inicioDeal2';
    this.stateDeal3 = 'inicioDeal3';
    this.stateDeal4 = 'inicioDeal4';
    this.stateDeal5 = 'inicioDeal5';
    this.stateDeal6 = 'inicioDeal6';
    while (this.handJogador.length > 0) {
      this.handJogador.pop();
    }
    while (this.handDeal.length > 0) {
      this.handDeal.pop();
    }
  }

  retornarMao(lista) {
    let mao = 0;
    if (lista[0] === lista[1]) {
      mao = lista[0];
    } else {
      const num1 = 21 - lista[0];
      const num2 = 21 - lista[1];

      if (num1 >= 0 && num2 >= 0) {
        if (num1 < num2) {
          mao = lista[0];
        } else {
          mao = lista[1];
        }
      } else if (num1 >= 0 && num2 < 0) {
        mao = lista[0];
      } else if (num2 >= 0 && num1 < 0) {
        mao = lista[1];
      } else if (num1 < 0 && num2 < 0) {
        if (num1 > num2) {
          mao = lista[0];
        } else {
          mao = lista[1];
        }
      }
    }
    return mao;
  }


}
