// Exercício 1: Verificação de Fase
if (pontos >= 10) {
    console.log("Passou de fase!");
} else {
    console.log("Ainda não atingiu pontos suficientes.");
}

// Exercício 2: Vidas e Game Over
if (colidiu) {
    vidas--;
}
if (vidas === 0) {
    console.log("Game Over");
}

// Exercício 3: Porta de Boss
if (temChave && pontos > 20) {
    console.log("Porta do chefão aberta!");
} else {
    console.log("Você não pode entrar.");
}

// Exercício 4: Alerta de Perigo
if (vidas < 2 || tempo < 10) {
    console.log("Perigo!");
}

// Exercício 5: Modo Turbo Condicional
if (teclaT && pontos > 50) {
    console.log("Modo Turbo ativado!");
}

// Exercício 6: Upgrade de Velocidade
if (pontos > 15) {
    velocidade += 20;
}
console.log("Velocidade atual: " + velocidade);

// Exercício 7: Simulador de Pontuação
let score = 0;
for (let fase = 1; fase <= 3; fase++) {
    score += 5;
}
if (score >= 15) {
    console.log("Modo Bônus desbloqueado!");
}

// Exercício 8: Chefe Invencível
if (escudoAtivo && vida > 50) {
    console.log("Pode lutar com o chefe!");
} else {
    console.log("Você não está pronto.");
}

// Exercício 9: Reiniciar Jogo
if (vidas === 0 || tempo === 0) {
    console.log("Reiniciando Jogo...");
}

// Exercício 10: Teste Completo de Lógica
if (vidas > 0) {
    console.log("Você está vivo!");
}
if (pontos >= 10) {
    console.log("Você tem pontos suficientes para continuar.");
}
if (coletouChave) {
    console.log("Você coletou a chave!");
}
