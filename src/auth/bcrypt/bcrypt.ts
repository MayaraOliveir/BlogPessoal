import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    const saltos: number = 10;

    return await bcrypt.hash(senha, saltos);
  }
  /*O saltos é uma string aleatória adicionada a senha antes da criptografia. O número 10 representa o "custo" ou número de rodadas que o algoritmo bcrypt irá executar.

    regra: Um número maior é mais lento (mais seguro contra ataques), e 10 é um valor inicial seguro e comum.

*/

  async compararSenhas(
    senhaDigitada: string, // A senha de texto simples digitada pelo usuário no login
    senhaBanco: string, // O hash criptografado que está salvo no banco de dados
  ): Promise<boolean> {
    return await bcrypt.compare(senhaDigitada, senhaBanco); // chama a função bcrypt que criptografa a senhaDigitada usando o salt que está embutido no senhaBanco e verifica se o hash é identico ao senhaBanco. se for iguais retorna true.
  }
}
